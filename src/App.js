import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [text, setText] = useState({ name: "jhon" });
  console.log(step);
  // console.log(text);
  // console.log(setText);

  const [isOpen, setIsOpen] = useState(true);

  function handelPrevious(params) {
    if (step > 1) setStep((s) => s - 1);
  }

  function handelNext(params) {
    if (step < 3) setStep((s) => s + 1);
    // setText({ name: "karim" });
  }
  return (
    <>
      <button className="btn" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* name {text.name} */}
          </p>
          <div className="buttons ">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handelPrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handelNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
