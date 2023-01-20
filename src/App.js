import CharactersAnimation from './CharactersAnimation.js';
import './App.css';
import NewCharacter from './NewCharacter.js';
import { useEffect, useState } from 'react';
import charactersJson from './characters.json';


function App() {
  const [showDisplay, setShowDisplay] = useState(true);
  const [characters, setCharacters] = useState(charactersJson);
  const [onlyCharacter, setOnlyCharacter] = useState(false);
  const [current, setCurrent] = useState(charactersJson[0]);


  //Add character function
  const addNewCharacter = (newCharacter) => {
    characters.push(newCharacter);
  };

  //Edit character function
  const editCharacter = (editChar) => {
    //El filter busca algo que no coincida, se queda con todo menos con el editado
    const editCharacters = characters.filter((char) => editChar.id !== char.id);
    editCharacters.push(editChar); //Metemos el personaje nuevo y hemos quitado el viejo
    setCharacters(editCharacters);
  };

  const deleteCharacter = (deleteChar) => {
    const deleteCharacters = characters.filter((char) => deleteChar !== char.id);
    //Le indicamos que queremos que se borre solo un personaje
    setCharacters(deleteCharacters);
  };

  const getCharacter = (id) => {
    setOnlyCharacter(!onlyCharacter);
    const viewOne = characters.filter((char) => id === char.id);
    setCurrent(viewOne[0]);//Ya tenemos en current el personaje que hemos hecho click y lo pasamos al componente
  };


  useEffect(() => {
    showDisplay === true ? alert("You can see all characters") : alert("You can add a character");
  }, [showDisplay]);

  return (

    <div className="App">

      <div style={{ display: onlyCharacter ? 'none' : 'block' }}>

        <div className='create'>
          <button onClick={() => setShowDisplay(!showDisplay)} className='buttonShow' >
            {showDisplay ? 'CREATE CHARACTER' : 'SHOW CHARACTER'}
          </button>

        </div>

        <div className="container">

          <div className="container" style={{ display: showDisplay ? "none" : "block" }}>
            <NewCharacter newCharac={(item) => addNewCharacter(item)} /> {/*newChar es lo que usamos en el hijo */}
          </div>

          <div className="container" style={{ display: showDisplay ? "block" : "none" }}>

            {characters.map((character) =>
              <CharactersAnimation
                key={character.id}
                image={character.image}
                name={character.name}
                type={character.type}
                status={character.status}
                gender={character.gender}
                location={character.location.name}
                id={character.id}
                edit={(editChar) => editCharacter(editChar)} //Esto es lo que usamos en el hijo
                delete={(deleteChar) => deleteCharacter(deleteChar)}
                getCharacter={(id) => getCharacter(id)}
              />
            )}
          </div>
        </div>
      </div>
      <div style={{ display: !(onlyCharacter) ? 'none' : 'block' }}>
        <CharactersAnimation
          image={current.image}
          name={current.name}
          type={current.type}
          status={current.status}
          gender={current.gender}
          location={current.location.name}
          id={current.id}
          edit={(editChar) => editCharacter(editChar)} //Esto es lo que usamos en el hijo
          delete={(deleteChar) => deleteCharacter(deleteChar)}
          getCharacter={(id) => getCharacter(id)}
        />

      </div>
    </div>

  );
}

export default App;