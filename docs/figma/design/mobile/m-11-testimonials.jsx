import { imgSlider } from "./svg-s9rnb";

export default function Testimonial() {
  return (
    <div
      className="relative box-border flex size-full flex-col content-stretch items-center justify-center gap-[60px] px-[16px] py-[100px]"
      data-name="Testimonial"
      data-node-id="547:10087"
    >
      <p
        className="relative size-full text-center font-['Inter:Bold',sans-serif] text-[40px] leading-[52px] font-bold text-[#212529] not-italic"
        data-node-id="547:10117"
      >
        What Our Clients Says
      </p>
      <div
        className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[32px]"
        data-name="Content"
        data-node-id="547:10118"
      >
        <div
          className="relative box-border flex w-[288px] shrink-0 flex-col content-stretch items-start gap-[40px] rounded-[10px] bg-white p-[20px] shadow-[15px_10px_50px_0px_rgba(0,0,0,0.1)]"
          data-name="Client"
          data-node-id="547:10119"
        >
          <div
            className="relative box-border flex w-full shrink-0 flex-col content-stretch items-start gap-[32px] border-[0px_0px_1px] border-solid border-[#212529] px-0 pt-0 pb-[40px]"
            data-name="Comment"
            data-node-id="547:10120"
          >
            <div
              className="h-[40px] w-[56px] shrink-0 bg-[#c4defd]"
              data-name="Placeholder"
              data-node-id="553:10323"
            />
            <p
              className="relative w-[min-content] min-w-full shrink-0 font-['Inter:Regular',sans-serif] text-[16px] leading-[20px] font-normal tracking-[-0.32px] text-[#212529] not-italic"
              data-node-id="547:10126"
            >
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col content-stretch items-start justify-end gap-[24px]"
            data-name="Name-box"
            data-node-id="547:10127"
          >
            <div
              className="size-[65px] shrink-0 rounded-[9999px] bg-[#c4defd]"
              data-name="Placeholder"
              data-node-id="553:10324"
            />
            <div
              className="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[15px] text-[18px] tracking-[-0.36px] text-[#212529] not-italic"
              data-name="Name"
              data-node-id="547:10129"
            >
              <p
                className="relative w-full shrink-0 font-['Inter:SemiBold',sans-serif] leading-[normal] font-semibold"
                data-node-id="547:10130"
              >
                Oberon Shaw, MCH
              </p>
              <p
                className="relative w-full shrink-0 font-['Inter:Regular',sans-serif] leading-[30px] font-normal"
                data-node-id="547:10131"
              >
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative h-[12px] w-[60px] shrink-0"
        data-name="Slider"
        data-node-id="547:10132"
      >
        <img alt="" className="block size-full max-w-none" src={imgSlider} />
      </div>
    </div>
  );
}
