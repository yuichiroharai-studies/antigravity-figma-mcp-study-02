import { imgGroup212 } from "./svg-51jij";

export default function HeroSection() {
  return (
    <div
      className="relative box-border flex size-full flex-col content-stretch items-center justify-center gap-[100px] bg-[#043873] px-[16px] py-[80px]"
      data-name="Hero-section"
      data-node-id="547:9136"
    >
      <div
        className="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[100px]"
        data-name="Heading / Image"
        data-node-id="547:9137"
      >
        <div
          className="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[60px]"
          data-name="Heading"
          data-node-id="547:9138"
        >
          <div
            className="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[24px] text-center text-white not-italic"
            data-name="Text-block"
            data-node-id="547:9139"
          >
            <p
              className="relative w-full shrink-0 font-['Inter',sans-serif] text-[36px] leading-[normal] font-bold tracking-[-0.72px]"
              data-node-id="547:9207"
            >
              Get More Done with whitepace
            </p>
            <p
              className="relative w-full shrink-0 font-['Inter',sans-serif] text-[18px] leading-[30px] font-normal tracking-[-0.36px]"
              data-node-id="547:9208"
            >
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          <div
            className="relative box-border flex shrink-0 content-stretch items-center gap-[10px] overflow-clip rounded-[8px] bg-[#4f9cf9] px-[40px] py-[20px]"
            data-name="Btn-free-trial"
            data-node-id="547:9209"
          >
            <p
              className="relative shrink-0 font-['Inter',sans-serif] text-[18px] leading-[30px] font-medium tracking-[-0.36px] text-nowrap whitespace-pre text-white not-italic"
              data-node-id="547:9210"
            >{`Try Whitepace free`}</p>
            <div
              className="relative size-[10px] shrink-0"
              data-node-id="547:9211"
            >
              <div className="absolute inset-[-5%]">
                <img
                  alt=""
                  className="block size-full max-w-none"
                  src={imgGroup212}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative flex shrink-0 flex-col content-stretch items-start gap-[4px]"
          data-name="Image-container"
          data-node-id="547:9214"
        >
          <div
            className="h-[191px] w-[286px] shrink-0 bg-[#c4defd]"
            data-name="Asset 1 2"
            data-node-id="547:9215"
          />
        </div>
      </div>
    </div>
  );
}
