import { bell, clock, trading, notifications } from "../../assets";

export const Card = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap pb-4 md:pb-[72px] gap-4 md:gap-[66px]">
      <div className="flex flex-col gap-4">
        <img src={bell} width={32} height={32} alt="Bell icon" />

        <h3 className="text-[31px] font-medium leading-[37.2px] text-[#F2F2F2]">
          Get notified when a highly correlated whale makes a move
        </h3>

        <p className="text-base leading-19.2 font-medium text-[#F2F2F2] opacity-70">
          Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care
          about becomes active.
        </p>
      </div>

      <div className="flex flex-row items-baseline gap-3.5 overflow-auto ">
        <img src={clock} alt="Card 1" />
        <img src={trading} alt="Card 2" />
        <img src={notifications} alt="Card 3" />
      </div>
    </div>
  );
};
