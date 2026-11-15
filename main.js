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
        valor:Number(valor),
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
const ul = document.querySelector('.lista')
  ul.innerHTML = ''
lista.forEach((item,index) => {
 const li = document.createElement('li')
 const btn = document.createElement('button')
    li.innerText =`${item.description} - ${item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} - ${item.categoria} - ${new Date(item.data).toLocaleDateString('pt-BR',{timeZone:'UTC'})};`
    btn.innerText = 'Remover'
    btn.classList.add('btn-remover')
    btn.addEventListener('click', () => {
      lista.splice(index,1)
      renderList()
    })
    li.append(btn)
    ul.append(li)
});

}

