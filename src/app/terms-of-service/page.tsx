import TermsOfServiceLt from "../paslaugu-teikimo-salygos/page";

export default function TermsOfServicePage() {
  // English path /terms-of-service reuses the same content as the Lithuanian
  // /paslaugu-teikimo-salygos route, so both URLs veikia productione.
  return <TermsOfServiceLt />;
}


