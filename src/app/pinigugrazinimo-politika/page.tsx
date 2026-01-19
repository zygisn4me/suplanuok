export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 text-sm text-slate-700 sm:px-6 sm:pt-14">
      <h1 className="text-2xl font-semibold text-slate-900">
        Pinigų grąžinimo politika
      </h1>
      <p className="mt-2 text-xs text-slate-500">
        Paskutinį kartą atnaujinta: {new Date().getFullYear()} m.
      </p>

      <div className="mt-6 space-y-4 leading-relaxed">
        <p>
          Dėkojame, kad įsigijote mūsų produktą. Visi šioje svetainėje parduodami
          produktai yra skaitmeniniai produktai, kurie pateikiami elektroniniu
          būdu.
        </p>

        <h2 className="text-sm font-semibold text-slate-900">
          Skaitmeniniai produktai – grąžinimai ir pinigų grąžinimas netaikomi
        </h2>
        <p>
          Atsižvelgiant į skaitmeninių produktų pobūdį, visi pardavimai yra
          galutiniai. Po sėkmingo apmokėjimo skaitmeninis produktas automatiškai
          pateikiamas elektroniniu būdu (el. paštu) ir tampa prieinamas
          atsisiuntimui nedelsiant. Kadangi skaitmeninis turinys gali būti iš
          karto pasiektas ir naudojamas, pinigų grąžinimas, grąžinimai ar keitimai
          nėra galimi.
        </p>

        <h2 className="text-sm font-semibold text-slate-900">
          Atkreipiame dėmesį, kad:
        </h2>
        <p>
          Užbaigdami pirkimą, Jūs patvirtinate ir sutinkate, jog sutinkate, kad
          skaitmeninis turinys būtų pateiktas nedelsiant, ir atsisakote teisės per
          14 dienų atsisakyti sutarties, kaip tai numatyta Lietuvos Respublikos
          civilinio kodekso ir ES vartotojų teisių apsaugos teisės aktuose.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Pinigai negrąžinami dėl netyčinio pirkimo, nepasitenkinimo produktu ar
            apsigalvojimo.
          </li>
          <li>
            Pinigai negrąžinami, jei produktas nebuvo naudojamas arba buvo
            neteisingai suprastas jo turinys ar paskirtis.
          </li>
        </ul>

        <h2 className="text-sm font-semibold text-slate-900">
          Pagalba ir konsultacijos
        </h2>
        <p>
          Jeigu turite klausimų dėl pirkimo arba Jums reikalinga pagalba
          prisijungiant prie įsigyto skaitmeninio produkto ar jį atsisiunčiant,
          kviečiame susisiekti su mumis. Mielai padėsime ir pasirūpinsime, kad
          visa informacija būtų aiški.
        </p>
      </div>
    </div>
  );
}


