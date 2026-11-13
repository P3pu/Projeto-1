const form = document.querySelector(".form")

const lista = []

form.addEventListener('submit',(e)=>{
    e.preventDefault() // impede o recarregamento da pagina

    const description = form.Description.value
    const valor = form.Valor.value
    const categoria = form.Categoria.value
    const data = form.data.value

    if(description === "" || valor === "" || categoria === "" || data === ""){
        return console.error("inputs vazios");
    } 

    if(typeof(description) !== 'string' || valor <= 0) return console.error("Valores Invalidaos")

    lista.push({
        description:description,
        valor:valor,
        categoria:categoria,
        data:data
    })

    form.Description.value = '';
    form.Valor.value = '';
    form.Categoria.value = '';
    form.data.value = '';

    renderList()
})

const renderList = () => {
// desenvolver uma lista na tela
}

