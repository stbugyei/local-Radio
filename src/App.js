import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavouriteList from "./components/FavouriteList";
import Home from "./components/Home";
import PlayerView from "./components/PlayerView";
import ScrollToTop from "./components/ScrollToTop";
import streamInfor from './components/streamsInfo'

const App = () => {

  const [text, setText] = useState('undefined');
  const [streamData] = useState(streamInfor);
  const [query, setQuery] = useState('undefined');


  //================ Search function for radiostreams ==================
  const queriedStream = streamData.filter(radiostations => (radiostations.name.toLowerCase().includes(query.toLowerCase()) || radiostations.language.toLowerCase().includes(query.toLowerCase()) || radiostations.location.toLowerCase().includes(query.toLowerCase()) || radiostations.genre.toLowerCase().includes(query.toLowerCase())));


  const onInputChange = e => {
    const userInput = e.target.value;
    setQuery(userInput)
  }
  

  //=========== function to change selected options =======================
  const inputText = (input) => {
    setText(input);
    setQuery(input);
  }


  //=========== Filter functions recommended stations =======================
  const populaData = streamData.filter(name => name.popular === true)
  const popularSelected = populaData.sort(() => Math.random() - 0.5).slice(0, 10);


  return (

    <div className="header">
      <div className="container">
        <>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home inputText={inputText} text={text} query={query} onInputChange={onInputChange} queriedStream={queriedStream} popularSelected={popularSelected} />
              </Route>

              <Route path="/stream/:id">
                <PlayerView popularSelected={popularSelected} />
              </Route>

              <Route path="/favouriteList">
                <FavouriteList />
              </Route>
            </Switch>
          </Router>
        </>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
