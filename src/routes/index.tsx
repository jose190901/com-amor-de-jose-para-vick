import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useRef, useState } from "react";

import kitty from "@/assets/kitty.png";
import comeco from "@/assets/vick-185849.jpg";
import juntos1 from "@/assets/vick-185925.jpg";
import juntos2 from "@/assets/vick-185948.jpg";
import ranked from "@/assets/vick-185746.jpg";
import noite from "@/assets/vick-190000.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pra você, Vick ♡" },
      {
        name: "description",
        content:
          "Um cantinho fofo com as nossas lembranças e uma pergunta que eu não quero mais guardar só pra mim.",
      },
      { property: "og:title", content: "Pra você, Vick ♡" },
      {
        property: "og:description",
        content: "Nossas lembranças, uma cartinha e uma pergunta especial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const recados = [
  "Opa, escapei! 😜",
  "Tenta me pegar!",
  "Quase! 😄",
  "Sou rápido, hein?",
  "Mais uma tentativa?",
];

function Bow({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      🎀
    </span>
  );
}

function Polaroid({
  src,
  alt,
  caption,
  tilt,
}: {
  src: string;
  alt: string;
  caption: string;
  tilt: string;
}) {
  return (
    <figure
      className={`mx-auto w-full max-w-[340px] rounded-[1.75rem] bg-cream p-3 pb-1 ring-2 ring-bubblegum/60 shadow-[0_10px_0_var(--blush)] transition-transform duration-300 hover:rotate-0 ${tilt}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block w-full rounded-[1.25rem] object-cover"
      />
      <figcaption className="px-2 py-4 text-center font-hand text-xl leading-snug text-cherry">
        {caption}
      </figcaption>
    </figure>
  );
}

function Index() {
  const [naoText, setNaoText] = useState("não 🙈");
  const [naoPos, setNaoPos] = useState<{ left: number; top: number } | null>(null);
  const [aberto, setAberto] = useState(false);
  const idx = useRef(0);

  const fugir = useCallback(() => {
    setNaoText(recados[idx.current++ % recados.length] ?? "não 🙈");
    const w = window.innerWidth;
    const h = window.innerHeight;
    setNaoPos({
      left: 16 + Math.random() * Math.max(0, w - 200),
      top: 16 + Math.random() * Math.max(0, h - 100),
    });
  }, []);

  const corações = Array.from({ length: 26 }, (_, i) => ({
    ch: ["♡", "❤️", "💕", "🎀"][i % 4],
    x: (Math.random() - 0.5) * 700,
    y: (Math.random() - 0.5) * 620,
    d: Math.random() * 0.6,
  }));

  return (
    <div className="min-h-screen bg-background text-ink">
      {/* HERO */}
      <header className="relative overflow-hidden px-6 pb-16 pt-20 text-center">
        <div className="pointer-events-none absolute -left-16 top-8 size-56 rounded-full bg-bubblegum/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-12 top-32 size-48 rounded-full bg-blush blur-2xl" />
        <div className="relative mx-auto max-w-2xl animate-rise">
          <img
            src={kitty}
            alt="Gatinha fofa de lacinho vermelho"
            width={768}
            height={768}
            className="mx-auto size-32 animate-float drop-shadow-[0_8px_0_var(--blush)] sm:size-40"
          />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-cherry ring-2 ring-bubblegum">
            um presente feito pra você
          </p>
          <h1 className="mt-5 text-6xl font-extrabold leading-none tracking-tight text-cherry sm:text-7xl">
            Pra você, Vick.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/70">
            Separei um pouquinho de nós aqui. Tem uma coisa que eu quero te perguntar, mas
            antes…
          </p>
          <p className="mt-6 font-hand text-2xl text-bubblegum">↓ desce devagarinho ↓</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-4">
        {/* COMEÇO */}
        <section className="grid items-center gap-10 py-12 md:grid-cols-2">
          <Polaroid
            src={comeco}
            alt="Uma lembrança nossa do começo"
            caption="Lembra disso?"
            tilt="-rotate-3"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-cherry">
              Foi acontecendo. <Bow />
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Eu não sabia onde isso ia dar. Só fui gostando de conversar contigo, de te ter
              por perto… e quando percebi, já queria mais tempo com você.
            </p>
          </div>
        </section>

        {/* AS PEQUENAS COISAS */}
        <section className="py-12 text-center">
          <div className="grid gap-8 sm:grid-cols-2">
            <Polaroid
              src={juntos1}
              alt="Uma das nossas lembranças juntos"
              caption="Meu lugar preferido é pertinho de você. ♡"
              tilt="-rotate-2"
            />
            <Polaroid
              src={juntos2}
              alt="Outro momento nosso"
              caption="Olha nós dois… até que a gente combina, né?"
              tilt="rotate-2 sm:mt-8"
            />
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <h2 className="text-4xl font-extrabold text-cherry">As pequenas coisas.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Gosto de olhar essas fotos e lembrar da gente. Até das coisas pequenas, que na
              hora parecem só mais um momento.
            </p>
          </div>
        </section>

        {/* RANKED */}
        <section className="grid items-center gap-10 py-12 md:grid-cols-2">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h2 className="text-4xl font-extrabold text-cherry">pó puxa?</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Mesmo você sendo muuuito ruim, eu não te trocaria por nada neste mundo. Bora
              perder mais uma juntinhos? ❤️
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Polaroid
              src={ranked}
              alt="Registro de uma ranked juntos"
              caption="Mesmo na derrota, eu continuo te amando."
              tilt="rotate-2"
            />
          </div>
        </section>

        {/* NOITE */}
        <section className="py-12">
          <Polaroid
            src={noite}
            alt="Nossa lembrança à noite"
            caption="Se eu pudesse, ficava assim, pertinho de você. ♡"
            tilt="-rotate-1"
          />
        </section>

        {/* CARTINHA */}
        <section className="my-8 rounded-[2.5rem] bg-cream p-8 ring-2 ring-bubblegum/60 sm:p-12">
          <div className="mx-auto max-w-xl text-center">
            <img
              src={kitty}
              alt=""
              loading="lazy"
              width={768}
              height={768}
              className="mx-auto size-16"
            />
            <h2 className="mt-4 text-4xl font-extrabold text-cherry">Vick,</h2>
            <p className="mt-5 font-hand text-2xl leading-relaxed text-ink">
              Entre uma conversa e outra, entre as partidas e os nossos momentos, eu fui me
              apaixonando por você.
            </p>
            <p className="mt-4 font-hand text-2xl leading-relaxed text-ink">
              Fiz esse cantinho pra te dizer isso do meu jeito. E pra fazer uma pergunta que
              já não quero guardar só pra mim.
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-cherry">
              com carinho, de mim pra você
            </p>
          </div>
        </section>

        {/* PEDIDO */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-bubblegum/40 px-6 py-16 text-center">
          <Bow className="absolute left-6 top-6 animate-float text-3xl" />
          <Bow className="absolute right-8 bottom-8 animate-float text-2xl" />
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cherry">
            e aí…
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            <span className="text-cherry">Vitória</span>, quer namorar comigo?
          </h2>
          <div className="mt-10 flex min-h-[70px] flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setAberto(true)}
              className="rounded-full bg-cherry px-10 py-4 font-display text-xl font-extrabold text-cream shadow-[0_6px_0_var(--ink)] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_var(--ink)]"
            >
              SIMM ❤️
            </button>
            <button
              type="button"
              onMouseEnter={fugir}
              onClick={fugir}
              onTouchStart={(e) => {
                e.preventDefault();
                fugir();
              }}
              style={
                naoPos
                  ? { position: "fixed", left: naoPos.left, top: naoPos.top, zIndex: 40 }
                  : undefined
              }
              className="rounded-full bg-cream px-7 py-3.5 font-display text-base font-bold text-ink/60 ring-2 ring-bubblegum"
            >
              {naoText}
            </button>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center font-hand text-xl text-cherry">
        feito com muito amor, pra Vick ♡
      </footer>

      {/* CELEBRAÇÃO */}
      {aberto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-blush px-6 text-center"
        >
          <div className="pointer-events-none absolute inset-0">
            {corações.map((c, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-[45%] animate-burst text-2xl"
                style={
                  {
                    "--x": `${c.x}px`,
                    "--y": `${c.y}px`,
                    animationDelay: `${c.d}s`,
                  } as React.CSSProperties
                }
              >
                {c.ch}
              </span>
            ))}
          </div>
          <div className="relative max-w-lg">
            <img
              src={kitty}
              alt=""
              width={768}
              height={768}
              className="mx-auto size-28 animate-float"
            />
            <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-cherry">
              mais uma lembrança pra nós
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-cherry sm:text-5xl">
              Agora é oficial, Vick. ❤️
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              Eu te amo. Quero mais conversas, mais partidas e mais momentos pra guardar aqui
              com você.
            </p>
            <button
              type="button"
              onClick={() => setAberto(false)}
              className="mt-8 rounded-full bg-cherry px-8 py-3 font-display text-base font-extrabold text-cream shadow-[0_5px_0_var(--ink)] active:translate-y-1"
            >
              voltar pras nossas fotos
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
