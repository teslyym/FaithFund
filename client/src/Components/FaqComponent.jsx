import React, { useState } from "react";

const FaqComponent = ({
  question = "you wil now be the one to tell me what is possibleto tell me what is possible",
  answer,
}) => {
  const [showQuestion, setShowQuestion] = useState(true);
  const toggleShowQuestion = () => {
    setShowQuestion(!showQuestion);
  };
  return (
    <div className="bg-pry text-white p-3 w-1/4 rounded-md flex flex-col justify-end text-[1.5rem]">
      {showQuestion ? (
        <p className="h-[7lh] flex flex-col justify-center ">{question}</p>
      ) : (
        <p className=" text-[1rem] h-[7lh]  flex flex-col justify-center ">
          {answer}
        </p>
      )}
      <div className="flex justify-end">
        <p onClick={toggleShowQuestion} className="cursor-pointer">
          {showQuestion ? "Answer" : "Question"}
        </p>
      </div>
    </div>
  );
};

export default FaqComponent;
