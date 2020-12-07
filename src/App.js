import React, { useState } from "react";
import "./styles.css";
// import ReactWaterMark from "react-watermark-component";
import animalImage from "/src/animals.jpg";
import Background from "../src/elearning.jpg";
import ImageResponsive from "react-image-responsive";
const animals = {
  "🐈": "CAT",
  "🐕": "DOG",
  "🐎": "HORSE",
  "🐄": "COW",
  "🐪": "CAMEL",
  "🐁": "MOUSE",
  "🐇": "RABBIT",
  "🐆": " LEOPARD",
  "🐂": "Ox",
  "🐖": "PIG",
  "🐻": "BEAR",
  "🐼": "PANDA",
  "🐔": "Chicken",
  "🐢": "TURTLE",
  "🐋": "WHALE",
  "🐠": "TROPICAL FISH"
};
const header = {
  color: "black",
  backgroundImage: "url(" + Background + ")",
  width: "100%",
  height: "150px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  fontFamily: "Arial"
};

const textBox = {
  margin: "2rem",
  height: "3rem",
  width: "30%"
};

const listAnimals = {
  fontSize: "3rem",
  padding: "0.5rem",
  cursor: "pointer"
};

const backGroundImage = {
  // backgroundImage: `url(${animalImage})`,
  // height: "20rem"
};
export default function App() {
  var [meaning, setmeaning] = useState("");

  var listOfAnimals = Object.keys(animals);

  function onChangeHandeler(event) {
    var userInput = event.target.value;

    var meaning = animals[userInput];
    console.log(meaning);
    if (meaning === undefined) {
      meaning =
        "We do not have this animal in our database.We are trying our best to get most of the animals.";
    }
    setmeaning(meaning);
  }

  function onClickHandler(animal) {
    var meaning = animals[animal];

    setmeaning(meaning);
    console.log(animal);
  }

  return (
    <div className="App">
      {/* <h1 style={header}>LEARNING WITH FUN FOR KIDS</h1> */}
      <div>
        <img className="responsive-image" src={Background} />
      </div>
      <input
        style={textBox}
        placeholder="Enter the emogi"
        onChange={onChangeHandeler}
      />
      <h2>{meaning}</h2>
      <h5>Kids guess the animal and click to check if you are correct.</h5>
      {listOfAnimals.map(function (animal) {
        return (
          <span
            onClick={() => onClickHandler(animal)}
            style={listAnimals}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
      {/* <div style={backGroundImage}>Hiii</div> */}
    </div>
  );
}
