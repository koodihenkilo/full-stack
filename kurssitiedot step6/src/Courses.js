

export const Courses = (props) => {
  const courses = props.courses
  return (
    <div>
      
      {courses.map((course => 
  <div key={course.name}>
      <Header header={course.name} />
      <Content  parts={course.parts} />
      <Total courses={course} />
  </div>
      
      )) }
    </div>
  );
};

const Content = (props) => {
  const parts = props.parts
  
  return (
    <div>
      { parts.map(part => {
        return (
        <div key={part.name}>
        <Part partName={part.name} exercises={part.exercises} />
        </div>)
      })
      
      }
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.header}</h1>;
};

const Part = (props) => {
  return (
    <div> {props.partName} {props.exercises} </div>
  )
}

const Total = (props) => {
  const courses = props.courses
  let sum = 0;
  let totalExercises = courses.parts.map((part) => sum += part.exercises)
  console.log(sum)
  

  
  return (
    <div>
      <h3> total of {sum} exercises </h3>
    </div>
  )
}
