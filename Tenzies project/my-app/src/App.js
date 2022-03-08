import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    //By using this Hook, you tell React that your component needs to do something after render
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      //if all die are held and all are of same value then update tenzies state as true
      setTenzies(true);
      console.log("You won!");
    }
  }, [dice]); //only want to use this effect to run every time the dice array changes its state

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    //function (allNewDice) returns an array of 10 random numbers between 1-6 inclusive
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      //creating an array of objects
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  //Updating the `rollDice` function to not just roll all new dice, but instead to look through the existing dice to NOT role any that are being `held`.

  function rollDice() {
    //checking if we have already won the game
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      //if not already won, call allNewDice function
      setTenzies(false);
      setDice(allNewDice());
    }
  }
  //we will only keep the state in App component and the holdDice function will be passe down to each one of the die component
  function holdDice(id) {
    //function for holding the die
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die; //is die.id same as the id passed in the Update the `holdDice` function to flip the `isHeld` property on the object in the arraythat was clicked, based on the `id` prop passe into the function.
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die //passing props values
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)} //passing the function to Die component and passing dice id as the parameter
    />
  ));
  //in button part, if tenzies is true means game have been won, button text changes tp new game
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
