import React from "react";
import Logo from "@/assets/Logo2.svg";
import arrow from "@/assets/arrow.svg";
import instagram from "@/assets/instagram.svg";
import thread from "@/assets/thread.svg";
import tiktok from "@/assets/tiktok.svg";

export default function Footer() {
  return (
    <div>
      <div className="flex  max-pc:my-[87px] max-pc:mx-[60px]  flex-col pc:mx-[267px]">
        {/* 로고 및 제휴 */}
        <div className="flex flex-col">
          <div className="w-[110px] h-[45px]">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="mt-[10px] w-[174px] h-[105px]">
            <text className="text-2xl font-bold text-dzzfont">
              지금까지
              <br />
              겪어보지못한
              <br />
              캠퍼스 라이프
            </text>
          </div>
          <div className="flex mt-[20px] gap-[10px] mr-auto border-b border-solid border-black">
            <text className=" text-xl  ">광고ㆍ제휴 문의하기</text>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        {/* SNS */}
        <div className="flex gap-[20px] my-[40px]">
          <img src={instagram} alt="instagram" />
          <img src={thread} alt="thread" />
          <img src={tiktok} alt="tiktok" />
        </div>
        {/* 회사 정보가 들어가는 곳 */}
        <div className="flex flex-col justify-center  gap-[15px]">
          <div className="flex flex-col gap-[5px] ">
            <div className="text-[12px]">파이브이얼즈 | (주) 서화</div>
            <div className="text-[12px]">
              서울특별시 서초구 마방로6길 13, 4층 4193호
            </div>
          </div>
          <div className="flex flex-col gap-[5px] ">
            <div className="text-[12px]">사업자 번호: 295-40-01132</div>
            <div className="text-[12px]">통신판매업: 서울 마포-2018</div>
          </div>
          <div className="flex flex-col gap-[5px] ">
            <div className="text-[12px]">전자금융분쟁처리</div>
            <div className="text-[12px]">TEL . 0507-0177-1683 </div>
            <div className="text-[12px]">5iveyears.official@gmail.com </div>
            <div className="text-[12px]">dzzdzz.official@gmail.com </div>
          </div>
        </div>
      </div>
    </div>
  );
}
