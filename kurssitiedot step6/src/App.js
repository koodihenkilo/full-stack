const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Header header={Header} />
      <Content content={Content} />
      <Total total={Total} />
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <p>{props.Course}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>{props.parts} </p>
    </div>
  );
};

const Header = (props) => {
  return <div>{props.course}</div>;
};

const Total = (props) => {
  return <div>{props.parts}</div>;
};

export default App;
