"use client";

import { SetStateAction, useState } from "react";
import { lusitana, roboto_serif } from "./ui/font";

export default function Page() {
  const [inputText, setInputText] = useState<string>(""); // State to store the input text
  const [outputText, setOutputText] = useState<string>(""); // State to store the output text

  function handleSubmit() {
    const out = inputText.split("").reverse().join("");

    setOutputText(out);
    console.log(outputText);
    setInputText("");
  }
  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    setInputText(event.target.value);
    console.log(inputText);
  }
  return (
    <div
      className={`${lusitana.className} block h-screen p-20 flex flex-col justify-center items-center bg-gray-100`}
    >
      <h1
        className={`${lusitana.className} w-1/2 p-4 m-8 bg-red-500 text-center text-6xl rounded`}
      >
        Enter your text to reverse
      </h1>
      <div className="w-1/2 p-20 pt-10 bg-blue-30">
        <form action={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            value={inputText}
            className=" shadow-outline p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
            placeholder="Enter text"
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-5 text-lg"
            type="submit"
          >
            Reverse
          </button>
        </form>
        <div className="my-5">

        <label className="text-lg" htmlFor="outputDiv">Ouptut</label>
        <div className="text-lg font-bold border border-gray-300 rounded min-h-10 my-3 bg-white ">
          <div className="p-2">{outputText}</div>
        </div>
        </div>
      </div>
    </div>
  );
}
