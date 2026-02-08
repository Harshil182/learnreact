import { useEffect, useState } from "react";

function Usecurrencyinfo(currency) {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/cceffc9c5718d41dc6cd4978/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setdata(res.conversion_rates);
        }
      });
  }, [currency]);

  return data;
}

export default Usecurrencyinfo;
