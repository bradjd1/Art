import React, { Component } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            details: [],
        }
    }

    componentDidMount = () => {
        console.log('this.props: ',this.props.match.params.id)
        this.apiGetDetails()
    }

    apiGetDetails = async () => {
        const id = this.props.match.params.id
        let detailResults = await Axios.get("https://api.artic.edu/api/v1/artworks/"+id)
        console.log('detailResults: ', detailResults);
        this.setState({details: detailResults.data.data});
        console.log('details', this.state.details)
        }



        
    render() {
        return (
            <div className="Details">
                <div className="nav">
                    <Link to='/'>
                        Home
                    </Link>
                </div>
                <div className="details">
                    {/* {detailResults.data.data} */}

                </div>
            </div>
        );
    }
}

export default Details;