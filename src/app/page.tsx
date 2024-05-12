import { EpisodesGrid } from "./components/EpisodesGrid";
import { CharacterProvider } from "./contexts/characterContexts";
import { CharactersSection } from "./components/CharactersSection";

export default function Home() {

  return (
    <main className="flex flex-col items-center p-10">
        <CharactersSection />
        <EpisodesGrid/>
    </main>
  );
}
