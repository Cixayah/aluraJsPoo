let listaDeItens = []
const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem()
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor === comprasItem);
    //bolean true or false
    if (checarDuplicado) {
        alert("O item já existe")
    } else {
        //checar repetidos com arrow function (função anônima)
        listaDeItens.push({
            valor: comprasItem
        })
    }
    console.log(listaDeItens)
}