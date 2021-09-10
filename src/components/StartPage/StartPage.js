import Axios from "axios";
import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import './StartPage.css';
import ReactDOM from 'react';
import { Link, Redirect } from 'react-router-dom'

class StartPage extends Component {
    constructor(props) {
        super();
        this.state = {
            id: '',
            imageId: '',
            keyword: null,
            artList: '',
        };
    };

    render() {
        if (this.state.keyword == null) {
        
            return (
                <div className="apiGetArt">
                    <header className="Header"></header>
                    <div className="Text">

                    
                    <h1>Welcome to the BAS art search app</h1>
                    <h2>Enter your Key Word below</h2>
                    </div>

                    <form onSubmit={(event) => {
                        
                        event.preventDefault();
                        this.props.apiGetArt(event.target.KeyWord.value);
                        this.setState ({keyword: event.target.KeyWord.value})
                    }}>
                        <input type="text" name="KeyWord" onChange={this.props.handleChange} />
                        <input type="submit" value="Search" />




                    </form>

                </div>
            )
                } else{return <Redirect to="/results" />}
    
        }

}
export default StartPage;