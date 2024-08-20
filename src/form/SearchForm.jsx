import { useState } from "react";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form>
      <input type="text" value={inputValue} onChange={handleInput} />
      <p>{inputValue}</p>
    </form>
  );
};

export default SearchForm;
