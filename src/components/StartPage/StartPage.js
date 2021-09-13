import React, { Component } from 'react';
import './StartPage.css';
import { Redirect } from 'react-router-dom'

class StartPage extends Component {
    constructor(props) {
        super();
        this.state = {
            keyword: null,
        };
    };

    render() {
        if (this.state.keyword == null) {

            return (
                <div className="apiGetArt">
                    <h1>Welcome to the </h1>

                    <span>
                        <div className="container b-container">
                            <div className="cube">
                                <div className="face bottom b-box">B</div>
                                <div className="face left b-box">B</div>
                                <div className="face front b-box">B</div>
                            </div>
                        </div>
                        <div className="container a-container">
                            <div className="cube">
                                <div className="face bottom a-box">A</div>
                                <div className="face left a-box">A</div>
                                <div className="face front a-box">A</div>
                            </div>
                        </div>
                        <div className="container s-container">
                            <div className="cube">
                                <div className="face bottom s-box">S</div>
                                <div className="face left s-box">S</div>
                                <div className="face front s-box">S</div>
                            </div>
                        </div>
                    </span><br></br><br></br>

                    <h2>Search of the Art Institue of Chicago  </h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Enter your Key Word below</h2>

                    <form onSubmit={(event) => {
                        event.preventDefault();
                        this.props.apiGetArt(event.target.KeyWord.value);
                        this.setState({ keyword: event.target.KeyWord.value });
                    }}>
                        <input type="text" name="KeyWord" onChange={this.props.handleChange} size="50" />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            )
        } else { return <Redirect to="/results" /> }
    }
}

export default StartPage;