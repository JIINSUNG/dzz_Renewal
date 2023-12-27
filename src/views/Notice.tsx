import React from "react";

export default function Notice() {
  return (
    <div>
      <div className="flex flex-col my-[60px] max-md:mx-[30px] bg-blue-300">
        <div>notice</div>
        <div>이미지</div>
        <div>부제목</div>
        <div>부제목2</div>
        <div>상세내용</div>
        <div>부제목2</div>
      </div>
      <div className="flex flex-col my-[60px] max-md:mx-[30px] bg-blue-300">
        <div>또다른소식</div>
        <div>이미지 및 이벤트</div>
        <div>이미지 및 이벤트</div>
        <div>이미지 및 이벤트</div>
        <div>이미지1 pc</div>
        <div>이미지2 pc</div>
        <div>더보기</div>
      </div>
    </div>
  );
}
