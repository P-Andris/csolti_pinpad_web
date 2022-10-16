window.addEventListener("load", init);

function ID(e) {return document.getElementById(e);}
function $e(e) {return document.querySelector(e);}
function $a(e) {return document.querySelectorAll(e);}

const gombok = [];

// MAIN:
function init() {
    console.log("Szia");

    gombokHozzaadasa();
}

function gombokHozzaadasa() {
    for(let i = 0; i < 10; i++) {
        gombok[i] = `<button id="b${i}" type="button">${i}</button>`;
    }

    randomGombElrendezes();

    for(let i = 0; i < gombok.length; i++) {
        $e("#pin-pad").innerHTML += gombok[i];
    }
}

function randomGombElrendezes() {
    gombok.sort(function(a, b) {
        return 0.5 - Math.random();
    });
}