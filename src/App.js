import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Router from "./components/Router"
import Header from "./components/Header";

const App = () => {
  const items = [
    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },

    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },

    { title: "Hey there.", contents: "I am just a beginner doing my ragas!" },
  ];

  const options = [
    {
      label:'The Color Red',
      value:'red'
    },
    {
      label:'The Color Green',
      value:'green'
    },
    {
      label:'A Shade of Blue',
      value:'blue'
    }
  ]

 const [selected, setSelected] = useState(options[0]);
 

  return (
      <div>
        <Header/>
       <Router path="/">
        <Accordion items={items} />
      </Router>
      <Router path="/list">
        <Search />
      </Router>
      <Router path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Router>
      <Router path="/translate">
        <Translate />
      </Router>
      
        
         
      </div>
  )
  
};

export default App;
