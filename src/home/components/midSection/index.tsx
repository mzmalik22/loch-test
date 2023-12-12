import { eye, whales } from "../../assets";

export const MidSection = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap lg:flex-row-reverse justify-between lg:justify-between p-4 md:p-0 lg:pr-6 gap-2 lg:gap-6">
      <div className="flex flex-col flex-1 gap-2 lg:items-end w-[305px] pt-[17px]">
        <img src={eye} width={32} height={32} alt="Eye icon" />
        <h3 className="text-[31px] font-medium leading-[37.2px] lg:text-right text-[#F2F2F2]">
          Watch what the whales are doing
        </h3>

        <p className="text-base leading-19.2 font-medium lg:text-right text-[#F2F2F2] opacity-70">
          All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
        </p>
      </div>
      <img
        src={whales}
        width={335}
        height={306}
        alt="Whales"
        className="rounded-xl bg border-[1.5px] border-white border-opacity-[0.68] shadow-[0px_14px_64px_-4px_rgba(24,39,75,0.12),_0px_8px_22px_-6px_rgba(24,39,75,0.12)]"
      />
    </div>
  );
};
