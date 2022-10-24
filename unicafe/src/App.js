import { useState } from "react";

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{props.average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{props.positive}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const Statisticline = (props) => {
  return (
    <div>
      <Statisticline text="good" value={props.good} />
      <Statisticline text="neutral" value={props.neutral} />
      <Statisticline text="bad" value={props.bad} />
      <Statisticline text="all" value={props.all} />
      <Statisticline text="average" value={props.average} />
      <Statisticline text="positive" />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const moreGood = () => {
    setGood(good + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />

      <Statistics
        all={good + neutral + bad}
        average={(good - bad) / (good + bad + neutral)}
        positive={(good / (neutral + bad + good)) * 100 + " %"}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

export default App;
