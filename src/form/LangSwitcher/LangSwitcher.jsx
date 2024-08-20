import { useId, useState } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();
  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        name=""
        value={value}
        id={selectId}
        onChange={(e) => {
          onSelect(e.target.value);
        }}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
