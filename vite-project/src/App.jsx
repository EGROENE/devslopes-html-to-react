import "./App.css";
import { data } from "../../public/fma-data";
import CharacterRatings from "./CharacterRatings/CharacterRatings";
import CharacterCards from "./CharacterCards/CharacterCards";
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
      <CharacterRatings data={data} />
      <CharacterCards data={data} />
    </>
  );
}

export default App;
