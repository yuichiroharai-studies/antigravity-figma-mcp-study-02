import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";
import * as fs from "fs";
import * as path from "path";

// .env.localファイルを読み込む
config({ path: ".env.local" });

// 環境変数からAPIキーを取得
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("エラー: GEMINI_API_KEYが設定されていません。");
  console.error(".env.localファイルにGEMINI_API_KEYを設定してください。");
  process.exit(1);
}

// 設定定数
const IMAGE_DIR = "docs/figma";
const IMAGE_PREFIX = "screenshot-";
const OCR_PREFIX = "ocr-";
const AI_MODEL = "gemini-2.0-flash-lite";
const PROMPT =
  "この画像はWebサイトのデザインです。画像内のすべてのテキストを正確に抽出してください。ひとつの段落と思われるものはひとつのテキストにしてください。";

// 画像フォルダのパス
const imageDir = path.resolve(IMAGE_DIR);
if (!fs.existsSync(imageDir)) {
  console.error(`エラー: フォルダが見つかりません: ${imageDir}`);
  process.exit(1);
}

// 画像ファイルの拡張子
const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp"];

// 画像ファイルを検索
function findImageFiles(dir: string): string[] {
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    })
    .map((file) => path.join(dir, file));
}

// 画像のMIMEタイプを判定
function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".webp": "image/webp",
  };
  return mimeTypes[ext] || "image/jpeg";
}

// Gemini APIクライアントを初期化
const genAI = new GoogleGenAI({ apiKey: API_KEY });

// 出力ファイル名を生成（screenshot-01-header.png → ocr-01-header.json）
function generateOutputFileName(imagePath: string): string {
  const basename = path.basename(imagePath, path.extname(imagePath));
  // screenshot-01-header → ocr-01-header
  const outputName = basename.replace(
    new RegExp(`^${IMAGE_PREFIX}`),
    OCR_PREFIX,
  );
  return path.join(imageDir, `${outputName}.json`);
}

async function extractTextFromImage(imagePath: string): Promise<string> {
  console.log(`\n画像を処理中: ${path.basename(imagePath)}`);

  // 画像ファイルを読み込んでBase64エンコード
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString("base64");
  const mimeType = getMimeType(imagePath);

  const result = await genAI.models.generateContent({
    model: AI_MODEL,
    contents: [
      {
        text: PROMPT,
      },
      {
        inlineData: {
          mimeType: mimeType,
          data: base64Image,
        },
      },
    ],
    config: {
      responseMimeType: "application/json",
    },
  });

  // レスポンスからテキストを取得
  const text = result.text;

  if (!text) {
    throw new Error("テキストを抽出できませんでした。");
  }

  return text;
}

async function processAllImages() {
  try {
    const imageFiles = findImageFiles(imageDir);

    if (imageFiles.length === 0) {
      console.log("画像ファイルが見つかりませんでした。");
      return;
    }

    console.log(`${imageFiles.length}個の画像ファイルが見つかりました。\n`);

    // 各画像ファイルを処理
    for (let i = 0; i < imageFiles.length; i++) {
      const imagePath = imageFiles[i];
      const outputPath = generateOutputFileName(imagePath);

      try {
        console.log(`[${i + 1}/${imageFiles.length}] 処理中...`);
        const extractedText = await extractTextFromImage(imagePath);

        // 結果をファイルに保存
        fs.writeFileSync(outputPath, extractedText, "utf-8");
        console.log(`✓ 完了: ${path.basename(outputPath)}`);

        // APIレート制限を避けるために少し待機
        if (i < imageFiles.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      } catch (error) {
        console.error(`✗ エラー: ${path.basename(imagePath)}`);
        if (error instanceof Error) {
          console.error(`  エラーメッセージ: ${error.message}`);
        }
      }
    }

    console.log(`\nすべての処理が完了しました。`);
  } catch (error) {
    console.error("エラーが発生しました:", error);
    if (error instanceof Error) {
      console.error("エラーメッセージ:", error.message);
    }
    process.exit(1);
  }
}

processAllImages();
