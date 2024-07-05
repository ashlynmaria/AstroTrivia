import { card } from "../assets";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";
import { useState } from "react";

const CardDeal = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(false); 
  };

  const checkAnswer = () => {
    setShowFeedback(true);
  };

  const correctAnswer = "Paris";

  return (
    <section className={`${layout.section} flex justify-between items-center`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          With Custom Quizzes <br className="sm:block hidden" /> That Adapt To You.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With us, you're not just preparing for exams; you're building a solid foundation for lifelong knowledge. Let's make learning an adventure you look forward to every day.
        </p>
        <CustomButton styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} ml-10 w-[300px]`}>
        <div style={{ background: "#292340", color: "#bca0dc", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <h3 style={{ marginBottom: "15px", color: "#fff" }}>Daily Quiz</h3>
          <p style={{ color: "#fff" }}>Question 1: What is the capital of France?</p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li
              onClick={() => handleAnswerSelection("Paris")}
              className={`quiz-option ${selectedAnswer === "Paris" ? "selected" : ""}`}
            >
              Paris
            </li>
            <li
              onClick={() => handleAnswerSelection("London")}
              className={`quiz-option ${selectedAnswer === "London" ? "selected" : ""}`}
            >
              London
            </li>
            <li
              onClick={() => handleAnswerSelection("New York")}
              className={`quiz-option ${selectedAnswer === "New York" ? "selected" : ""}`}
            >
              New York
            </li>
          </ul>
          <button onClick={checkAnswer} style={{ background: "#4CAF50", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "10px" }}>Submit</button>
          {showFeedback && (
            <p style={{ marginTop: "10px", color: selectedAnswer === correctAnswer ? "#4CAF50" : "#FF5252" }}>
              {selectedAnswer === correctAnswer ? "Correct!" : "Incorrect. The correct answer is Paris."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CardDeal;
