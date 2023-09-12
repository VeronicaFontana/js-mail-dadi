let numUser = document.getElementById("num-user");
const numeri = [1, 2, 3, 4, 5, 6];
const randomIndex = Math.floor(Math.random() * (numeri.length + 1));
const numPc = numeri[randomIndex];

console.log(numPc);

let btn = document.getElementById("btn");
let btnAnnulla = document.getElementById("annulla");
let messaggio = document.getElementById("messaggio");

btn.addEventListener("click", function(){

  if(numUser.value > 6 || numUser.value < 1){
    messaggio.innerHTML = "Il numero deve essere compreso fra 1 e 6. Riprova!";
  }else if(numUser.value > numPc){
    messaggio.innerHTML = "Vince il Giocatore!";
  }else if(numUser.value === numPc){
    messaggio.innerHTML = "Avete scelto lo stesso numero";
  }else if(numUser.value < numPc){
    messaggio.innerHTML = "Vince il Computer!";
  }

  messaggio.classList.remove("d-none");

  console.log(numUser.value);
  console.log(messaggio.innerHTML);

}) 

btnAnnulla.addEventListener("click", function(){
  numUser.value = " ";
  messaggio.classList.add("d-none");
})
