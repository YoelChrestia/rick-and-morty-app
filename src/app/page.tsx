import { CardsLayout } from "./components/CardsLayout";

export default function Home() {

  return (
    <main className="flex flex-col items-center p-10">
      <section className="w-full flex justify-between gap-10">
        <CardsLayout/>
        <CardsLayout/>
      </section>
    </main>
  );
}
