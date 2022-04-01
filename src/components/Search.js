// import { queryAllByAltText } from "@testing-library/dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  // 2nd step: The useEffect is almost like the componentDidMount life cycle method in class based component. The useEffect fires when the component first renders(1st step) and after the variable(s) passed as an item(in this case,term) in the 2nd parameter(in this case, array) has been tampered with. In this case, it runs every time a user engages the input tag because it causes a change to the "term" variable from which a request is made to the Wikipedia API. The API response is gotten and stored in the second useState's array as results item. The useEffect function also returns a function depending on the situation. The function is run on the second rerender & onwards.

  useEffect(() => {
    // console.log(term);
    const search = async () => {
        // I do not understand the data parameter used here, but i do understand the concept of object destructuring.
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

    
    };

    // This function delays the search from happening when the component first renders by setting a timeout
    const delaySearch = setTimeout(() => {
        search()
    }, 1000)
    // This is the return function that gets executed when the term property gets altered. In other words, it gets executed when the user engages the input tag. Its goal is to cancel the timeout above.
    // N/B by cancelling the time out, it doesn't stop the search() from happening.
    return () => {
      clearTimeout(delaySearch)
    };
  }, [term]);

  // 3rd step: The results item is then used to populate the jsx component as shown below.
  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
          <div className="right floated content">
              <a 
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
               >
                   Go Check! 
                   
             </a>
          </div>

        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      {/* 1st step: This piece of component first gets rendered. After the user engages the input tag, the value of the input from the user is stored in the useState property.
           N/B: For every input keypress, the term property in the useState array is changed */}
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            value={term}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
