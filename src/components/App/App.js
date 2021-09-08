import Axios from "axios";
import React, { Component } from 'react';
import './App.css';
// import StartPage from '../StartPage/StartPage';

class App extends Component {
  constructor() {
      super();
      this.state = {
          id: '',
          imageId: '',
          keyword: ''
      }
  }

apiGetArt = async (keyword) => {
  keyword = 'cats'
  let results = await Axios.get("https://api.artic.edu/api/v1/artworks/search?q="+keyword)
  console.log(results);
  console.log('id is',results.data.data[0].id);
}

  render() {
      return (
          <div className="App">
            {/* <StartPage /> */}
            <div>Start page</div>
            <div>{this.apiGetArt()}</div>
          </div>
      );
  }
}

export default App;
