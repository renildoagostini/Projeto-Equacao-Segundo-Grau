//cria referencia ao btRaiz e após associa a função ao evento click
var btRaiz = document.getElementById("btRaiz");
btRaiz.addEventListener("click", calcularRaizes);

function calcularRaizes() {
    //cria referencia aos elementos da página
    var inValorA = document.getElementById("inValorA");
    var inValorB = document.getElementById("inValorB");
    var inValorC = document.getElementById("inValorC");
    var outRaizes = document.getElementById("outRaizes");

    //converte os conteúdos dos campos de entrada
    var valorA = Number(inValorA.value);
    var valorB = Number(inValorB.value);
    var valorC = Number(inValorC.value);

    //valida os campos de entrada
    if (valorA == "" || isNaN(valorA)) {
        alert("informe o valor A corretamente");
        inValorA.value = "";
        inValorA.focus();
        return;
    } else
        if (isNaN(valorB)) {
            alert("informe o valor B corretamente");
            inValorB.value = "";
            inValorB.focus();
            return;
        } else
            if (isNaN(valorC)) {
                alert("informe o valor C corretamente");
                inValorC.value = "";
                inValorC.focus();
                return;
            }
    //calculo do delta
    var delta = Math.pow(valorB, 2) - 4 * valorA * valorC;

    //calculo das raize
    if (delta > 0) {
        var x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        var x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
        outRaizes.textContent = `Delta = ${delta}\nX1 = ${x1}\nX2 = ${x2}`;
    } else

        if (delta == 0) {
            var x1 = (-valorB + Math.sqrt(delta)) / 2 * valorA;
            outRaizes.textContent = `Delta = ${delta}\nX1=x2 = ${x1}`;
        } else {
            
            outRaizes.textContent =  "Delta = " + delta + "\nNão existem soluções pertencente ao conjunto  dos números reais";
        }    
}

//cria referencia ao btLimpar e após associa a função ao evento click
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);

function limparCampos(){
    inValorA.value = "";
    inValorB.value = "";
    inValorC.value = "";
    outRaizes.textContent = "";
    inValorA.focus();    
}