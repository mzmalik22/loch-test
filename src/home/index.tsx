import { bg } from "./assets";
import { Form } from "./components/form";
import { MidSection } from "./components/midSection";
import { TopSection } from "./components/topSection";
import { BottomSection } from "./components/bottomSection";

export const Home = () => {
  return (
    <main className="flex flex-col md:flex-row">
      <div
        className="sm:w-full md:w-[55%] pl-4 lg::pl-[60px] md:pb-[6px] md:pt-[85px] flex flex-col gap-2 bg-black bg-no-repeat bg-cover min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}>
        <TopSection />
        <MidSection />
        <BottomSection />
      </div>

      <div className="sm:w-full md:w-[45%] grid place-items-center bg-white md:min-h-screen">
        <Form />
      </div>
    </main>
  );
};
