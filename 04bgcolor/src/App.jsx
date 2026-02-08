import { useState } from "react";

function App() {
  const [colour, setcolour] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: colour }}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
          <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setcolour("red")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "Red" }}
            >
              Red
            </button>
            <button
              onClick={() => setcolour("green")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setcolour("blue")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setcolour("Orange")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "Orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setcolour("yellow")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => setcolour("#525252")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "#525252" }}
            >
              gray
            </button>
            <button
              onClick={() => setcolour("white")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "white" }}
            >
              white
            </button>
            <button
              onClick={() => setcolour("olive")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
            <button
              onClick={() => setcolour("purple")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
            <button
              onClick={() => setcolour("pink")}
              className=" outline-none px-4 py-1 rounded-full shadow-sm  "
              style={{ backgroundColor: "deeppink" }}
            >
              pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
