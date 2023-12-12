import { diamond } from "../../assets";
import { Testimonial } from "./testimonial";

export const BottomSection = () => {
  return (
    <div className="flex flex-col gap-4 pt-4 pl-4 pb-4 md:p-3 lg:gap-8 lg:p-0">
      <h2 className="text-background text-center md:text-right border-b text-[25px] font-medium leading-[30px] pb-4 md:pb-5 border-b-gray-50 lg:mr-[62px]">
        Testimonials
      </h2>

      <div className="flex flex-row items-end gap-4 md:gap-8">
        <img className="hidden md:block" src={diamond} width={60} height={60} alt="Diamond icon" />

        <div className="flex flex-row overflow-x-auto overflow-y-hidden gap-5">
          <Testimonial
            name="Jack F"
            company="Ex Blackrock PM"
            text="Love how Loch integrates portfolio analytics and whale watching into one unified app."
          />

          <Testimonial
            name="Yash P"
            company="Research, 3poch Crypto Hedge Fund"
            text="I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"
          />

          <Testimonial
            name="Shiv S"
            company="Co-Founder Magik Labs"
            text="Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple."
            long
          />
        </div>
      </div>
    </div>
  );
};
