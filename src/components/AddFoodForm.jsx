import { useState } from "react";

function AddFood(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  // console.log(props.foodData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };

    const updatedFoodData = [newFood, ...props.foodData];

    props.setFoodData(updatedFoodData);

    console.log(newFood);
    // props.addFood(newFood);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };
  return (
    <div className="input-card">
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label></label>
        <input
          placeholder="image"
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label></label>
        <input
          placeholder="calories"
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label></label>
        <input
          placeholder="servings"
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFood;
