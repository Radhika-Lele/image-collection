
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Displayphotos from './Displayphotos';
import Form from './Form';

function App() {
  const [allphotos, setAllphotos ] = useState([]);
  //use useEffect to handle our axios call
  const[filteredPhotos, setfilteredPhotos] = useState([]);

  useEffect( () => {
      axios({
        url : "https://api.unsplash.com/search/photos",
        params :{
          client_id : 'qcKwXaLi80rZriRV-fbZSDodo-FUfhOAI6tD4t8jCMg',
          query: "puppies",
          per_page : 30
        }
      }).then( results => {
        //  console.log(results.data.results);  this gives us array of 30 storing in a variable , dont have orientation property
        const apiResults = results.data.results;
        const withOrientation = apiResults.map( (photoObject) =>{
          //creating a variable that will store the value of width divided by height
             const ratio = photoObject.width / photoObject.height; 
             //this variable value could change depends on photoObjects
            let orientation = "square";
            //less than 0.75 ->portraot photo , greater than 1.25 -> landscape photo,
            if(ratio < 0.75){
              orientation = "portrait"
            }else if (ratio > 1.25){
              orientation = "landscape"
            }
            // everything else will remain square-ish
            console.log(orientation);
            //return a new object that contains al the data of the original photoObject  but now also include the orientation property, adding new property in an object called orientation and give value orientation i.e landscape or square , portrait, spread opertor copy photoObject and add new property orientation
            return {...photoObject, orientation : orientation}
        })
        // console.log(withOrientation);  it will give new array and it has property orientation
        setAllphotos(withOrientation)
      })
  }, []);

  const getPhotos = (event, orientationChoice) =>{
    event.preventDefault();
    console.log(orientationChoice)

    const filterArray  = allphotos.filter(photo =>{
      return photo.orientation === orientationChoice
    })
    // console.log(filterArray)
    setfilteredPhotos(filterArray);
    }
  

  return (
    <div className="App">
      <header class="headerImage">
       <h1>Images Collections</h1>
       </header>
       <Form getPhotos={getPhotos} />
       <Displayphotos photos={filteredPhotos} />
    </div>
  );
  }

export default App;
