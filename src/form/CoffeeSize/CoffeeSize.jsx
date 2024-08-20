const CoffeeSize = ({ coffeSize, onCoffeSize }) => {
  return (
    <div>
      <p>вибрано {coffeSize} розмір кави</p>
      <label>
        <input
          name="coffeSize"
          value="sm"
          type="radio"
          checked={coffeSize === "sm"}
          onChange={onCoffeSize}
        />
        small
      </label>
      <label>
        <input
          name="coffeSize"
          value="md"
          type="radio"
          checked={coffeSize === "md"}
          onChange={onCoffeSize}
        />
        medium
      </label>
      <label>
        <input
          name="coffeSize"
          value="lg"
          type="radio"
          checked={coffeSize === "lg"}
          onChange={onCoffeSize}
        />
        large
      </label>
    </div>
  );
};

export default CoffeeSize;
