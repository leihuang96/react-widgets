import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () => {
  const [term, setTerm] = useState('');
  //The debounce function delays the processing of the keyup event until the user has stopped typing for a predetermined amount of time.
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  //useEffect() is for side-effects. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects. Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout() , and more.

  //这个useeffect在每次term改变的时候render.设置decouncedterm是为了在用户输入相同的term时，不会rerun useeffect function.
  useEffect(() => {
    //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);
    return () => {
      //The clearTimeout() method clears a timer set with the setTimeout() method.
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      // {} means object-key-value pairs.
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
    //the side-effect runs only when "debouncedTerm" value changes.
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* using innerHTML in the browser DO*/}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          {/* The value attribute defines the initial (default) value of the input field; The onchange event occurs when the value of an element has been changed.*/}
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
