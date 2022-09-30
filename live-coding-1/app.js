// Escribe tu código aquí.

let myArray = ["insecto", "bootcamp", "mangos", "reptil", "mosca", "escritorio"];

let lista = document.getElementById("ul");

mayorQue("bocina", myArray);
function mayorQue(s, arr){
    for(i=0; i<arr.length; i++){
      //console.log(arr[i].length);
      if (arr[i].length > s.length){
        console.log(arr[i]);
        lista.innerHTML += `<li>${arr[i]}</li>`;
      }//if
    }//for
   
}//mayorQue




