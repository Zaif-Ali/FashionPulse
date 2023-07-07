import { NextPage } from "next";
import Wrapper from "./Wrapper";
import { FcGoogle } from "react-icons/fc";
import ToolTip_BTN from "./Buttons/ToolTip_BTN";

interface Props {}

const Intouch: NextPage<Props> = ({}) => {
  return (
    <Wrapper className="w-full h-full p-6 md:p-10 lg:p-16 bg-gray-950  md:rounded-lg flex justify-center items-center">
      <div className="flex flex-col text-gray-100 space-y-5">
        <span className=" text-center font-medium text-xl ">BE THE FIRST </span>
        <span className="text-gray-300 font-semibold text-lg  text-center ">
          Be in the know. Sign in for exclusive previews, early access to sales,
          and the latest arrivals
        </span>
        <div className="flex justify-center items-center">
          <ToolTip_BTN
            childElement={
              <button
                type="button"
                className="text-gray-100 flex justify-center space-x-5 items-center text-base  px-4 py-2 bg-gray-800 rounded-lg 
          hover:bg-gray-800/80 hover:text-gray-50 "
              >
                <FcGoogle className="text-[25px] pr-2" />
                Sign in with Google
              </button>
            }
            ToolTipName="Sign-in and get in touch"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Intouch;
