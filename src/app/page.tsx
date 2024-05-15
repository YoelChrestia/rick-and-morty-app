import { EpisodesGrid } from "./components/EpisodesGrid";
import { CharacterProvider } from "./contexts/characterContexts";
import { CharactersSection } from "./components/CharactersSection";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <header className="w-full flex justify-center mt-6">
        <Image
          src={"/Rick_and_Morty.png"}
          alt="Rick and Morty Logo"
          width={400}
          height={300}
        /> 
      </header>
      <main className="flex flex-col items-center p-8">
          <CharactersSection />
          <EpisodesGrid/>
      </main>
      <footer className="bg-black w-full text-center p-6">
        <span className="text-white">Yoel Chrestia - 2024</span>
      </footer>
    </>
  );
}
