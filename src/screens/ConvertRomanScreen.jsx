import RomanNumeralsConverter from "../component/RomanNumeralsConverter";
import "./converterScreen.css";

export default function ConvertRomanScreen() {
  return (
    <div className="converter-screen">
      <h1>CONVERTISSEUR DE CHIFFRES ROMAINS</h1>
      <RomanNumeralsConverter/>
    </div>
  )
}