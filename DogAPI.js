import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col } from "react-bootstrap";

class DogAPI extends React.Component {

  state = {dogBreeds: []}
  const [dogBreeds, setDogBreeds] = useState([]);
  const [breed, setBreed] = useState(null);
  const [breedId, setBreedId] = useState(
    "68f47c5a-5115-47cd-9849-e45d3c378f12"
  );
   
      useEffect(() => {
    getDogBreedTest()
  }, []);


  const options = [
    {
      id: 1,
      label: "Rasa Psa",
      value: "4ddbe251-72af-495e-8e9d-869217e1d92a",
    },
    {
      id: 2,
      label: "Rasa Psa2",
      value: "f534c847-bed1-4b58-b194-dc06ecfe20f9",
    },
  ];

  // useEffect(() => {
  //     axios.get("https://dogapi.dog/api/v2/breeds/" + breedId)
  //     .then((response) => {
  //         setBreed(response.data)
  //         // console.log(response.data)
  //     });
  // })

  const getDogBreed = () => {
    axios
      .get("https://dogapi.dog/api/v2/breeds/" + breedId)
      .then((response) => {
        setBreed(response.data);
        console.log(response.data);
      });
  };

  const getDogBreedTest = () => {
    axios.get("https://dogapi.dog/api/v2/breeds").then((response) => {
      setDogBreeds(response.data);
    });
  };

  return (
    <div>
      <h2>id: {breedId}</h2>
      <div className="select-container">
        <Form.Select onChange={(e) => setBreedId(e.target.value)}>
          {options.map((option) => (
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        <br />
      </div>
    </div>
  );
}

export default DogAPI