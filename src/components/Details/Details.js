import React, { Component } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            details: [],
            imageID: '',
            imageResults: '',
            thumbnail: {},
        }
    }

    componentDidMount = () => {
        console.log('this.props: ', this.props.match.params.id)
        this.apiGetDetails();
    }

    apiGetDetails = async () => {
        const id = this.props.match.params.id
        const fields = '?fields=artist_title,title,thumbnail,place_of_origin,date_end,classification_title,image_id,id'
        let detailResults = await Axios.get("https://api.artic.edu/api/v1/artworks/" + id + fields)
        this.setState({ details: detailResults.data.data });
        this.setState({ thumbnail: detailResults.data.data.thumbnail });
        this.setState({ imageID: detailResults.data.data.image_id })
        this.apiGetImage();
    }

    apiGetImage = async () => {
        let imageResults = await Axios.get("https://www.artic.edu/iiif/2/" + this.state.imageID + "/full/600,/0/default.jpg");
        this.setState({ imageResults: imageResults.config.url })
    }

    render() {
        return (
            <div className="Details">
                <div className="nav">
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
                    <Link to='/'>Home</Link>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <Link to='/results'>Back to Results</Link>
                </div>
                
                <div className="details">
                    <p><span className='title'>{this.state.details.title}</span> by {this.state.details.artist_title}</p>
                    <p>Created in {this.state.details.date_end} in {this.state.details.place_of_origin}</p>
                    <p>Classification: {this.state.details.classification_title}</p>
                    <p id='art-desc'>{this.state.thumbnail.alt_text}</p>
                </div>
                <div className="image">
                    <img src={this.state.imageResults} alt_text='' />
                </div>
            </div>
        );
    }
}

export default Details;