import Axios from "axios";
import { ConsoleWriter } from "istanbul-lib-report";
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
import StartPage from '../StartPage/StartPage';
import ListResults from "../ListResults/ListResults";
import Details from "../Details/Details";

class App extends Component {
  constructor() {
      super();
      this.state = {
          id: '',
          imageId: '',
          keyword: '',
          artList: [],
      }
  }

apiGetArt = async (keyword) => {
  keyword = 'cats'
  let results = await Axios.get("https://api.artic.edu/api/v1/artworks/search?q="+keyword)
  // console.log(results);
  // console.log('id is',results.data.data[0].id);
  this.setState({artList: results.data.data});
  console.log('artList: ', this.state.artList);
}

  render() {
      return (
          <div className="App">
            {/* <StartPage /> */}
            <div>Start page</div>
            <div>{this.apiGetArt()}</div>

            <Route exact path='/'
              render={() =>
              <StartPage />}
            />
            <Route path='/results'
              render={() =>
              <ListResults results={results}/>}
            />
            <Route path='/results/:id'
              render={(routerProps) =>
              <Details {...routerProps}/>}
            />
          </div>
      );
  }
}

export default App;
