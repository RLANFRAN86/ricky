import './App.css';
import { useEffect, useState } from 'react';
import charactersJson from './characters.json';
import CharactersAnimation from './CharactersAnimation';


function NewCharacter(props) {

  const [key, setKey] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [gender, setGender] = useState();
  const [location, setLocation] = useState();


  return (
    <div id="character">
      <p>Add a new character</p>
      <p>IMAGE: <input type="text" onChange={(e) => setImage(e.target.value)} /></p>
      <p>NAME: <input type="text" onChange={(e) => setName(e.target.value)} /></p>
      <p>STATUS:  <input type="text" onChange={(e) => setStatus(e.target.value)} /></p>
      <p>TYPE:  <input type="text" onChange={(e) => setType(e.target.value)} /></p>
      <p>GENDER:  <input type="text" onChange={(e) => setGender(e.target.value)} /></p>
      <p>LOCATION: <input type="text" onChange={(e) => setLocation(e.target.value)} /></p>

      <button onClick={() => props.newCharac({
        key: key,
        image: image,
        name: name,
        status: status,
        type: type,
        gender: gender,
        location: {
          name: location
        }

      })}>ADD CHARACTER</button>
    </div>
  );
}
export default NewCharacter;