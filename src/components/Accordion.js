import React, {useState} from "react";
// The functional based components works with Hooks in the same way a class based component utilizes the state property and the life cycle methods. The functional based components attempts to do exactly what a class based components does - albeit in a different way. 

const Accordion = ({ items }) => {
// As opposed to the way the state property works in class based components, this is how the state property works in functional based components.
// On the usage of the useState() function, a useState function is assigned a parameter(usually null or "") after being imported. The useState function is an array that contains two items: the first is a variable that denotes the parameter initialzed in the useState function when it is first called. The second is a function that is used to reset the variable during the component's App cycle.
const [activeIndex, changeIndex] = useState(null)
  
  const catchMeTheIndex = (index) => {
    console.log(index)
    changeIndex(index)
  }

  const renderedItems = items.map((item, index) => {
    const active = activeIndex === index? 'active': "";
    return (
      <div key={index} className = "ui styled accordion" style = {{margin:`10px`}}>
        <div className={`title ${active}`}  onClick = {() => {catchMeTheIndex(index)}}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.contents}</p>
        </div>
      </div>
    );
  });

  return <div>{renderedItems}</div>
};

export default Accordion;
