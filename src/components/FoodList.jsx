import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFood from "./AddFoodForm";
import foodsJson from "../../src/foods.json";

function FoodList() {
  const [foodData, setFoodData] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filterFood = foodData.filter((e) => {
      return e.id !== foodId;
    });
    setFoodData(filterFood);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFood setFoodData={setFoodData} foodData={foodData} />
      {foodData.map((e, i) => (
        <FoodBox
          key={i}
          name={e.name}
          image={e.image}
          calories={e.calories}
          servings={e.servings}
          onClick={() => deleteFood(e.id)}
        />
      ))}
    </div>
  );
}

export default FoodList;
