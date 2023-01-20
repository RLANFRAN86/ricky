import { useEffect, useState } from 'react';
import charactersJson from './characters.json';
import './App.css';

function CharactersAnimation(props) {
  const [name, setName] = useState(props.name)
  const [image, setImage] = useState(props.image)
  const [status, setStatus] = useState(props.status)
  const [type, setType] = useState(props.type)
  const [gender, setGender] = useState(props.gender)
  const [location, setLocation] = useState(props.location)
  const [id, setId] = useState(props.id);

  useEffect(() => {
    setImage(props.image)
    setName(props.name);
    setStatus(props.status);
    setType(props.type);
    setGender(props.gender);
    setLocation(props.location);
  }, [props]);


  return (
    <div id="character">

      <div className='closeX'>
        <button className='close' /*onClick={{showDisplay}}*/ > X </ button>
      </div>
      <img width="250px" src={image} onClick={() => props.getCharacter(id)} />
      <p>NAME: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
      <p>STATUS:  <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} /></p>
      <p>TYPE:  <input type="text" value={type} onChange={(e) => setType(e.target.value)} /></p>
      <p>GENDER:  <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} /></p>
      <p>LOCATION: <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} /></p>

      <button onClick={() => props.edit({
        image: image,
        name: name,
        status: status,
        type: type,
        gender: gender,
        location: {
          name: location
        },
        id: id
      })
      }>
        Edit character
      </button>

      <button onClick={() => props.delete(id)}>
        Delete character
      </button>

    </div>
  );
}

export default CharactersAnimation;