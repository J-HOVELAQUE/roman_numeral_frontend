import "./romanNumeralsConverterStyle.css";
import { useState } from "react";
import sendRomanNumeral from "../ajaxHandler/sendRomanNumeral.js";

export default function RomanNumeralsConverter() {
  const [romanNumeral, setRomanNumeral] = useState("");
  const [result, setResult] = useState("")

  const onSubmitRomanNumeral = async (e) => {
    e.preventDefault();
    const arabValue = await sendRomanNumeral(romanNumeral);
    setResult(arabValue);
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
      <h3 className="result-zone">{result}</h3>
    </div>
  )
}