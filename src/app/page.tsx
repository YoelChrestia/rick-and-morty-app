import { EpisodesGrid } from "./components/EpisodesGrid"
import { CharactersSection } from "./components/CharactersSection"
import Image from "next/image"

export default function Home() {

  return (
    <>
      <header className="w-full flex justify-center mt-6 mb-2">
        <Image
          src={"/Rick_and_Morty.png"}
          alt="Rick and Morty Logo"
          width={400}
          height={300}
          className="w-72 md:w-auto"
        /> 
      </header>
      <main className="flex flex-col items-center p-2 md:p-8">
          <CharactersSection />
          <EpisodesGrid/>
      </main>
      <footer className="bg-black w-full text-center p-6">
        <span className="text-white">Yoel Chrestia - 2024</span>
      </footer>
    </>
  );
}
