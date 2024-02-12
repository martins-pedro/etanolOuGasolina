function calcular() {
    let priceEtanol = document.getElementById("priceEtanol").value;
    let priceGasolina = document.getElementById("priceGasolina").value;
    let resP = document.querySelector(".resP")

    let calc = priceEtanol / priceGasolina


    if (calc < 0.7) {
        resP.innerHTML = "Hoje compensa ir de <strong>Etanol</strong>"
    } else {
        resP.innerHTML = "Hoje compensa ir de <strong>Gasolina</strong>"
    }
}