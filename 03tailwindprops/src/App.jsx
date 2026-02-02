import "./App.css";
import Card from "./componants/card.jsx";
function App() {
  const myobj = {
    username: "harshil prajapati ",
    age: 20,
  };
  let newarr = [1, 2, 3, 4, "new array"];
  return (
    <>
      <h1 className="bg-green-700 text-blue-600 p-5 rounded-full mb-4">
        Hello world!
      </h1>
      <Card username=" Harshil prajapati  "/>
      <Card username="hpchampion"/>
      <Card username="hpchampion" btntext = "click me " />
    </>
  );
}

export default App;
