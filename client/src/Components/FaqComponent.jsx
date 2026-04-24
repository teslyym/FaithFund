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
    <div className="bg-pry text-white p-4 w-full sm:w-[48%] lg:w-[30%] xl:w-1/4 rounded-md flex flex-col justify-between text-lg sm:text-xl">
      {showQuestion ? (
        <p className="min-h-[120px] flex items-center">{question}</p>
      ) : (
        <p className="text-sm sm:text-base min-h-[120px] flex items-center">
          {answer}
        </p>
      )}

      <div className="flex justify-end mt-2">
        <p
          onClick={toggleShowQuestion}
          className="cursor-pointer text-sm sm:text-base"
        >
          {showQuestion ? "Answer" : "Question"}
        </p>
      </div>
    </div>
  );
};

export default FaqComponent;
