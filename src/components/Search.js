// import { queryAllByAltText } from "@testing-library/dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

const Search = () => {
 const [term, setTerm] = useState('');
 const [results, setResults] = useState([])
  

// 2nd step: The useEffect is almost like the componentDidMount life cycle method in class based component. The useEffect fires when the component first renders(1st step) and after the variable passed as an item(term) in the 2nd parameter(array) has been tampered with. In this case, it runs every time a user engages the input tag because it causes a change to the "term" variable from which a request is made to the Wikipedia API. The API response is gotten and stored in the second useState's array as a results item.

useEffect(() => {

  const search = async () => {
    //   I do not understand the data parameter used here, but i do understand the concept of object destructuring.
     const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
              action: 'query',
              list: "search",
              origin: "*",
              format: "json",
              srsearch: term,
          }})
      setResults(data.query.search);
      console.log(data.query.search)
  }
  if(term) {
    search()
  };

}, [term]);


// 3rd step: The results item is then used to populate the jsx component as shown below.
const renderedResults = results.map((result) => {
    return (
        <div className = "item">
            <div className = "content">
                <div className = "header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML = {{__html:result.snippet}}></span>
            </div>
        </div>
    )
})

const storeInState = (event) => {
    setTerm(event.target.value) 
}

  return (
      <div>
          {/* 1st step: This piece of component first gets rendered. After the user engages the input tag, the value of the input from the user is stored in the useState property.
           N/B: For every input keypress, the term property in the useState array is changed */}
          <div className="ui form">
              <div className="field">
                  <label>Enter Search Term</label>
                  <input 
                    className="input" 
                    onChange = {(e) => {storeInState(e)}}
                  value = {term} 
                  />
              </div>
          </div>
          <div className = "ui celled list">
              {renderedResults}
          </div>
      </div>
  )
} 

export default Search;