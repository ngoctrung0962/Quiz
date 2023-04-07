import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Question from "./components/Question/question";

function App() {
  const listQuestions = [
    {
      id: 1,
      questionName: "What is React?",
      answer: 2,
      listChooses: [
        {
          id: 1,
          content: "A JavaScript library for building user interfaces Sai",
        },
        {
          id: 2,
          content: "A JavaScript library for building user interfaces Đúng",
        },
        {
          id: 3,
          content: "A JavaScript library for building user interfaces Sai",
        },
      ],
    },
    {
      id: 2,
      questionName: "What is Vite?",
      answer: 3,
      listChooses: [
        {
          id: 1,
          content: "A JavaScript library for building user interfaces Sai",
        },
        {
          id: 2,
          content: "A JavaScript library for building user interfaces Sai",
        },
        {
          id: 3,
          content: "A JavaScript library for building user interfaces Đúng",
        },
      ],
    },
  ];

  const [listAnwser, setListAnwser] = useState();

  const handleSubmit = () => {
    // Kiểm tra đáp án trong dataAnswer có trùng với đáp án trong listAnwser không
    // Nếu trùng thì đúng, không trùng thì sai
    // Tính điểm
    setListAnwser([
      [
        {
          questionId: 1,
          correctAnswer: 2,
        },
        {
          questionId: 2,
          correctAnswer: 3,
        },
      ],
    ]);
  };

  const [dataAnswer, setDataAnswer] = useState({});

  console.log(dataAnswer);

  const [activeQuestion, setActiveQuestion] = useState(1);

  return (
    <div className="App">
      <div className="container">
        <div className="d-flex flex-column justify-content-between align-items-center">
          {listQuestions.map((question) => {
            return (
              <div key={question.id}>
                <Question
                  question={question}
                  dataAnswer={dataAnswer}
                  setDataAnswer={setDataAnswer}
                />
              </div>
            );
          })}
          <div className="t">
            <button
              className="btn btn-primary"
              onClick={() => {
                setActiveQuestion(activeQuestion + 1);
              }}
            >
              Next
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setActiveQuestion(activeQuestion - 1);
              }}
            >
              Prev
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
