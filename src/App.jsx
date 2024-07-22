import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const handelNumberClick = (e) => {
    const value = e.target.value;
    setData(data + value);
  };

  const handelOprations = (operation) => {
    if (operation === "AC") {
      setData("");
    } else if (operation === "DEL") {
      setData(data.slice(0, -1));
    } else {
      setData(data + operation);
    }
  };

  const handelEqual = () => {
    setData(eval(data));
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="bg-gray-600 mx-auto w-fit text-white p-4 shadow-xl rounded-xl ">
        <div>
          <input
            type="text"
            readOnly
            placeholder="00"
            value={data}
            className=" border-gray-200 outline-none p-6 text-right text-2xl text-gray-800 items-center bg-gray-300 inset-4 shadow-inner rounded-lg "
          />
        </div>
        <div className=" flex justify-center gap-x-10 p-3 bg-slate-500">
          <button className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
          onClick={() => handelOprations("AC")}>
            AC
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit  "
            onClick={() => handelOprations("/")}
          >
            /
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit  "
            onClick={() => handelOprations("*")}
          >
            *
          </button>
          <button className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit  "
          onClick={() => handelOprations("DEL")}> DEL
          </button>
        </div>
        <div className=" flex justify-center gap-x-10 p-3 bg-slate-500">
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="7"
            onClick={handelNumberClick}
          >
            7
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="8"
            onClick={handelNumberClick}
          >
            8
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="9"
            onClick={handelNumberClick}
          >
            9
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            onClick={() => handelOprations("-")}
          >
            -
          </button>
        </div>
        <div className=" flex justify-center gap-x-10 p-3 bg-slate-500">
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="4"
            onClick={handelNumberClick}
          >
            4
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="5"
            onClick={handelNumberClick}
          >
            5
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="6"
            onClick={handelNumberClick}
          >
            6
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            onClick={() => handelOprations("+")}
          >
            +
          </button>
        </div>
        <div className=" flex justify-center gap-x-10 p-3 bg-slate-500">
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="3"
            onClick={handelNumberClick}
          >
            3
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="2"
            onClick={handelNumberClick}
          >
            2
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="1"
            onClick={handelNumberClick}
          >
            1
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            onClick={() => handelOprations("%")}
          >
            %
          </button>
        </div>
        <div className=" flex justify-center gap-x-10 p-3 bg-slate-500">
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="0"
            onClick={handelNumberClick}
          >
            0
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="00"
            onClick={handelNumberClick}
          >
            00
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            value="."
            onClick={handelNumberClick}
          >
            .
          </button>
          <button
            className="rounded-2xl shadow-xl text-lg text-center p-3  bg-inherit"
            onClick={handelEqual}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
