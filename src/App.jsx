import "./App.css";
import PageHeader from "./Components/PageHeader/PageHeader";
import { data } from "../public/fma-data";
import CharacterRatings from "../src/Components/CharacterRatings/CharacterRatings";
import CharacterCards from "../src/Components//CharacterCards/CharacterCards";
import "./reset.css";
function App() {
  return (
    <>
      <PageHeader />
      <CharacterRatings characterData={data} />
      <CharacterCards characterData={data} />
    </>
  );
}

export default App;
