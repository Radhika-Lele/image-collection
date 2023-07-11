import {useState} from 'react';

function Form({getPhotos}){
    const [userChoice, setUserChoice] = useState('');

    //create a function that called when the user change the dropdown option 
    const handleUserChoice = (event) =>{
        // console.log(event.target.value);
        setUserChoice(event.target.value)
    }
    
    return(
    <form onSubmit={(event) => getPhotos(event, userChoice)}>
        <label htmlFor="photoOrientation">Show me photos that are:</label>
        <select id="photoOrientation" name="photoOrientation" onChange={handleUserChoice} value={userChoice}>
        <option value="" disabled>Pick one:</option>
        <option value="square">square</option>
        <option value="landscape">landscape</option>
        <option value="portrait">portrait</option>
      </select>
      <button type="submit">Give me photos!</button>
    </form> 
    )
}
export default Form;