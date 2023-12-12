interface Props {
  name: string;
  company: string;
  text: string;
  long?: boolean;
}

export const Testimonial = ({ name, company, text, long = false }: Props) => {
  return (
    <div
      className={`flex flex-col p-5 gap-5 bg-white rounded-xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.04),_0px_4px_10px_0px_rgba(0,0,0,0.04);] h-[136px] ${
        long ? "min-w-[531px]" : "min-w-[353px]"
      }`}>
      <div className="flex flex-row gap-2 items-center">
        <h4 className="text-base leading-19.2 font-semibold text-gray-900">{name}</h4>
        <p className="text-[13px] font-medium leading-[15.6px] text-gray-400">{company}</p>
      </div>

      <p className="text-base font-medium leading-19.2 text-sblack">“{text}”</p>
    </div>
  );
};
