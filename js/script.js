document.getElementById('player').addEventListener("mouseover", sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 60;
function sumarPuntos() {
    puntos++
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
    randNum = Math.round(Math.random() * 500);
    randNum2 = Math.round(Math.random() * 500);
    document.getElementById("player").style.marginTop =randNum + "px";
    document.getElementById("player").style.marginLeft =randNum2 + "px";
    if(puntos == necesarios) {
        alert("You Won!")
        tiempo = 60
        puntos = 0
    }
}


function restarTiempo() {
    tiempo--
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
    if(tiempo == 0) {
        alert("You Lost!");
        tiempo = 60
        puntos = 0;
    }

}
setInterval(restarTiempo, 1000)
