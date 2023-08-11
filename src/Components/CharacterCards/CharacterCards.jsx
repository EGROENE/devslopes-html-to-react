import "./character-cards.css";
import PropTypes from "prop-types";

const CharacterCards = (props) => {
  const characterData = props.characterData;

  return (
    <section id="character-cards">
      {characterData.map((character) => (
        <div key={character.name} className="card">
          <div className="card-titles">
            <h3>{character.name}</h3>
            <h4>{character.nickName}</h4>
          </div>
          <img src={character.imageUrl} alt="" />
          <p>{character.background}</p>
        </div>
      ))}
    </section>
  );
};

CharacterCards.propTypes = {
  characterData: PropTypes.array,
};

export default CharacterCards;
