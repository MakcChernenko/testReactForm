const CheckBox = ({ value, onChange }) => {
  return (
    <div>
      <label>
        <input
          name="terms"
          type="checkbox"
          onChange={onChange}
          checked={value}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!value}>
        Proceed
      </button>
    </div>
  );
};

export default CheckBox;
