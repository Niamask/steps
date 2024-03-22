//

import { useState } from "react";

// :::::::::::::::::::::::::::::::::::::::::::::::::::: //
// CHALLENGE #1

export default function App(params) {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  console.log(date);
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count}  days from  today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);
//   const [dayy, setDayy] = useState(new Date().getDate());
//   console.log(`hhhhh ${dayy}`);

//   const today = new Date("june 21 2027");
//   console.log(today.toDateString());

//   today.setDate(today.getDate() + count);

//   const year = today.getFullYear();

//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const day = days[today.getDay()]; // Get day index (0-6) and use it to access the day name

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const month = months[today.getMonth()]; // Get month index (0-11) and use it to access the month name
//   const numMonth = today.getDate();

//   console.log(`Today is ${day} ${month} ${numMonth} ${year}  ${today}`);

//   function handlePlusStep() {
//     setStep((s) => s + 1);
//   }
//   console.log(step);
//   function handleMinusStep() {
//     setStep((s) => s - 1);
//   }

//   function handlePlusCount() {
//     // handlePlusStep();
//     setCount((c) => c + step);
//     setDayy((d) => d + 1);
//   }

//   function handleMinusCount() {
//     setCount((c) => c - 1);
//     setDayy((d) => d - 1);
//   }

//   return (
//     <div className="container">
//       <div className="block">
//         <button onClick={handleMinusStep}>-</button>
//         <span>Step:{step}</span>
//         <button onClick={handlePlusStep}>+</button>
//       </div>

//       <div>
//         <button onClick={handleMinusCount}>-</button>
//         <span>Count:{count}</span>
//         <button onClick={handlePlusCount}>+</button>
//       </div>

//       <p>
//         {count > 0
//           ? ` ${count} days from today is ${day} ${month} ${
//               numMonth + count
//             } ${year} `
//           : ""}
//         {count === 0 ? `Today is ${day} ${month} ${numMonth} ${year}` : ""}
//         {count < 0
//           ? ` ${
//               1 - count - 1
//             } days ago was ${day} ${month} ${numMonth} ${year} `
//           : ""}
//       </p>
//     </div>
//   );
// }
