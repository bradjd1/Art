import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import './StartPage.css';
import ReactDOM from 'react';





class StartPage extends Component {
    constructor() {
        this.state = {};
    }
    render() {
        return <h1>Welcome to the serch art program</h1>





        const artList = (props) => {
            let artList = props.allArt.map((art) => {
                return <h2>{art}</h2>;
            });
            return (
                <div>
                    htmlFor="search-form"{'>'}
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        // placeholder="Search for..." value={q}
                        // onChange={(e) => setQ(e.target.value)}
                    />
                    /{'>'}
                    <button onClick={props.getArt}>Search Art</button>
                    {artList}
                </div>
            );
        };
    }


}    
export default StartPage;

