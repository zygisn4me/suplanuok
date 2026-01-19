export default function SuccessPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-4 py-16 sm:px-6">
      <div className="space-y-4 rounded-2xl border bg-white px-6 py-8 shadow-sm">
        <h1 className="text-xl font-semibold text-zinc-900">
          Ačiū, mokėjimas sėkmingas!
        </h1>
        <p className="text-sm text-zinc-700">
          Jūsų užsakymas gautas. Per kelias minutes į nurodytą el. paštą
          atsiųsime nuorodas į įsigytas lenteles (Excel ir / arba Google Sheets
          formatu) bei trumpą naudojimo instrukciją.
        </p>
        <p className="text-xs text-zinc-500">
          Jei per 15 minučių laiško nematote, patikrinkite šlamšto / reklamos
          skiltis. Esant klausimams, rašykite mums el. paštu{" "}
          <a
            href="mailto:info@susiplanuok.lt"
            className="font-medium text-zinc-900 underline underline-offset-2"
          >
            info@susiplanuok.lt
          </a>
          .
        </p>
      </div>
    </div>
  );
}




