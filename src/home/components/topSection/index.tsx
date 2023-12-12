import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { bell, clock, trading, notifications } from "../../assets";

import 'swiper/css';

export const TopSection = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap pb-4 p-4 md:p-0 md:pb-[72px] gap-4 md:gap-2 lg:gap-[66px] shadow-inner">
      <div className="flex flex-col gap-4 md:max-w-[322px]">
        <img src={bell} width={32} height={32} alt="Bell icon" />

        <h3 className="text-[31px] font-medium leading-[37.2px] text-[#F2F2F2]">
          Get notified when a highly correlated whale makes a move
        </h3>

        <p className="text-base leading-19.2 font-medium text-[#F2F2F2] opacity-70">
          Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care
          about becomes active.
        </p>
      </div>
      <div className="relative h-fit overflow-auto w-full md:py-3">
        <div className="hidden lg:block top_box absolute w-[10%] left-0 top-[-10px] bottom-0 h-full z-10"></div>
        <div className="flex flex-row w-full items-start gap-4 h-fit overflow-hidden overflow-x-auto rounded-lg z-10">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={8}
            centeredSlides={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col justify-between gap-2 p-4 rounded-lg max-h-[172px] min-h-[172px] bg-white">
                <div className="flex justify-between">
                  <img src={notifications} alt="notifications_icon" />
                  <h1 className="text-[9px] leading-[10px] text-[#19191A] font-semibold">Save</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[14px] leading-[16px] text-[#19191A] font-medium">
                    We’ll be sending notifications to you here
                  </h1>
                  <input
                    type="text"
                    placeholder="Message"
                    className="py-4 px-4 outline-none rounded-lg bg-white border border-[#E5E5E6] text-base font-medium leading-[19.2px] placeholder:text-[#CACBCC]"
                  />
                </div>
              </div>
              </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-between gap-4 p-4 rounded-lg max-h-[172px] min-h-[172px] bg-white">
                <div className="flex justify-between">
                  <img src={trading} alt="notifications_icon" />
                  <input type="checkbox" checked />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[11.5px] leading-[14px] text-[#19191A] font-medium">
                    Notify me when any wallets move more than
                  </h1>
                  <select
                    className="text-[11.5px] leading-[14px] text-[#313233] font-medium p-2 px-3 bg-[#E5E5E680] rounded-md max-w-fit"
                    name="amount"
                    id="amount">
                    <option value={1000}>$10000</option>
                    <option value={2000}>$20000</option>
                    <option value={3000}>$30000</option>
                    <option value={4000}>$40000</option>
                    <option value={5000}>$50000</option>
                  </select>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-between gap-3 p-4 rounded-lg max-h-[172px] min-h-[172px] bg-white">
                <div className="flex justify-between">
                  <img src={clock} alt="notifications_icon" />
                  <input type="checkbox" />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[11.5px] leading-[14px] text-[#19191A] font-medium">
                    Notify me when any wallet dormant for
                  </h1>
                  <select
                    className="text-[11.5px] leading-[14px] text-[#313233] font-medium p-2 px-3 bg-[#E5E5E680] rounded-md max-w-fit"
                    name="amount"
                    id="amount">
                    <option value={1000}>{">10 days"}</option>
                    <option value={2000}>{">20 days"}</option>
                    <option value={3000}>{">30 days"}</option>
                    <option value={4000}>{">40 days"}</option>
                    <option value={5000}>{">50 days"}</option>
                  </select>
                  <h1 className="text-[11.5px] leading-[14px] text-[#19191A] font-medium">becomes active</h1>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className="hidden lg:block top_box_right absolute w-[10%] right-0 top-0 bottom-0 h-full z-10"></div>
      </div>
    </div>
  );
};
