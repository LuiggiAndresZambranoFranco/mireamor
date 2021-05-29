function horaSegundo() {
    var seg = new Date();
    seg = "La hora actual es segundos es: " + seg.getHours() * 3600
        + " seg";
    document.getElementById("trabajo").innerHTML = seg;
    text = alert("El resultado de: " + " " + seg);

}

function area() {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = "El area de un triangulo es " + (base * altura) / 2
    document.getElementById("trabajo").innerHTML = area;
    text = alert("El area de un triangulo es" + " " + area);
}

function RaizImpar() {
    var impar = document.getElementById("impar").value; var raíz = Math.sqrt(impar);
    var conDecimal = "La raíz cuadrada del número ingresado es " + raíz.toFixed(2);
    document.getElementById("trabajo").innerHTML = conDecimal;
    text = alert("el resultado de la resta es" + " " + conDecimal);

}

function Cadena() {
    var longitud = document.getElementById("cadena").value.length;
    text = "La longitud de la cadena es de " + longitud + " caracteres";
    document.getElementById("trabajo").innerHTML = text;
    text = alert("el resultado de la resta es" + " " + text);
}

function Semana() {
    const array1 = [' Lunes', ' Martes', ' Miércoles', ' Jueves', 'Viernes'];
    const array2 = [' Sabado', ' Domingo'];
    const semana = array1.concat(array2);
    document.getElementById("trabajo").innerHTML = semana;
    text = alert("el resultado concatenación es:" + " " + semana);

}

function Version() {
    text = ("Versión del navegador: " + navigator.appVersion);
    document.getElementById("trabajo").innerHTML = text;
    text = alert("el resultado de la resta es" + " " + text);

}

function Ancho() {
    text = "La resolución de tu pantalla es: " + screen.width + "de ancho x " + screen.height + " de alto";
    document.getElementById("trabajo").innerHTML = text;
    text = alert("el resultado de la resta es" + " " + text);
}

function Imprimir() {
    window.print();
}