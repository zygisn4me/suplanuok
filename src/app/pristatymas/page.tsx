export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 text-sm text-slate-700 sm:px-6 sm:pt-14">
      <h1 className="text-2xl font-semibold text-slate-900">Pristatymas</h1>
      <p className="mt-2 text-xs text-slate-500">
        Paskutinį kartą atnaujinta: {new Date().getFullYear()} m.
      </p>

      <div className="mt-6 space-y-4 leading-relaxed">
        <p>
          Visi šioje svetainėje parduodami produktai yra skaitmeniniai produktai.
          Fizinės prekės nėra siunčiamos.
        </p>
        <p>
          Įsigyti skaitmeniniai produktai pateikiami elektroniniu būdu, nedelsiant
          po sėkmingo apmokėjimo (pvz., el. paštu arba suteikiant prieigą prie
          atsisiuntimo).
        </p>

        <h2 className="text-sm font-semibold text-slate-900">
          Kadangi nėra pristatomos fizinės prekės:
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Pristatymo mokesčiai netaikomi;</li>
          <li>Fizinis siuntimas, kurjerių ar pašto paslaugos nenaudojamos.</li>
        </ul>

        <p>
          Ši pristatymo tvarka atitinka Lietuvos Respublikos civilinio kodekso ir
          Europos Sąjungos teisės aktų nuostatas dėl skaitmeninio turinio teikimo.
        </p>
      </div>
    </div>
  );
}


