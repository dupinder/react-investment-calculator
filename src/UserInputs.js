import { useState } from "react";
import Results from "./Results.js";
export default function UserInputs() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 10,
    duration: 10,
  });

  function handleInputChange(identifier, value) {
    setUserInput((prevValues) => {
      return {
        ...prevValues,
        [identifier]: +value,
      };
    });
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(e) =>
                handleInputChange("initialInvestment", e.target.value)
              }
            ></input>
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(e) =>
                handleInputChange("annualInvestment", e.target.value)
              }
            ></input>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected returns</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(e) =>
                handleInputChange("expectedReturn", e.target.value)
              }
            ></input>
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(e) => handleInputChange("duration", e.target.value)}
            ></input>
          </p>
        </div>
      </section>

      <Results userInput={userInput}></Results>
    </>
  );
}
