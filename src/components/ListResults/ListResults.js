import './ListResults.css';
import React, { Component, useDebugValue } from 'react';
import { Link, } from "react-router-dom";

class ListResults extends Component {
    constructor(props) {
        super(props);
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
        return (
            <div className="ListResults">
                <div className='background'>
                    <img src='../ArtInstituteofChicago2.jpg' alt='art pic' />
                </div>
                <div className='text'>
                    <nav className='nav'>
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
                        </span>
                        <br></br><br></br>
                        <Link to='/'>Home</Link>
                    </nav>
                    <span>
                    <div className='instr'>Keyword search: {this.props.keyword}</div>
                    <div className='instr'>Click on a title below to get details about the art piece and see a picture of it.</div>
                    </span>
                    <h3>Art Title:</h3>
                </div>
                <div className='background2'>
                    {/* <div className='results'></div> */}
                    <div className='artTitles'>{artList}</div>
                </div>
            </div>
        );
    }
}

export default ListResults;