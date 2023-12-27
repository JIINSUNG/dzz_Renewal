import React from "react";
import jelly from "@/assets/jelly.svg";
import arrow from "@/assets/arrow.svg";
import rightarrow from "@/assets/rightarrow.svg";
import blackrightarrow from "@/assets/blackrightarrow.svg";
import faq from "@/assets/faq.svg";
import headphone from "@/assets/headphone.png";
import blacklogo from "@/assets/blacklogo.svg";
import funnel from "@/assets/funnel.svg";
import inprogress from "@/assets/inprogress.svg";
import funnel_shadow from "@/assets/funnel_shadow.png";
import CustomerCenter from "@components/CustomerCenter";
import FaqList from "@components/FaqList";

import { motion } from "framer-motion";
import CustomerDescription from "@components/CustomerDescription";
import FaqCategoryList from "@components/FaqCategoryList";

export default function Guide() {
  return (
    <div className="flex flex-col flex-1   w-full  ">
      <div className="flex flex-col mx-auto md:min-h-[369px] max-md:min-h-[496px] max-md:my-[60px] md:my-[100px] ">
        <div className="md:w-[32px] md:h-[32px] max-md:w-[22px] max-md:h-[22px] mx-auto">
          <img src={jelly} alt="jelly" className="w-full" />
        </div>
        <div className="mt-[10px] mx-auto">
          <h6 className="max-md:text-[18px] md:text-[32px] text-dzzmain-light-500 font-bold">
            단짠 가이드
          </h6>
        </div>
        <div className="flex max-md:flex-col md:items-center  max-md:mt-[36px] md:my-[40px] gap-[60px]  ">
          <div className="flex flex-col text-center w-[215px] h-[78px] gap-[15px] mx-auto text-dzzbutton font-bold ">
            <text className="text-[24px] text-system-black-light">
              무엇을 도와드릴까요?
            </text>
            <div className="flex gap-[10px] border-b border-solid border-black font-semibold cursor-pointer">
              <text
                className="text-[16px] text-system-black-light "
                onClick={() => {
                  window.location.href = "/guidelist";
                }}
              >
                자주 물어보는 질문 보러가기
              </text>
              <img src={arrow} alt="arrow" className="md:alight-end" />
            </div>
          </div>
          <div className="flex  md:w-[365px] max-md:w-[295px] flex-wrap   gap-x-[15px] gap-y-[20px]">
            <FaqCategoryList />
          </div>
        </div>
        <div className="flex  w-full  max-md:mt-[36px] md:mt-[10px] justify-center ">
          <div className="flex rounded-[30px] items-center justify-center w-[255px] h-[58px]  bg-system-black-deepblack cursor-pointer">
            <text className="text-system-nutral-white">고객센터 문의하기</text>
          </div>
        </div>
      </div>

      <div className="flex md:min-h-[700px] max-md:min-h-[446px] bg-system-nutral-white  ">
        <div className="flex flex-col max-md:w-[315px] max-md:h-[370px] md:w-[475px] md:h-[540px] mx-auto md:my-[100px] max-md:my-[38px] bg-system-nutral-truewhite rounded-[20px] shadow-sm">
          <div className="flex mx-[30px] max-md:my-[30px] md:mt-[50px] md:mb-[30px] justify-center gap-[20px]">
            <img src={faq} alt="faq" />
            <text>
              많은사람이
              <br /> 물어보는 질문이에요!
            </text>
          </div>
          <div className="flex flex-col mx-[30px] gap-[10px]">
            <FaqList />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <text className="flex gap-[10px]">
              <span>1</span>
              <span>/</span>
              <span>3</span>
            </text>
          </div>
        </div>
      </div>
      <div className="flex md:min-h-[584px] max-md:min-h-[624px] bg-gradient-to-b from-transparent via-transparent to-gray-300  ">
        <div className="flex flex-col  max-md:w-full  max-md:mx-[30px]  md:w-[650px] md:h-[484px] mt-[50px]  md:mx-auto  ">
          <div className="flex md:w-full md:justify-between max-md:flex-col   max-md:gap-[20px] md:mt-[50px] ">
            <div>
              <h3>안녕하세요,</h3>
              <h3>단짠지기입니다!</h3>
            </div>
            <CustomerDescription />
          </div>
          <div className="flex w-full md:flex max-md:flex-col md:mt-[50px] max-md:mt-[20px] md:justify-between ">
            <CustomerCenter />
            {/* <div className="flex items-center">
              <div className="flex items-center max-md:w-[1px] md:w-[6px] max-md:h-[110px]  md:h-[154px] mr-[15px] bg-system-gray-light"></div>
              <div className="flex flex-col gap-[5px]">
                <div>
                  <img src={cskakao} alt="cskakao" />
                  <div></div>
                </div>
                <text className="max-md:text-[12px] md:ext-[18px] md:font-bold">
                  고객센터 운영시간
                </text>
                <text className="max-md:text-[12px] md:text-[18px] ">
                  월 ~ 토 : 오전 10시 ~ 오후 10시
                </text>
                <text className="max-md:text-[12px] md:text-[18px] ">
                  점심시간 : 오후 12시 ~ 오후 1시
                </text>
                <text className="max-md:text-[12px] md:text-[18px] text-system-red-normallight">
                  일,공휴일 : 휴무
                </text>
              </div>
            </div> */}
            <div className="flex flex-col items-end justify-center">
              <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img src={headphone} alt="headphone" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:min-h-[522px] max-md:min-h-[609px] bg-system-gray-200">
        <div className="flex flex-col w-full max-md:mx-[30px] max-md:mt-[50px]  md:mt-[70px] md:w-[650px] md:h-[202px] md:mx-auto ">
          <div className="flex ">
            <div className="w-[131.25px] h-[25px]">
              <img src={blacklogo} alt="blacklogo" />
            </div>
            <h3>에게</h3>
          </div>
          <div className="flex max-md:flex-col md:flex md:text-system-gray-light max-md:gap-[5px] md:gap-[10px]">
            <h3>하고싶은 말이</h3>
            <h3>있으신가요?</h3>
          </div>
          <div className="flex w-full h-full gap-[20px] md:flex max-md:flex-col md:mt-[15px] max-md:mt-[20px]  ">
            <div className="flex w-full h-[112px] px-[20px] py-[20px] gap-[5px] rounded-[15px] bg-system-nutral-white">
              <div className="flex flex-1  flex-col">
                <div className="flex justify-between">
                  <text className="large-bold">만족도 평가</text>
                </div>
                <div className="flex flex-col mt-[10px]">
                  <text className="medium-regular">서비스 사용 중 겪었던</text>
                  <text className="medium-regular">
                    여러분의 솔직한 의견을 들려주세요!
                  </text>
                </div>
              </div>
              <div>
                <img src={blackrightarrow} alt="blackrightarrow" />
              </div>
            </div>
            <div className="flex w-full h-[112px] px-[20px] py-[20px] rounded-[15px] bg-system-nutral-white">
              <div className="flex flex-1  flex-col">
                <div className="flex justify-between">
                  <text className="large-bold">단짠단짠 설문조사</text>
                  <img src={inprogress} alt="inprogress" />
                </div>
                <div className="flex flex-col mt-[10px]">
                  <text className="medium-regular">
                    설문조사를 진행해주신 분들께
                  </text>
                  <text className="medium-regular">
                    단짠지기가 상품을 드려요.
                  </text>
                </div>
              </div>
              <div>
                <img src={blackrightarrow} alt="blackrightarrow" />
              </div>
            </div>
          </div>
          <div className="flex  justify-end items-end md:mt-[18px] max-md:mb-[9.7px] max-md:mt-[20px] w-full    ">
            <img
              src={funnel_shadow}
              alt="funnel_shadow"
              className="absolute z-0 mr-[60px]"
            />
            <img src={funnel} alt="funnel" className="z-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
