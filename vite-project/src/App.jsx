import "./App.css";
import "./header.css";
import "./character-cards.css";
import "./character-ratings.css";
import "./reset.css";
import { data } from "../../public/fma-data";
function App() {
  let topCharacters = data
    .sort(function (a, b) {
      return b.votes - a.votes;
    })
    .slice(0, 5);
  const isIndexMultipleOfTwo = (character) => {
    return (topCharacters.indexOf(character) + 1) % 2 === 0 ? true : false;
  };
  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
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
    </>
  );
}

export default App;
