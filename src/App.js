import "./styles.css";
import React, { useState } from "react";



export default function App() {

  const [name, setName] = useState("")
  const [headingText, setHeadingText] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);


  function handleClick(event) {
    setHeadingText(name);
    console.log({ name });

    event.preventDefault();

  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name} {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
        />
        <button
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
