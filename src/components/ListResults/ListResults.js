import './ListResults.css';
import React, { Component, useDebugValue } from 'react';
import { Link, } from "react-router-dom";

class ListResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            imageId: '',
            keyword: ''
        }
    }
    render() {
        let artList = this.props.results.map((value, index) => {
            return (
                <div className='ListContainer' key={value.id}>
                    <Link to={'/results/' + value.id}>
                    <p> {value.title}   </p>
                    </Link>
                </div>
            )
        })
        console.log('in results',this.props)
        return (
            <div className="ListResults">
                <nav className='nav'>
                    <Link to='/'>Home</Link>

                </nav>
                <br></br>
                <p>Click on a title below to get details about the art and/or see a picture of it.</p>
                <h2>Art Title:</h2>
                <div className='results'></div>
              <div>{artList}</div>
            </div>
        );
    }
  }
  

export default ListResults;