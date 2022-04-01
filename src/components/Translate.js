import React, {useState} from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
    {
      label: 'Afrikaans',
      value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value:'hi'
    },
    {
        label: 'Dutch',
        value:'nl'
    }
]

const Translate =  () => {

  const [text, setText] = useState('Hey there');
  const [language, setlanguage] = useState(options[0]); 
  

    return (
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Enter Text</label>
                    <input 
                    value = {text}
                    onChange = {(e) => {
                        setText(e.target.value)}}
                    />
                </div>
            </div>

            <Dropdown 
            options = {options}
            selected = {language}
            onSelected = {setlanguage}
            label = {`Select a language`}
            />
            <Convert text ={text} language={language}/>
        </div>
        
    )
}

export default Translate;