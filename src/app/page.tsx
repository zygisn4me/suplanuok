import Image from "next/image";

export default function Home() {
  return (
    <div
      id="virsus"
      className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14"
    >
      <section className="grid gap-10 pb-10 sm:grid-cols-[1.1fr,0.9fr] sm:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
            <span className="rounded-full bg-sky-600 px-2 py-0.5 text-[11px] font-semibold text-white">
              NAUJA
            </span>
            <span>Lietuviška įpročių sekimo lentelė · Skaitmeninis failas</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-[2.2rem]">
            Susiplanuok! – viena aiški ir spalvinga lentelė jūsų kasdieniams
            įpročiams.
          </h1>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Vizuali, lengvai pildoma įpročių sekimo lentelė su dienos progreso
            grafiku ir savaitės žymėjimo langeliais – kaip matote paveikslėlyje.
            Failas veikia Google Sheets, todėl galite naudoti kompiuteryje ar
            telefone.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#produktai"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            >
              Peržiūrėti šablonus
            </a>
            <a
              href="#kontaktai"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Turi klausimų? Parašyk
            </a>
          </div>
          <p className="text-xs text-slate-500">
            Skaitmeniniai produktai – nuorodos į šablonus išsiunčiamos el. paštu
            iškart po apmokėjimo.
          </p>
        </div>
        <div className="relative">
          <div className="relative space-y-3 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-sky-700">
                Įpročių sekimo lentelė
              </p>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                100% skaitmeninis
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl bg-slate-50">
              <Image
                src="/habit-tracker.png"
                alt="Įpročių sekimo lentelės peržiūra"
                width={480}
                height={280}
                className="h-48 w-full object-contain bg-slate-50"
                priority
              />
            </div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">
                  Vienkartinis skaitmeninis produktas
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-semibold text-slate-900">
                    €5,99
                  </span>
                </div>
              </div>
              <a
                href="https://buy.stripe.com/aFa14nf4x9vn3mP1n26Na00"
                className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-slate-800"
              >
                Pirkti dabar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="produktai" className="space-y-6 pb-10 pt-6">
        <div className="grid gap-8 sm:grid-cols-[1.2fr,0.8fr] sm:items-start">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              Kas įeina į įpročių sekimo lentelę?
            </h2>
            <p className="text-sm text-slate-700">
              Ši lentelė sukurta pagal realų naudojimą – kad matytumėte ne tik
              ar pažymėjote įprotį, bet ir bendrą savaitės bei mėnesio progresą.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Dienos progreso stulpelinė diagrama.</li>
              <li>• Savaitės peržiūra su žymėjimo langeliais kiekvienam įpročiui.</li>
              <li>• Aiškūs savaitės ir mėnesio procentai.</li>
              <li>• Vietos jūsų svarbiausiems įpročiams ir tikslams.</li>
              <li>• Paruoštas naudojimui Google Sheets aplinkoje.</li>
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
              Vienintelis produktas šiame puslapyje
            </p>
            <p className="text-base font-semibold text-slate-900">
              Įpročių sekimo lentelė (Google Sheets)
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-slate-900">€5,99</span>
              <span className="text-xs text-slate-500">vienkartinis mokėjimas</span>
            </div>
            <p className="text-xs text-slate-600">
              Nuoroda į failą bus atsiųsta el. paštu iškart po sėkmingo
              apmokėjimo Stripe sistemoje.
            </p>
            <a
              href="https://buy.stripe.com/aFa14nf4x9vn3mP1n26Na00"
              className="mt-1 inline-flex w-full justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
            >
              Pirkti dabar už €5,99
            </a>
          </div>
        </div>
      </section>

      <section id="kontaktai" className="mt-10 space-y-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">Kontaktai</h2>
        <p>
          Turite klausimų dėl šablonų, sąskaitų ar verslinių užsakymų? Parašykite
          mums el. paštu{" "}
          <a
            href="mailto:info@susiplanuok.lt"
            className="font-medium text-sky-700 underline underline-offset-2"
          >
            info@susiplanuok.lt
          </a>
          .
        </p>
        <p className="text-xs text-slate-500">
          Čia gali atsirasti ir papildoma informacija apie įmonę, rekvizitus,
          registracijos adresą bei duomenų apsaugos pareigūną, jei taikoma.
        </p>
      </section>
    </div>
  );
}
