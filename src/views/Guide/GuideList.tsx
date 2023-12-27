import React from "react";
import jelly from "@/assets/jelly.svg";
import arrow from "@/assets/arrow.svg";
import rightarrow from "@/assets/rightarrow.svg";
import blackrightarrow from "@/assets/blackrightarrow.svg";
import faq from "@/assets/faq.svg";
import cskakao from "@/assets/cskakao.svg";
import headphone from "@/assets/headphone.png";
import blacklogo from "@/assets/blacklogo.svg";
import funnel from "@/assets/funnel.svg";
import inprogress from "@/assets/inprogress.svg";
import funnel_shadow from "@/assets/funnel_shadow.png";
import CustomerCenter from "@components/CustomerCenter";
import CustomerDescription from "@components/CustomerDescription";
import useWindowSize from "@/utils/useWindowSize";
import FaqList from "@components/FaqList";
import { motion } from "framer-motion";
import FaqCategoryList from "@components/FaqCategoryList";

export default function GuideList() {
  const isWideScreen = useWindowSize();

  return (
    <div className="flex flex-col flex-1     ">
      <div className="flex flex-col max-md:min-h-[616px]  max-md:mt-[60px] max-md:mb-[25px] max-md:mx-[30px] md:my-[100px] md:mx-[67px]  ">
        <div className="flex flex-col gap-[10px] mx-auto">
          <div className="md:w-[32px] md:h-[32px] max-md:w-[22px] max-md:h-[22px] mx-auto">
            <img src={jelly} alt="jelly" className="w-full" />
          </div>
          <div className="mx-auto ">
            <h6 className="max-md:text-[18px] md:text-[32px] text-dzzmain-light-500 font-bold">
              단짠 가이드
            </h6>
          </div>
        </div>
        <div className="flex max-md:gap-[15px] max-md:mt-[20px] md:gap-[30px] md:mt-[37px] md:mx-auto">
          <text className="max-md:text-[18px] md:text-[32px] font-bold">
            FAQ
          </text>
          <text className="max-md:text-[18px] md:text-[32px] font-bold ">
            큐레이션
          </text>
        </div>
        <div className="flex md:flex-wrap md:gap-y-[20px] gap-x-[15px] md:w-[544px] md:my-[67px] md:mx-auto  max-md:mt-[20px]   ">
          {isWideScreen ? (
            <>
              <FaqCategoryList />
            </>
          ) : (
            <>
              {" "}
              <div className="flex px-[10px] py-[8px] rounded-[30px] bg-system-gray-200 gap-[10px] items-center justify-center ">
                <text className="max-md:text-[12px] md:text-[16px]">
                  자주 물어보는 질문
                </text>
                {/* 이미지를 90도 오른쪽으로 꺽기  */}
                <img
                  src={blackrightarrow}
                  alt="arrow"
                  className=" transform rotate-90"
                />
              </div>{" "}
            </>
          )}
        </div>
        <div className="flex flex-col max-md:mt-[20px]  md:mx-auto gap-[15px] md:mt-[37px]">
          <div className="flex max-md:text-[16px] md:text-[18px] m-[10px] max-md:mx-[10px] max-md:gap-[15px] md:gap-[10px]">
            <text>Q</text>
            <text>인증번호가 오지 않아요.</text>
          </div>
          <div className="flex max-md:text-[16px] md:text-[18px] m-[10px] max-md:mx-[10px] max-md:gap-[15px] md:gap-[10px]">
            <text>Q</text>
            <text>매칭이 계속 실패 되어요. (티켓이 계속 반환 되어요.)</text>
          </div>
          <div className="flex max-md:text-[16px] md:text-[18px] m-[10px] max-md:mx-[10px] max-md:gap-[15px] md:gap-[10px]">
            <text>Q</text>
            <text>캠퍼스 인증을 진행했는데 아직 티켓을 받지 못했어요.</text>
          </div>
          <div className="flex max-md:text-[16px] md:text-[18px] m-[10px] max-md:mx-[10px] max-md:gap-[15px] md:gap-[10px]">
            <text>Q</text>
            <text>비밀번호가 마음에 들지 않아요. 다시 바꿀 수 없나요?</text>
          </div>
        </div>
        <div className="flex max-md:mt-[20px] md:mt-[37px] mx-auto justify-center items-center bg-blue-300 ">
          <text className="mx-[30px] my-[10px]">
            &lt; 1 2 3 4 5 6 7 8 9 10 &gt;{" "}
          </text>
        </div>
      </div>
      <div className="flex bg-system-nutral-white w-full max-md:h-[264px] md:h-[254px]">
        <div className="flex max-md:flex-col md:justify-between max-md:flex-1 max-md:my-[25px] mx-[30px] md:w-[599px] md:h-[154px] md:mx-auto md:my-auto max-md:gap-[15px] ">
          <div className=" md:self-center">
            <CustomerDescription />
          </div>
          <div>
            <CustomerCenter />
          </div>
        </div>
      </div>
    </div>
  );
}
