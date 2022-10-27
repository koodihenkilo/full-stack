import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [bestSelected, setBestSelected] = useState(0);
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(new Array(anecdotes.length).fill(0));
  console.log(data);

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const points = new Array(anecdotes.length).fill(0);
  console.log(points);
  console.log(selected);

  const addVote = () => {
    const copy = [...data];
    console.log(copy);
    copy[selected] += 1;
    setData(copy);
    setBestSelected(copy);
    bestAnecdote();
  };

  const bestAnecdote = () => {
    let index = 0;
    let largest = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > largest) {
        largest = data[i];
        index = i;
      }
    }
    setBestSelected(index);
  };

  return (
    <div>
      {anecdotes[selected] + " has " + data[selected] + " votes"}

      <br></br>
      <button onClick={() => addVote()}>vote</button>
      <button onClick={() => nextAnecdote()}>next anecdote</button>
      <p>Anecdote with most votes </p>
      {anecdotes[bestSelected]}
    </div>
  );
};

export default App;
