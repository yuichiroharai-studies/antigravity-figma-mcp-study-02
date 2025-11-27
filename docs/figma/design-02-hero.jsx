import { imgGroup212 } from "./svg-2bbot";

export default function HeroSection() {
  return (
    <div
      className="relative box-border flex size-full content-stretch items-center bg-[#043873] px-[32px] py-[100px]"
      data-name="Hero-section"
      data-node-id="547:8092"
    >
      <div
        className="relative flex min-h-px min-w-px shrink-0 grow basis-0 flex-col content-stretch items-start gap-[60px]"
        data-name="Heading"
        data-node-id="547:8160"
      >
        <div
          className="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[24px] text-white not-italic"
          data-name="Text-block"
          data-node-id="547:8161"
        >
          <p
            className="relative w-full shrink-0 font-['Inter:Bold',sans-serif] text-[64px] leading-[normal] font-bold tracking-[-1.28px]"
            data-node-id="547:8162"
          >
            Get More Done with whitepace
          </p>
          <p
            className="relative w-full shrink-0 font-['Inter:Regular',sans-serif] text-[18px] leading-[30px] font-normal tracking-[-0.36px]"
            data-node-id="547:8163"
          >
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
        </div>
        <div
          className="relative box-border flex shrink-0 content-stretch items-center gap-[10px] rounded-[8px] bg-[#4f9cf9] p-[20px]"
          data-name="Btn-free-trial"
          data-node-id="547:8164"
        >
          <p
            className="relative shrink-0 font-['Inter:Medium',sans-serif] text-[18px] leading-[23px] font-medium tracking-[-0.36px] text-nowrap whitespace-pre text-white not-italic"
            data-node-id="547:8165"
          >
            Try Whitepace free
          </p>
          <div
            className="relative size-[10px] shrink-0"
            data-node-id="547:8166"
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
        className="h-[456px] w-[685px] shrink-0 bg-[#c4defd]"
        data-name="Image-container"
        data-node-id="547:8169"
      />
    </div>
  );
}
