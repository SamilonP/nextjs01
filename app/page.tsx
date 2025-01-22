"use client"
import { useState } from "react";

const randomNum = Math.floor(Math.random() * 100)

export default function Home() {
  const [message, setMessage] = useState('0')
  const [response, setResponse] = useState('Guess the number')
  const [warning, setWarning] = useState('')
  const [guesses, setGuess] = useState(0)

  function handleChange(e) {
    if (isNaN(e.target.value)) {
      setWarning("Please input a NUMBER")
    }
    else if (!isNaN(e.target.value)) {
      setWarning("")
      setMessage(e.target.value)
    }
  }

  function checkNumber() {
    if (Number(message) > randomNum) {
      setGuess(guesses + 1)
      setResponse("Too high!")
    }
    else if (Number(message) < randomNum) {
      setGuess(guesses + 1)
      setResponse("Too low!")
    }
    else if (Number(message) == randomNum) {
      setResponse("You won!!!!!!!!")
    }
  }

  return (
    <div>
      <h1>{response}</h1>
      <p>Amount of guesses: {guesses}</p>
      <input type="text" id="guess" onChange={handleChange}/>
      <button onClick={checkNumber}>Check</button>
      <p>{warning}</p>
    </div>
  );
}
