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
        console.log('in results', this.props)
        return (
            <div className="ListResults">

                <div className='screen'>
                    <div className='background'>
                        <nav className='nav'>
                            <Link to='/'>Home</Link>

                        </nav>
                        <img src='../ArtInstituteofChicago2.jpg' alt='art pic' />
                    </div>
                    <div className='text'>
                        <p className='instr'>Click on a title below to get details about the art piece and see a picture of it.</p>
                        <h3>Art Title:</h3>
                    </div>
                    <div className='background2'>
                        <div className='results'></div>
                        <div>{artList}</div>
                    </div>

                </div>
            </div>
        );
    }
}


export default ListResults;