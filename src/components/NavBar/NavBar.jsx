import React from "react";

const NavBar = ({ submitFunc, resetFunc }) => (
  <header>
    <form onSubmit={submitFunc} className="number-input">
      <label for="in-num">{"Number of Pokémon to show: "}</label>
      <input type="number" name="input-number" id="in-num" min="1" max="151" />
      <input id="num-select-button" type="submit" value="Submit" />
    </form>
    <button onClick={resetFunc}>{"Reset"}</button>
  </header>
);

export default NavBar;
