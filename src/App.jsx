import "./App.css";
import { data } from "../public/fma-data";
import CharacterRatings from "../src/Components/CharacterRatings/CharacterRatings";
import CharacterCards from "../src/Components//CharacterCards/CharacterCards";
import "./header.css";
import "./reset.css";
function App() {
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
      <CharacterRatings characterData={data} />
      <CharacterCards characterData={data} />
    </>
  );
}

export default App;
