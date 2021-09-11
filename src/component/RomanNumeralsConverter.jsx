export default function RomanNumeralsConverter() {
  return (
    <div>
      <form>
        <label htmlFor="roman-numerals-input">Entrez le chiffre romain que vous souhaitez convertir</label>
        <input type="text" id="roman-numerals-input" />
        <button>Convertir</button>
      </form>
      <h3>XV correspond à 15 en chiffres arabes</h3>
    </div>
  )
}