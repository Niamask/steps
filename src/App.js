import { useState } from "react";

export default function App(params) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  console.log(date.toDateString());
  date.setDate(date.getDate() + count);

  function handlePlusCount() {
    setCount(count + step);
  }

  function handleMinusCount() {
    setCount(count - step);
  }

  const handleChangeCount = (event) => {
    setCount(Number(event.target.value)); // Update state on change
  };

  const handleChangeStep = (event) => {
    setStep(Number(event.target.value)); // Update state on change
  };

  function handelReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleChangeStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleMinusCount}>-</button>
        <input type="number" value={count} onChange={handleChangeCount} />
        <button onClick={handlePlusCount}>+</button>
      </div>
      <div>
        <p>
          {count === 0
            ? "Today is "
            : count > 0
            ? count + " days from  today is "
            : Math.abs(count) + " days was "}
          {date.toDateString()}
        </p>
      </div>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handelReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

// // Challenge #1
// const questions = [
//   {
//     id: 3457,
//     question: "What language is React base on?",
//     anwer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What's are the building blocks  of React apps?",
//     anwer: "Components",
//   },
//   {
//     id: 3433,
//     question:
//       "What's the name of the syntax we use to dexcribe a  UI in React ?",
//     anwer: "JavaScript",
//   },
//   {
//     id: 1297,
//     question: "How  to  pass data from parent to child  components?",
//     anwer: "Props",
//   },
//   {
//     id: 3455,
//     question: "How to   give comonents memory?",
//     anwer: "JavaScript",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an  input element that is  completely synchronised with  state?",
//     anwer: "Controlled element",
//   },
// ];

// export default function App(params) {
//   return (
//     <div className="App">
//       <FlashCards />
//     </div>
//   );
// }

// function FlashCards(params) {
//   const [selectedId, setSelectedId] = useState(null);

//   function handleClick(id) {
//     setSelectedId(id !== selectedId ? id : null);
//   }

//   return (
//     <div className="flashCards">
//       {questions.map((q) => (
//         <div
//           className={q.id === selectedId ? "selected" : "item"}
//           key={q.id}
//           onClick={() => handleClick(q.id)}
//         >
//           <p>{q.id === selectedId ? q.anwer : q.question}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App(params) {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handleNext() {
//     if (step < 3) setStep(step + 1);
//     console.log(step);
//   }

//   function handlePrevious() {
//     if (step > 1) setStep(step - 1);
//     console.log(step);
//   }

//   function handleIsOpen(params) {
//     setIsOpen(!isOpen);
//   }
//   console.log(isOpen);
//   return (
//     <>
//       <button className="btn" onClick={handleIsOpen}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="cont">
//           <div className="step">
//             <div className={step >= 1 ? "activ" : ""}>1</div>
//             <div className={step >= 2 ? "activ" : ""}>2</div>
//             <div className={step >= 3 ? "activ" : ""}>3</div>
//           </div>
//           <p className="texte">{messages[step - 1]}</p>
//           <div className="bou">
//             <button className="btne" onClick={handlePrevious}>
//               Previous
//             </button>
//             <button className="btne" onClick={handleNext}>
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // export default function App() {
// //   const [step, setStep] = useState(1);
// //   const [count, setCount] = useState(0);

// //   const date = new Date();
// //   date.setDate(date.getDate() + count);
// //   console.log(date.toDateString());

// //   return (
// //     <div className="container">
// //       <div>
// //         <button onClick={() => setStep((s) => s - 1)}>-</button>
// //         <span>Step:{Math.abs(step)}</span>
// //         <button onClick={() => setStep((s) => s + 1)}>+</button>
// //       </div>
// //       <div>
// //         <button onClick={() => setCount((c) => c - step)}>-</button>
// //         <span>Count:{count}</span>
// //         <button onClick={() => setCount((c) => c + step)}>+</button>
// //       </div>
// //       <p>
// //         <span>
// //           {count === 0
// //             ? `Today is `
// //             : count >= 1
// //             ? `${count} days from `
// //             : `${Math.abs(count)} days ago was `}
// //         </span>
// //         <span>{date.toDateString()}</span>
// //       </p>
// //     </div>
// //   );
// // }

// // // const messages = [
// // //   "Learn React ⚛️",
// // //   "Apply for jobs 💼",
// // //   "Invest your new income 🤑",
// // // ];

// // // export default function App(params) {
// // //   const [step, setStep] = useState(1);
// // //   const [isOpen, setIsOpen] = useState(true);
// // //   console.log(step);
// // //   console.log(isOpen);

// // //   function handleClickNext() {
// // //     if (step >= 3) return;
// // //     setStep(step + 1);
// // //   }

// // //   function handleClickPrevious() {
// // //     if (step <= 1) return;
// // //     setStep(step - 1);
// // //   }

// // //   function handleIsOpen() {
// // //     setIsOpen(!isOpen);
// // //   }

// // //   return (
// // //     <>
// // //       <button className="btn" onClick={handleIsOpen}>
// // //         &times;
// // //       </button>

// // //       {isOpen && (
// // //         <div className="steps">
// // //           <div className="numbers">
// // //             <div className={step >= 1 ? "active" : ""}>1</div>
// // //             <div className={step >= 2 ? "active" : ""}>2</div>
// // //             <div className={step >= 3 ? "active" : ""}>3</div>
// // //           </div>
// // //           <p className="message">{messages[step - 1]}</p>
// // //           <div className="buttons">
// // //             <button
// // //               style={{ backgroundColor: "#7950f2", color: "#fff" }}
// // //               onClick={handleClickPrevious}
// // //             >
// // //               Previous
// // //             </button>
// // //             <button
// // //               style={{ backgroundColor: "#7950f2", color: "#fff" }}
// // //               onClick={handleClickNext}
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }

// // // // //

// // // // import { useState } from "react";

// // // // export default function App(params) {
// // // //   return (
// // // //     <div className="App">
// // // //       <FlashCards />
// // // //     </div>
// // // //   );
// // // // }

// // // // function FlashCards() {
// // // //   const [selectedId, setSelectedId] = useState(null);
// // // //   console.log(selectedId);
// // // //   function handleClick(id) {
// // // //     setSelectedId(id !== selectedId ? id : null);
// // // //   }

// // // //   return (
// // // //     <div className="flashCards">
// // // //       {questions.map((question) => (
// // // //         <div
// // // //           onClick={() => handleClick(question.id)}
// // // //           className={question.id === selectedId ? "selected" : "item"}
// // // //           key={question.id}
// // // //         >
// // // //           <p>
// // // //             {question.id === selectedId ? question.anwer : question.question}
// // // //           </p>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // const questions = [
// // // //   {
// // // //     id: 3457,
// // // //     question: "What language is React base on?",
// // // //     anwer: "JavaScript",
// // // //   },
// // // //   {
// // // //     id: 7336,
// // // //     question: "What's are the building blocks  of React apps?",
// // // //     anwer: "Components",
// // // //   },
// // // //   {
// // // //     id: 3433,
// // // //     question:
// // // //       "What's the name of the syntax we use to dexcribe a  UI in React ?",
// // // //     anwer: "JavaScript",
// // // //   },
// // // //   {
// // // //     id: 1297,
// // // //     question: "How  to  pass data from parent to child  components?",
// // // //     anwer: "Props",
// // // //   },
// // // //   {
// // // //     id: 3455,
// // // //     question: "How to   give comonents memory?",
// // // //     anwer: "JavaScript",
// // // //   },
// // // //   {
// // // //     id: 2002,
// // // //     question:
// // // //       "What do we call an  input element that is  completely synchronised with  state?",
// // // //     anwer: "Controlled element",
// // // //   },
// // // // ];

// // // // // :::::::::::::::::::::::::::::::::::::::::::::::::::: //
// // // // // CHALLENGE #1

// // // // // export default function App(params) {
// // // // //   const [step, setStep] = useState(1);
// // // // //   const [count, setCount] = useState(0);

// // // // //   const date = new Date();
// // // // //   console.log(date);
// // // // //   date.setDate(date.getDate() + count);

// // // // //   return (
// // // // //     <div className="container">
// // // // //       <div>
// // // // //         <button onClick={() => setStep((c) => c - 1)}>-</button>
// // // // //         <span>Step: {step}</span>
// // // // //         <button onClick={() => setStep((c) => c + 1)}>+</button>
// // // // //       </div>
// // // // //       <div>
// // // // //         <button onClick={() => setCount((c) => c - step)}>-</button>
// // // // //         <span>Count: {count}</span>
// // // // //         <button onClick={() => setCount((c) => c + step)}>+</button>
// // // // //       </div>
// // // // //       <p>
// // // // //         <span>
// // // // //           {count === 0
// // // // //             ? "today is "
// // // // //             : count > 0
// // // // //             ? `${count}  days from  today is `
// // // // //             : `${Math.abs(count)} days ago was `}
// // // // //         </span>
// // // // //         <span> {date.toDateString()}</span>
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default function App() {
// // // // //   const [step, setStep] = useState(1);
// // // // //   const [count, setCount] = useState(0);
// // // // //   const [dayy, setDayy] = useState(new Date().getDate());
// // // // //   console.log(`hhhhh ${dayy}`);

// // // // //   const today = new Date("june 21 2027");
// // // // //   console.log(today.toDateString());

// // // // //   today.setDate(today.getDate() + count);

// // // // //   const year = today.getFullYear();

// // // // //   const days = [
// // // // //     "Sunday",
// // // // //     "Monday",
// // // // //     "Tuesday",
// // // // //     "Wednesday",
// // // // //     "Thursday",
// // // // //     "Friday",
// // // // //     "Saturday",
// // // // //   ];
// // // // //   const day = days[today.getDay()]; // Get day index (0-6) and use it to access the day name

// // // // //   const months = [
// // // // //     "January",
// // // // //     "February",
// // // // //     "March",
// // // // //     "April",
// // // // //     "May",
// // // // //     "June",
// // // // //     "July",
// // // // //     "August",
// // // // //     "September",
// // // // //     "October",
// // // // //     "November",
// // // // //     "December",
// // // // //   ];
// // // // //   const month = months[today.getMonth()]; // Get month index (0-11) and use it to access the month name
// // // // //   const numMonth = today.getDate();

// // // // //   console.log(`Today is ${day} ${month} ${numMonth} ${year}  ${today}`);

// // // // //   function handlePlusStep() {
// // // // //     setStep((s) => s + 1);
// // // // //   }
// // // // //   console.log(step);
// // // // //   function handleMinusStep() {
// // // // //     setStep((s) => s - 1);
// // // // //   }

// // // // //   function handlePlusCount() {
// // // // //     // handlePlusStep();
// // // // //     setCount((c) => c + step);
// // // // //     setDayy((d) => d + 1);
// // // // //   }

// // // // //   function handleMinusCount() {
// // // // //     setCount((c) => c - 1);
// // // // //     setDayy((d) => d - 1);
// // // // //   }

// // // // //   return (
// // // // //     <div className="container">
// // // // //       <div className="block">
// // // // //         <button onClick={handleMinusStep}>-</button>
// // // // //         <span>Step:{step}</span>
// // // // //         <button onClick={handlePlusStep}>+</button>
// // // // //       </div>

// // // // //       <div>
// // // // //         <button onClick={handleMinusCount}>-</button>
// // // // //         <span>Count:{count}</span>
// // // // //         <button onClick={handlePlusCount}>+</button>
// // // // //       </div>

// // // // //       <p>
// // // // //         {count > 0
// // // // //           ? ` ${count} days from today is ${day} ${month} ${
// // // // //               numMonth + count
// // // // //             } ${year} `
// // // // //           : ""}
// // // // //         {count === 0 ? `Today is ${day} ${month} ${numMonth} ${year}` : ""}
// // // // //         {count < 0
// // // // //           ? ` ${
// // // // //               1 - count - 1
// // // // //             } days ago was ${day} ${month} ${numMonth} ${year} `
// // // // //           : ""}
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // }
