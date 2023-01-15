import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ArrowRight } from "react-bootstrap-icons";

export default function DisneyApi() {
  const [character, setCharacter] = useState(null);
  const [num, setNum] = useState(132);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Pokazuję inną postać z Disneya <br />
      (kolejność przypadkowa)!
    </Tooltip>
  );

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min;
  }

  const generateRandomNumber = () => {
    setNum(randomNumberInRange(130, 137));
  };

  const getCharacterById = () => {
    axios
      .get("https://api.disneyapi.dev/characters/" + num)
      .then((response) => {
        setCharacter(response.data);
      });
  };

  const GenerateAndGet = () => {
    generateRandomNumber();
    getCharacterById();
    if (!character) GenerateAndGet();
  };

  useEffect(() => {
    axios
      .get("https://api.disneyapi.dev/characters/" + num)
      .then((response) => {
        setCharacter(response.data);
      });
  }, []);

  if (!character) return null;


  return (
      <div>
        <Card>
          <Card.Img src={character.imageUrl} />
          <Card.Body>
            <Card.Title className="text-dark text-center">
              <h2>{character.name}</h2>
            </Card.Title>
            <Card.Text className="text-dark">
              <p className="text-center">
                Naciśnij ten przycisk
                <ArrowRight color="dark"></ArrowRight>{" "}
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Button variant="success" onClick={GenerateAndGet}>
                    Naciśnij mnie!
                  </Button>
                </OverlayTrigger>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
  );
}
