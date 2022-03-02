import React, {useState} from "react";


const Accordion = ({ items }) => {

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
