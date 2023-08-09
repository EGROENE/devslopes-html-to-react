import "./character-cards.css";
import PropTypes from "prop-types";

const CharacterCards = (props) => {
  const data = props.data;

  return (
    <section id="character-cards">
      {data.map((character) => (
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
  data: PropTypes.array,
};

export default CharacterCards;
