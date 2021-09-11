import "./romanNumeralsConverterStyle.css";
import { useState } from "react";
import sendRomanNumeral from "../ajaxHandler/sendRomanNumeral.js";

export default function RomanNumeralsConverter() {
  const [romanNumeral, setRomanNumeral] = useState("");

  const onSubmitRomanNumeral = (e) => {
    e.preventDefault();
    console.log("VALUE", romanNumeral);
    sendRomanNumeral();
  }

  return (
    <div className="roman-numeral-converter">
      <form
        className="converter-form"
        onSubmit={(e) => {onSubmitRomanNumeral(e)}}
      >
        <label htmlFor="roman-numerals-input" className="converter-label">Entrez le chiffre romain que vous souhaitez convertir</label>
        <input
          type="text" id="roman-numerals-input"
          className="converter-input"
          onChange={(e) => setRomanNumeral(e.target.value)}
          value={romanNumeral}
        />
        <button className="converter-button">Convertir</button>
      </form>
      <h3 className="result-zone">XV correspond à 15 en chiffres arabes</h3>
    </div>
  )
}