//Funcoes
function populateList(){
    //atribuicao do construct array, que inicializar o array com 100 posicoes
    //e usa uma funcao map, que roda para cada elemento
    const data = Array.from({length: 100}).map((_,i) => `<div class="item"> Item ${(i + 1)}</div>`)

    const lista = document.querySelector('#paginate .list')
    console.log(lista)
    lista.innerHTML = data.join("")
}

//run
populateList()
