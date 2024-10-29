import { HeroTemplate } from "./templates";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <HeroTemplate 
        title="Olá, meu nome é"
        highlightedText=" Henrique Costa!"
        description="Tenho 19 anos e sou um estudante de desenvolvimento de sistemas e violonista nas horas vagas. Crio projetos para a web e aplicativos mobile."
        img={{
          src: "/icon.png",
          alt: "Hero Image"
        }}
      />
    </main>
  );
}
