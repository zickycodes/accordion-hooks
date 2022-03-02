import React from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },

    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },

    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },
  ];

  return (
      <div>
           <Accordion items={items}/>
      </div>
  )
  
};

export default App;
