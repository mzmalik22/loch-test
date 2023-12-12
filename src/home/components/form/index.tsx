import { useNavigate } from "react-router-dom";
import { useCallback, useState, ChangeEventHandler } from "react";

export const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  }, []);

  const validateEmail = (email:any) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  const handleSubmit = useCallback(
    (e: any) => {
      if(isValidEmail){
      e.preventDefault();
      window.location.replace("https://app.loch.one/welcome");
    }},
    [email],
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-[365px] p-4">
      <h2 className="text-[39px] mb-8 font-medium leading-[46.8px] text-[#B0B1B3]">Sign up for exclusive access.</h2>

      <input
        className="py-5 px-6 mb-6 outline-none rounded-lg bg-white border border-[#E5E5E6] text-base font-medium leading-[19.2px] placeholder:text-[#CACBCC]"
        required
        placeholder="Your email address"
        type="email"
        value={email}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="rounded-lg mb-6 border-[#19191A] bg-[#19191A] grid text-white leading-[19.2px] place-items-center h-[59px]"
        onClick={handleSubmit}>
        Get started
      </button>

      <p className="py-4 text-[#19191A] font-semibold text-base leading-[19.2px] text-center">
        You'll receive an email with an invite link to join.
      </p>
    </form>
  );
};
