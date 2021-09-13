# The BAS Art Seach App

## DESCRIPTION

An application that allows a user to find and view art at the Art Institute of Chicago. The user can enter an optional keyword to receive a list of artworks. The user can then click on an item to see additional details.

## PROJECT LINKS

- [github repo](https://github.com/bradjd1/Art)
- [deployed app on Heroku](https://bas-art.herokuapp.com/)

## WIREFRAMES

![wireframes](https://github.com/bradjd1/Art/blob/master/planning/files%20for%20readme/Screen%20Shot%20-%20Wireframes.png)

## USER STORIES

- As an art enthusiast, I want to be able to search for art at the Art Institute of Chicago by a keyword or keywords.
- As a user of this app, I want to see details about a piece of art from the Search Results.
- As a user of this app, I want to see my search criteria when I'm looking at Search Results.
- As an art enthusiast, I want to view an image of the artwork.
- As a user of this app, I want to return to my Search Results after viewing Details.

## TECHNOLOGIES USED

- Platform: Node.js with these NPM Packages:
  - React {Component}
  - React Router DOM {Route, Link, Redirect, Browser Router}
  - Axios
- Writing Code: Visual Studio Code
- Debug Code: npm start & FireFox Developer Tools
- Canva: edit image used on Start Page 
- Version Control: GitHub
- Deployment: Heroku

## APIs USED
* Public API from the Art Institute of Chicago: https://api.artic.edu/api/v1/artworks    
    - Endpoints for Search and for Details
* International Image Interoperability Framework (IIIF) Image API: https://iiif.io/api/image/2.0/

## BASIC CODE FLOW
* User enters search keyword (or blank) on the Start Page.
* The AIoC API runs using those search parameters and renders the results to the ListResults page/component.
    - The Search Results are those of the return of the API call, which uses their own internal search logic (including a limit of 100 search results).
* User clicks on a result to see details about that piece of art.  
    - The app captures the ID of the search result that was clicked and builds the URL for the next API call.
    - The AIoC API is called again, using the Details endpoint, and renders the results to the Details page/component.
    - The app gets the Image ID from the second AIoC API call to build the URL for the IIIF API call.
    - The IIIF API is called and renders the image to the Details page/component.

## NEXT STEPS / FUTURE FEATURES

### Low-Hanging Fruit
- Addtional details: art is included in the Museum's Art Tour, on-loan, etc.

### Additional Features
- Thumbnails for each of the Search Results
- Return next 100 pieces of art in the Search Results (put pageNumber in State of ListResults and issue another API call)

## CODE SNIPPETS

One piece of code of which we are especially proud is the use of props.match.params.id to capture the id of the search result that was clicked.  And then using that id (through state) to build the URL for the 3rd API call (to a second API).

```javascript
const id = this.props.match.params.id
let detailResults = await Axios.get("https://api.artic.edu/api/v1/artworks/" + id + fields)
...
this.setState({ imageID: detailResults.data.data.image_id })

apiGetImage = async () => {
    let imageResults = await Axios.get("https://www.artic.edu/iiif/2/" + this.state.imageID + "/full/600,/0/default.jpg");
    this.setState({ imageResults: imageResults.config.url })}
```

## REMAINING ISSUES / BUGS
- None

## LESSONS-LEARNED
- It's important to understand how your API works and what kind of data it returns:
    * Search Results were not full details
    * Search Results limited to 100 records
    * Thumbnail images were not worth using
- Working with images as backgrounds is not as easy as it would seem (CSS can quickly become an issue)

