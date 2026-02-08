import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectedCurrency = "USD",
  amountDisabled = false,
}) {
  const inputId = useId();

  return (
    <div className="input-box">
      <div className="left">
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>

        <input
          id={inputId}
          type="number"
          value={amount}
          disabled={amountDisabled}
          className="input-field"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="right">
        <select
          value={selectedCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
