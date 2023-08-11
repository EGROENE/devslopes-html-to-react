import React from "react";
import PropTypes from "prop-types";
import "./character-ratings.css";

class CharacterRatings extends React.Component {
  render() {
    const data = this.props.data;
    let topCharacters = data
      .sort(function (a, b) {
        return b.votes - a.votes;
      })
      .slice(0, 5);

    const isIndexMultipleOfTwo = (character) => {
      return (topCharacters.indexOf(character) + 1) % 2 === 0 ? true : false;
    };

    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {topCharacters.map((character) => (
              <tr
                key={character.name}
                className={isIndexMultipleOfTwo(character) ? "light" : "dark"}
              >
                <td>{character.name}</td>
                <td>{character.skillset.join(", ")}</td>
                <td>{character.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

CharacterRatings.propTypes = {
  data: PropTypes.array,
};

export default CharacterRatings;
