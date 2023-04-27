// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella contiene un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.
let mainElement = document.querySelector("main");
// let wrapper = document.getElementById("wrapper");
let btn = document.getElementById("btn");
let oneClick = false;
console.log(oneClick);
let text;
let randomNum;

btn.addEventListener("click", function () {
  if (oneClick == false) {
    // chiamo la funzione getRandom per generare 16 num
    randomNum = getRandom();
    console.log("i numeri random sono ", randomNum);
    // **********
    function getRandom() {
      let risultato = [];
      for (let c = 0; c < 16; c++) {
        numero = Math.floor(Math.random() * 100 + 1);
        risultato.push(numero);
      }
      return risultato;
    }

    //   ****creo wrapper e box***
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    let numBox = document.querySelector("select").value;
    // console.log(numBox);
    let radiceQ = Math.sqrt(numBox);
    // apro ciclo per generare n box
    for (let c = 1; c <= numBox; c++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `calc(100% / ${radiceQ})`;
      box.style.height = `calc(100% / ${radiceQ})`;
      wrapper.appendChild(box);
      box.textContent = c;
      // aggiungo event per la selezione box da parte del player
      box.addEventListener("click", function () {
        text = parseInt(this.textContent);
        // console.log(text);
        // console.log(randomNum.includes(text));
        if (randomNum.includes(text)) {
          this.classList.add("bomb");
        }
        this.classList.toggle("selected");
      });
    }
    mainElement.appendChild(wrapper);
  }
  oneClick = true;
});
