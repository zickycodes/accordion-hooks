import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const App = () => {
  const items = [
    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },

    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },

    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },
  ];

  return (
      <div>
         <Search/>
      </div>
  )
  
};

export default App;
