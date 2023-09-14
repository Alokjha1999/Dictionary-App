import React from 'react';
import './cardstyle.css'
const Card = (props) => {
    
    const { sourceUrl, meaningofWord, word, phonetic } = props.info;
    const audioUrl = props.info.audio;
    return (
        <div className='cardContainer'>
            <h1 className='mainWord'>{word ? word.toUpperCase() : "Loading..."}</h1>
            <p>{phonetic}</p>
            <p>Pronounce: </p>
            
            <audio key={Math.random()} controls>
                <source src={audioUrl} type="audio/ogg">
                </source></audio>
                
            {
                meaningofWord !== undefined ? meaningofWord.map((val, index) => {
                    return <div key={index}>
                        <h2 className='partofSpeech'>{val.partOfSpeech ? (val.partOfSpeech).toUpperCase() : "Wait..."} :-</h2>
                        <ul>
                            {
                                val.definitions.map((def) => {
                                    return <li key={Math.random()}>{def.definition}</li>
                                })
                            }
                        </ul>

                    </div>
                }) : console.log("Fetching Meaning...")
            }

            <div className='linkContainer'>
                <a href={sourceUrl}>More Info</a>
                <br></br><br></br>
                <a href="https://github.com/Alokjha1999">@AlokTechUniverse {new Date().getFullYear()}</a>
            </div>


        </div>
    );
}

export default Card;

