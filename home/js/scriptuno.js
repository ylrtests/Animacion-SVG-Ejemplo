var a = document.getElementById("circleFirst");
a.style.visibility = "hidden";

var clasesFondos = ["fondoUno","fondoDos","fondoTres","fondoCuatro","fondoCinco","fondoSeis"]
// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener("load", function () {

    // get the inner DOM of circleSecond.svg
    var svgDoc = a.contentDocument;

    //get all the import properties
    var arrayFondos = getArrayFondos(svgDoc);
    var arrayPartes = getArrayPartes(svgDoc);
    var casa = svgDoc.getElementById("casa")

    setTimeout(() => {
        a.style.visibility = "visible";
        casa.style.opacity = 1
        let i = 0;

        setInterval(() => {
            if (i < arrayPartes.length) {
                console.log(i)
                arrayPartes[i].style.opacity = 1
                i++;
            }
            else {
                clearInterval()
            }
        }, 500);

    }, 1000);


    for (let i = 0; i < arrayPartes.length; i++) {
        arrayPartes[i].addEventListener("mouseover", function() {
            arrayFondos[i].classList.remove("st5");
            arrayFondos[i].classList.add(clasesFondos[i]);
        });
        arrayPartes[i].addEventListener("mouseout", function() {
            console.log("me fui  "+ i)
            arrayFondos[i].classList.remove(clasesFondos[i]);
            arrayFondos[i].classList.add("st5");
        });
      }
    
}, false);


function getArrayFondos(svgDoc) {
    let arrayFondos = [];

    arrayFondos.push(svgDoc.getElementById("fondoUno"));
    arrayFondos.push(svgDoc.getElementById("fondoDos"));
    arrayFondos.push(svgDoc.getElementById("fondoTres"));
    arrayFondos.push(svgDoc.getElementById("fondoCuatro"));
    arrayFondos.push(svgDoc.getElementById("fondoCinco"));
    arrayFondos.push(svgDoc.getElementById("fondoSeis"));

    return (arrayFondos)
}

function getArrayPartes(svgDoc) {
    let arrayPartes = [];

    arrayPartes.push(svgDoc.getElementById("parteUno"));
    arrayPartes.push(svgDoc.getElementById("parteDos"));
    arrayPartes.push(svgDoc.getElementById("parteTres"));
    arrayPartes.push(svgDoc.getElementById("parteCuatro"));
    arrayPartes.push(svgDoc.getElementById("parteCinco"));
    arrayPartes.push(svgDoc.getElementById("parteSeis"));

    return (arrayPartes)
}

function reloadPage(){
    location.reload(); 
}