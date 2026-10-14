import { useState } from "react";

const UpdateWithCallback = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "mustang",
    Year: "1994 ",
    color: "red",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7kkexCaERFT9XAULaPBggBnVZHQ6eGxqTef8cGjBCg&s=10",
  }); // rather then defning each of the state one by one for the car

  const handleChange = () => {
    // setCar({
      
    //   color: "blue",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRK0QBREBBsbw3CtBQB-KS8D1MTYkVkvbaoN1AP3bsw&s=10",
    // });
    setCar((prev) => ({
      ...prev,  // keeping  the unchanged object and we use the callback during the updating   to make safest change to the previous value if the values depend on each other during the  one after one another 
      color: "blue",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRK0QBREBBsbw3CtBQB-KS8D1MTYkVkvbaoN1AP3bsw&s=10",
    }));
  };

  return (
    <div>
      <h1>Updating states using callback function </h1>

      <hr />
      <h2>My {car.brand}</h2>
      <h2>
        {" "}
        It is a {car.model} from ("") from {car.Year}
      </h2>
      <div>
        <img src={car.image} alt="" width="50%" />
      </div>

      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default UpdateWithCallback;
