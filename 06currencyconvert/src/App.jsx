import { useState } from "react";
import InputBox from "./component/Inputbox";
import useCurrencyInfo from "./hooks/Usecurrencyinfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      const result = amount * currencyInfo[to];
      setConvertedAmount(result.toFixed(2));
    }
  };

  return (
    <div className="main-container">
      <div className="glass-card">
        <h1 className="title neon-text">
          💱 Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectedCurrency={from}
            onAmountChange={(value) => setAmount(value)}
            onCurrencyChange={(currency) => setFrom(currency)}
          />

          <div className="swap-container">
            <button type="button" onClick={swap} className="swap-btn">
              ⇅
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectedCurrency={to}
            amountDisabled
            onCurrencyChange={(currency) => setTo(currency)}
          />

          <button type="submit" className="convert-btn">
            Convert {from} → {to}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
