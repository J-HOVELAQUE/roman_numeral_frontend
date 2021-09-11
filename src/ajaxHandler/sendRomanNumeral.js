const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:3000";

export default async function sendRomanNumeral(romanNumeral) {
  if (serverUrl === undefined) {
    alert("Serveur inconu");
  }

  const rawAnswer = await fetch(serverUrl + "/roman/" + romanNumeral);
  const answer = await rawAnswer.json();

  if (rawAnswer.ok) {
    return `${answer.nombreEnChiffreRomain.toUpperCase()} correspond à ${
      answer.nombreEnChiffreArabe
    } en chiffres arabes`;
  }

  return answer.erreur;
}
