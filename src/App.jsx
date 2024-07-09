import Header from "./Components/Header";
import InputGroup from "./Components/InputGroup";
import { useState } from "react";
import Result from "./Components/Result";

const defaultInputValues = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputValues, setInputValues] = useState(defaultInputValues);

  function handleInputChange(event) {
    const newValue = Number(event.target.value);
    const id = event.target.getAttribute("data-id");

    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  }
  const isValidInput = inputValues.duration >= 1;

  return (
    <div>
      <Header />
      <InputGroup handleInputChange={handleInputChange} values={inputValues} />
      {isValidInput && <Result inputValues={inputValues} />}
      {!isValidInput && (
        <p className="center">Please enter a duration greater than 0!</p>
      )}
    </div>
  );
}

export default App;
