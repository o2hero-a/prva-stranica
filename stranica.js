var varijabla1;
var varijabla2;

function saberiBrojeveIzInputa() {
    pokupiPodatke();
    alert(saberi(varijabla1, varijabla2))
}

function pokupiPodatke() {
    varijabla1 = document.forms["mojaForma"]["mojInput"].value;
    varijabla2 = document.forms["mojaForma"]["mojInput2"].value;        
}

function saberi(broj1, broj2){
    return parseInt(broj1) + parseInt(broj2);
}

function izmijeniTabelu() {
    var mojaTabela = document.getElementById("mojaTabela");
    var noviRed = mojaTabela.insertRow(0);
    var novaCelija1 = noviRed.insertCell(0);
    var novaCelija2 = noviRed.insertCell(1);
    var novaCelija3 = noviRed.insertCell(2);
    novaCelija1.innerHTML = "TEST";
    novaCelija2.innerHTML = "TEST";
    novaCelija3.innerHTML = "TEST";
}

var mojNiz = [3, 4, 5];
var mojObjekat = {
    ime: "Amar",
    zanimanje: "Programer",
    godine: 23
}

class Covjek {
    constructor(ime, zanimanje, godine){
        this.ime = ime;
        this.zanimanje = zanimanje;
        this.godine = godine;
    }

    reciNesto(recenica){
        console.log(recenica);
    }
}

var covjek1 = new Covjek("amar", "Programer", 23);
covjek1.reciNesto("zdravo!")

fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))

$.ajax('https://dummyjson.com/products/1', {
    success: function(podaci) {
        console.log(podaci);
        $('#nekiElement').append(podaci.title);
    }
});