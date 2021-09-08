import './ListResults.css';
import React, { Component, useDebugValue } from 'react';
import { Link, } from "react-router-dom";

class ListResults extends Component {
    constructor(props) {
        super();
        this.state = {
            id: '',
            imageId: '',
            keyword: ''
        }
    }
    render() {
        let artList = this.props.results.map((value, index) => {
            return (
                <div className='artContainer' key={value.id}>
                    <Link to={'/results/' + value.id}>
                    <p> {value.title}   </p>
                    </Link>
                </div>
            )
        })
        console.log('in results',this.props)
        return (
            <div className="ListResults">
                <nav>
                    <Link to='/'>Home</Link>
                </nav>
                <div className='results'></div>
              <div>{artList}</div>
            </div>
        );
    }
  }
  

export default ListResults;