import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      console.log("Clicked");
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    } else {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => {
            onSelectedChange(option);
            console.log("Item Clicked");
          }}
        >
          {option.label}
        </div>
      );
    }
  });

  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            onClick={() => {
              setOpen(!open);
              console.log(open);
              console.log("Dropdown CLicked");
            }}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>

      <div  style={{color:`${selected.value}`}}>
        {`The selected is ${selected.value}`}
       </div>
    </div>
  );
};

export default Dropdown;
