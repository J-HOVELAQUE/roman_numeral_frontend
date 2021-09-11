import "./romanNumeralsConverterStyle.css"

export default function RomanNumeralsConverter() {
  return (
    <div className="roman-numeral-converter">
      <form className="converter-form">
        <label htmlFor="roman-numerals-input" className="converter-label">Entrez le chiffre romain que vous souhaitez convertir</label>
        <input type="text" id="roman-numerals-input" className="converter-input"/>
        <button className="converter-button">Convertir</button>
      </form>
      <h3 className="result-zone">XV correspond à 15 en chiffres arabes</h3>
    </div>
  )
}