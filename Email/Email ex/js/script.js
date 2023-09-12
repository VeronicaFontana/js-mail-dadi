const email = document.getElementById("email");
const emailInvitati = [
  "sergan.troma@gmail.com",
  "lavoro6620@gmail.com",
  "brennocad@gmail.com",
  "fontana.veronica98@gmail.com",
  "souralivaddi92@gmail.com",
  "yetta01gmail.com",
  "jouwe@gmail.com",
  "davidepittari@gmail.com",
];

const btn = document.getElementById("invia");
let messaggio = document.getElementById("esito");
let emailVerifica;

btn.addEventListener("click", function () {
  console.log(email.value);
  emailVerifica = false;

  console.log("Dentro Event");
  for (i = 0; i < emailInvitati.length; i++) {
    console.log(emailInvitati[i]);

    if (email.value === emailInvitati[i]) {
      emailVerifica = true;
    }
  }

  if (emailVerifica) {
    messaggio.innerHTML =
      "Sei presente nell'elenco degli invitati, entra pure!";
  } else {
    messaggio.innerHTML =
      "Non sei presente nell'elenco degli invitati, mi dispiace.";
  }
  
});
