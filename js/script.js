let listaDeItens = []
const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");
const ultItensComprados = document.getElementById("itens-comprados");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem();
    mostrarItem();
    itensInput.focus();
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
    itensInput.value = ''
}
function mostrarItem() { //ForEach manipular obj dentro do array
    ulItens.innerHTML = ''
    ultItensComprados.innerHTML = ''
    listaDeItens.forEach((elemento, index) => {
        if (elemento.checar) {
            ultItensComprados.innerHTML +=
                `<li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
            <div>
                <input type="checkbox" checked class="is-clickable" />
                <input type="text" class="is-size-5" value="${elemento.valor}"> </input>
            </div>
            <div>
                <i class="fa-solid fa-trash is-clickable deletar"></i>
            </div>
        </li>
            `
        } else {
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
        }
    })

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');
    //Seleciona input respectivo
    inputsCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = (evento.target.parentElement
                .parentElement.getAttribute('data-value'));
            listaDeItens[valorDoElemento].checar = evento.target.checked
            mostrarItem();
        })
    })
}