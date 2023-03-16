import { useState } from "react";
import "./App.css";
import AnswerBox from "./components/AnswerBox/AnswerBox";
import Card from "./components/Card/Card";
import Question from "./components/Question/Question";
import image1 from "./Images/3.png";
import image2 from "./Images/4.png";
import image3 from "./Images/5.png";
import image4 from "./Images/6.png";

function App() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState([
    { image: image1, id: 0, text: null, isActive: false },
    { image: image2, id: 1, text: null, isActive: false },
    {
      image: null,
      id: 2,
      isActive: false,
      text: "A small river named Dudensai flows by their place and for al supplies it with th countries of wales UK lorem ei",
    },
    { image: image3, id: 3, text: null, isActive: false },
    { image: image4, id: 4, text: null, isActive: false },
  ]);

  const correctAnswer = data[0];

  const selectAnswer = (id) => {
    const newData = [...data];

    data.map((item, i) => {
      newData.splice(i, 1, {
        image: item.image,
        text: item.text,
        isActive: id === i ? true : false,
        id: item.id,
      });
      if (id === i) {
        setAnswer({
          image: item.image,
          text: item.text,
          isActive: item.isActive,
          id: item.id,
        });
      }
    });
    setData(newData);
  };

  const submit = () => {
    if (answer !== "") {
      setShowAnswer(true);
      if (correctAnswer.id === answer.id) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
  };
  return (
    <div className="App ">
      <Question />

      <div className="card-container">
        {data.map((item) => (
          <div onClick={() => selectAnswer(item.id)} key={item.id}>
            <Card
              image={item.image}
              text={item.text}
              id={item.id}
              isActive={item.isActive}
            />
          </div>
        ))}
      </div>
      <button className="button" onClick={submit}>
        Submit Answer
      </button>
      {showAnswer && (
        <AnswerBox
          bgColor={
            isCorrect === true
              ? "rgba(240, 254, 231, 1)"
              : "rgba(254, 231, 231, 1)"
          }
          color={
            isCorrect === true
              ? "rgba(22, 149, 1, 0.65)"
              : "rgba(239, 68, 68, 1)"
          }
          title={
            isCorrect === true
              ? "Yusssss! You’ve chosen correct answer."
              : "Oh no! You’ve chosen incorrect answer."
          }
        />
      )}
    </div>
  );
}

export default App;
