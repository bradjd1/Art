import Axios from "axios";
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
// import StartPage from '../StartPage/StartPage';
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
  let results = await Axios.get("https://api.artic.edu/api/v1/artworks/search?limit=100$q="+keyword)
  // console.log(results);
  // console.log('id is',results.data.data[0].id);
  this.setState({artList: results.data.data});
  console.log('artList: ', this.state.artList);
  }

  componentDidMount = () => {
    this.apiGetArt()

  }

  render() {
      return (
          <div className="App">

            {/* <Route exact path='/'
              render={() =>
              <StartPage apiGetArt={this.apiGetArt}/>}
            /> */}
            <Route exact path='/results'
              render={() =>
              <ListResults results={this.state.artList} />}
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
