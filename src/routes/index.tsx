import { createFileRoute } from "@tanstack/react-router";

import vitthalWatermark from "@/assets/vitthal-watermark.jpg";
import warkariProcession from "@/assets/warkari-procession.jpg";
import saffronFlag from "@/assets/saffron-flag.png";
import warivaaniLogo from "@/assets/warivaani-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "वारीवाणी | Warivaani — वारीच्या वाटेवर तुमच्या सोबती" },
      {
        name: "description",
        content:
          "वारीवाणी — पंढरपूर वारीच्या वाटेवर वारकऱ्यांसाठी मार्ग, मुक्काम आणि सेवा माहिती देणारे सोबती अ‍ॅप.",
      },
      { property: "og:title", content: "वारीवाणी | Warivaani" },
      {
        property: "og:description",
        content: "वारीच्या वाटेवर, वारीवाणी तुमच्या सोबती. जय हरी विठ्ठल.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Splash,
});

function Splash() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      <div className="relative flex min-h-screen w-full max-w-[520px] flex-col overflow-hidden bg-parchment">
        {/* warm radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-glow" />

        {/* Vitthal watermark */}
        <img
          src={vitthalWatermark}
          alt=""
          aria-hidden="true"
          width={900}
          height={900}
          className="pointer-events-none absolute left-1/2 top-[2%] w-[78%] -translate-x-1/2 opacity-[0.28] mix-blend-darken"
        />

        {/* saffron flag, top-left */}
        <img
          src={saffronFlag}
          alt=""
          aria-hidden="true"
          width={208}
          height={518}
          className="pointer-events-none absolute left-0 top-0 h-[40%] w-auto"
        />

        {/* top mantra */}
        <p className="relative z-10 pt-7 text-center font-devanagari text-[15px] tracking-wide text-ink">
          ॥ राम कृष्ण हरी ॥
        </p>
        <div className="relative z-10 mx-auto mt-2 flex items-center gap-2 opacity-70">
          <span className="h-px w-14 bg-saffron/60" />
          <span className="h-1.5 w-1.5 rotate-45 bg-saffron/70" />
          <span className="h-px w-14 bg-saffron/60" />
        </div>

        {/* centre block */}
        <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pb-[40%]">
          <img
            src={warivaaniLogo}
            alt="वारीवाणी लोगो — विठ्ठल मूर्ती, वाट आणि पाऊलखुणा"
            width={700}
            height={700}
            className="w-[54%] drop-shadow-[0_6px_18px_rgba(180,105,20,0.18)]"
          />

          <h1 className="mt-3 font-devanagari text-[3.6rem] font-bold leading-none text-navy">
            वारीवाणी
          </h1>

          <div className="mt-3 flex w-full items-center justify-center gap-3">
            <span className="h-[2px] w-12 bg-navy/70" />
            <span className="font-latin text-[0.95rem] font-semibold tracking-[0.42em] text-saffron-deep">
              WARIVAANI
            </span>
            <span className="h-[2px] w-12 bg-navy/70" />
          </div>

          <p className="mt-4 text-center font-devanagari text-[1.6rem] font-medium leading-[1.5] text-ink">
            वारीच्या वाटेवर,
            <br />
            वारीवाणी तुमच्या सोबती.
          </p>

          <div className="mt-4 flex items-center gap-2 opacity-70">
            <span className="h-px w-16 bg-saffron/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-saffron/70" />
            <span className="h-px w-16 bg-saffron/60" />
          </div>

          <span className="mt-7 block h-9 w-9 animate-spin-slow rounded-full border-2 border-saffron/25 border-t-saffron" />

          <p className="mt-4 font-devanagari text-[0.95rem] text-ink/80">
            वारीची वाट खुलत आहे...
          </p>
        </section>

        {/* procession */}
        <img
          src={warkariProcession}
          alt="पालखी सोहळ्यातील वारकरी भगवे झेंडे घेऊन मंदिराकडे चालत आहेत"
          width={1080}
          height={640}
          loading="lazy"
          className="pointer-events-none absolute bottom-[46px] left-0 w-full mask-fade-top"
        />

        {/* footer band */}
        <footer className="absolute inset-x-0 bottom-0 z-10">
          <div className="h-[26px] w-full rounded-t-[50%] bg-band" />
          <div className="flex items-center justify-center gap-3 bg-band px-4 pb-4 pt-1">
            <span className="text-[0.85rem] text-leaf">❦</span>
            <p className="font-devanagari text-[1.05rem] font-semibold tracking-wide text-parchment">
              ॥ जय हरी विठ्ठल ॥
            </p>
            <span className="text-[0.85rem] text-leaf">❦</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
