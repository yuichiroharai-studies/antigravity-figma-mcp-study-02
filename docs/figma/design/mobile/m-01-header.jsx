import { imgHumMenu } from "./svg-nqy3p";

export default function Header() {
  return (
    <div
      className="relative box-border flex size-full content-stretch items-center justify-between bg-[#043873] p-[16px]"
      data-name="Header"
      data-node-id="547:9985"
    >
      <div
        className="relative flex w-[134px] shrink-0 content-stretch items-center justify-between"
        data-name="Logo"
        data-node-id="547:9986"
      >
        <div
          className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
          data-name="Logo"
          data-node-id="547:9987"
        >
          <div
            className="mt-[2px] ml-0 h-[20px] w-[26px] bg-[#c4defd] [grid-area:1_/_1]"
            data-name="Placeholder"
            data-node-id="553:10309"
          />
          <p
            className="relative mt-0 ml-[32.99px] font-['Inter:Bold',sans-serif] text-[19.644px] leading-[normal] font-bold text-nowrap whitespace-pre text-white not-italic [grid-area:1_/_1]"
            data-node-id="547:9994"
          >
            whitepace
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div
          className="relative flex h-full shrink-0 content-stretch items-center gap-[40px]"
          data-name="Btn"
          data-node-id="547:9995"
        >
          <div
            className="relative h-[24px] w-[42px] shrink-0"
            data-name="Hum-menu"
            data-node-id="547:10009"
          >
            <div className="absolute top-[-8.33%] right-0 bottom-0 left-0">
              <img
                alt=""
                className="block size-full max-w-none"
                src={imgHumMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
