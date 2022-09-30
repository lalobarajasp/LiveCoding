// API
//const API_ENDPOINT = 'https://yesno.wtf/api';
let div = document.getElementById("answer");



let data = [];
const key = "info";
JSON.stringify(data);
localStorage.setItem(key, JSON.stringify(data));

function fetchAnswer() {
    fetch("https://yesno.wtf/api")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        console.log((typeof(data)));
        let div = document.getElementById("answer");
        if (localStorage.getItem(key)){
        let tmp = JSON.parse(localStorage.getItem(key));
        div.innerHTML="";
        tmp.forEach(elemento => {
            div.innerHTML += 
            `<h3>${elemento.answer}</h3>
                <h3>${elemento.forced}</h3>
                <img src="${elemento.image}" alt=""></img>`;
        });//data.forEach
    };
    div.innerHTML = data.tmp;
    }).catch( (error) => {   
        console.error("Problema con el formato de la respuesta" + error);
    }).catch((error) =>{ 
    console.log("Error en la solicitud" + error);
}); 
    
};



 let btnAnswer = document.getElementById("button");
 btnAnswer.addEventListener("click", function (e){
     e.preventDefault;
     fetchAnswer();
 });




/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
