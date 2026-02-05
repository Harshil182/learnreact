import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // useRef ma ek variable banay jema hum password input element ni reference store karisu
  const passwordInputRef = useRef(null);

  // usecallback ma funcation and dependacies j pass thay and dependencies array form ma hoy
  const passwordgenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "@#$%^&*(){}[]`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);
  const copypasswordtoclip = useCallback(() => {
    passwordInputRef.current.select(); // password input element ni reference store karva mate useRef ni madad thi current property ni madad thi select method call karisu jethi password input element ma je text hoy te select thai jai
    passwordInputRef.current.setSelectionRange(0, 10); // password input element ni reference store karva mate useRef ni madad thi current property ni madad thi setSelectionRange method call karisu jethi password input element ma je text hoy te select thai jai

    // apde core react ma window object thi copy kariye to clipboard ma data store karva mate navigator.clipboard.writeText method ni madad thi password variable ni value clipboard ma copy karisu and next js window object hoy nai because ae server side rendering kare che and server side rendering ma window object available nai hoy to apde core react ma j clipboard ma copy karva mate navigator.clipboard.writeText method ni madad thi password variable ni value clipboard ma copy karisu

    window.navigator.clipboard.writeText(password);
    // password input element ni reference store karva mate useRef ni madad thi ref attribute ma pass karisu
    passwordInputRef.current.focus(); // password input element par focus karva mate useRef ni madad thi current property ni madad thi focus method call karisu
  }, [password]);

  // usefeect ma callback and dependacies j pass thay and dependacies array form ma hoy
  useEffect(() => {
    passwordgenrator();
  }, [length, numberAllowed, charAllowed, passwordgenrator]);
  return (
    <>
      <div className="max-w-md w-full mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700  ">
        <h1 className="text-4xl text-center text-white mb-4 my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="py-1 px-3 outline-none w-full "
            placeholder="Password"
            readOnly
            ref={passwordInputRef} // password input element ni reference store karva mate useRef ni madad thi ref attribute ma pass karisu
          />
          <button
            onClick={copypasswordtoclip}
            className="justify-items-end bg-blue-500 mx-auto text-white px-2 outline-none shrink-0"
          >
            Copy{" "}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="length ">length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">character</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
