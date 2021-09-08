import './ListResults.css';
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

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
        console.log('in results',this.props)
        return (
            <div className="ListResults">
                <nav>
                    <Link to='/'>Back</Link>
                </nav>
                <div className='results'></div>
              <div>Start page</div>
            </div>
        );
    }
  }
  

export default ListResults;