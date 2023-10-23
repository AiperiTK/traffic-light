function changeLight() {
    const redLight = document.querySelector(".red");
    const yellowLight = document.querySelector(".yellow");
    const greenLight = document.querySelector(".green");

    setTimeout(function() {
        redLight.style.backgroundColor = "red";
        yellowLight.style.backgroundColor = " rgb(196, 188, 188)";
        greenLight.style.backgroundColor = " rgb(196, 188, 188)";


    }, 2000);
    setTimeout(function() {
        redLight.style.backgroundColor = "rgb(196, 188, 188)";
        yellowLight.style.backgroundColor = "yellow";
        greenLight.style.backgroundColor = " rgb(196, 188, 188)";
    }, 4000);
    setTimeout(function() {
        redLight.style.backgroundColor = "rgb(196, 188, 188)";
        yellowLight.style.backgroundColor = "rgb(196, 188, 188)";
        greenLight.style.backgroundColor = "green";
    }, 6000);
    setTimeout(changeLight, 8000)

}
changeLight();

