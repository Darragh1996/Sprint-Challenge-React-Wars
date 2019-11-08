import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import StyledButton from './components/Button'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people");
  const [nextPage, setNextPage] = useState('');

  function handleClick(){
    setPage(nextPage);
    setCharacters([]);
  }

  useEffect(() => {
    axios
      .get(page)
      .then(res => {
        console.log(res);
        setNextPage(res.data.next);
        console.log(nextPage);
        return res.data;
      })
      .then(chars => {
        console.log(chars);
        for (let i = 0; i < chars.results.length; i++) {
          console.log(chars.results[i]);
          setCharacters(characters => [...characters, chars.results[i]]);
        }
      })
      .catch(err => console.log(err));
  }, [page]);

  return (
    <div className="App">
      {characters.map((char, index) => {
        return (
          <Card
            name={char.name}
            birth_year={char.birth_year}
            gender={char.gender}
            eye_color={char.eye_color}
            hair_color={char.hair_color}
            key={index}
          />
        );
      })}
      <StyledButton handleClick={handleClick} />
    </div>
  );
};

export default App;
