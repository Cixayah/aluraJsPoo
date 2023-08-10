let listaDeItens = []
const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");
form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem();
    mostrarItem();
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) =>
        elemento.valor.toUpperCase() === comprasItem.toUpperCase());
    //bolean true or false
    if (checarDuplicado) {
        alert("O item já existe")
    } else {
        //checar repetidos com arrow function (função anônima)
        listaDeItens.push({
            valor: comprasItem,
            checar: false
        })
    }
    console.log(listaDeItens)
}
function mostrarItem() { //ForEach manipular obj dentro do array
    ulItens.innerHTML = ''
    listaDeItens.forEach((elemento, index) => {
        ulItens.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-beetween" data-value="${index}">
            <div>
                <input type="checkbox" class="is-clickable"/>
                <input type="text" class="is-size-5" value="${elemento.valor}"></input>
            </div>
            <div>
                <i class="fa-solid fa-trash is-clickable deletar"></i>
            </div>
        </li>            
        `
    })

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');
    //Seleciona input respectivo
    inputsCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = (evento.target.parentElement
                .parentElement.getAttribute('data-value'));
            listaDeItens[valorDoElemento].checar = evento.target.checked
            console.log(listaDeItens[valorDoElemento].checar);
        })
    })
}