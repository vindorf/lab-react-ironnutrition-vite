function FoodBox({name, image, calories, servings, onClick }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <img src={image} style={{width:'350px'}}/>

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings*calories} </b> kcal
      </p>

      <button onClick={onClick} >Delete</button>
    </div>
  );
}

export default FoodBox;
