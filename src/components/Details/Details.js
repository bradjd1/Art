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
        }
    }

    componentDidMount = () => {
        console.log('this.props: ',this.props.match.params.id)
        this.apiGetDetails()
    }

    apiGetDetails = async () => {
        const id = this.props.match.params.id
        const fields = '?fields=artist_title,title,thumbnail,place_of_origin,date_end,classification_title,image_id,id'
        let detailResults = await Axios.get("https://api.artic.edu/api/v1/artworks/"+id+fields)
        console.log('detailResults: ', detailResults);
        this.setState({details: detailResults.data.data});
        console.log('details', this.state.details);
        this.setState({imageID: detailResults.data.data.image_id})
        }

    apiGetImage = async () => {
        let imageResults = await Axios.get("https://www.artic.edu/iiif/2/"+this.state.imageID+"/full/600,/0/default.jpg");
        console.log(imageResults)
        this.setState({imageResults: imageResults})
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
                    <p>Title: {this.state.details.title} by {this.state.details.artist_title}</p>
                    <p>Created in {this.state.details.date_end} in {this.state.details.place_of_origin}</p>
                    <p>Classification: {this.state.details.classification_title}</p>
                    {/* <p>{this.state.details.thumbnail.alt_text}</p> */}

                </div>
            </div>
        );
    }
}

export default Details;