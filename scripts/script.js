let title = document.getElementById("title")
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector('.div')

let Fig = []
console.log(Fig)

// MOSTRAR PRODUCTOS
function mostrarProductos() {
    products.forEach((product) => {
        let card = document.createElement("div")
        showAllProducts.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        let name = document.createElement("h3")
        name.innerText = (product.name)
        let price = document.createElement("p")
        price.innerText = (product.price)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar al carrito")
        card.append(img, name, price, buyButton)

        buyButton.addEventListener("click", function () {
            Fig.push(product)
            alert("Agregaste " + product.name + " al carrito")
            div.innerHTML = ``
            showFig()
        })
    })
}
console.log(Fig)


mostrarProductos()

// MOSTRAR CARRITO
let FigView = document.getElementById("showProductsFig")
let goToFig = document.getElementById("goToFig")
let carrito = document.getElementById("FigList")
const buttonFig = document.getElementById("mostrarCarrito")

let alertFig = document.createElement("h2")
alertFig.setAttribute("class", "alerta")

if (!Fig.lenght) {
    alertFig.innerText = ("El carrito está vacío")
    div.append(alertFig)
}



function showFig() {
    alertFig.remove()

    Fig.forEach((element) => {
        const divFig = document.createElement('li')
        divFig.innerHTML += ` 
        <img src="${element.img}">
        <h3>${element.name}</h3>
        <h3>$${element.price}</h3>
        <button class="eliminar" data-id=${element.id}>X</button>`


        div.appendChild(divFig)
    })

    let eliminarItem = document.querySelector(".eliminar")

    eliminarItem.onclick = (e) => {
        
            const cursoId = e.target.getAttribute(`data-id`)

            //filtro el carrito creando un nuevo array que NO contenga el elemento con el id que indique
            Fig = Fig.filter(curso => curso.id !== cursoId)

            console.log(Fig)
            div.innerHTML = ``
            showFig()
        
    }

    //REDUCE PRECIO TOTAL
    const total = Fig.map((item) => parseInt(item.price)).reduce((FigTotalPrice, currentItemPrice) => FigTotalPrice + currentItemPrice, 0);
    alert("El precio total es de: "+total);

    

    let totalCompra = document.createElement("h4")
    totalCompra.innerText = ("Total: " + total)
    div.append(totalCompra)

    //VACIAR CARRITO
    let deleteFig = document.createElement("button")
    deleteFig.innerText = ("Vaciar carrito")
    div.append(deleteFig)

    deleteFig.onclick = () => {
     
        Fig = []
        div.innerHTML = ``
        console.log(Fig)
    }
}

buttonFig.onclick = () => {
    div.innerHTML = ``    
    showFig()
}

// FILTRAR PRODUCTOS
let buscador = document.getElementById("inputSearch")
let filtrar = document.getElementById("filtrar")

function filtrarPorCat() {
    let verTodo = document.createElement("button")
    verTodo.innerText = ("Ver Todo")
    showProducts.append(verTodo)
    const filteredProducts = products.filter((product) => product.category === buscador.value)
    console.log(filteredProducts)

    filteredProducts.forEach((filter) => {
        let cardFilter = document.createElement("div")
        showAllProducts.append(cardFilter)
        let imgFilter = document.createElement("img")
        imgFilter.setAttribute("src", filter.img)
        let nameFilter = document.createElement("h3")
        nameFilter.innerText = (filter.name)
        let priceFilter = document.createElement("p")
        priceFilter.innerText = (filter.price)
        let buyButtonFilter = document.createElement("button")
        buyButtonFilter.innerText = ("Agregar al carrito")
        cardFilter.append(imgFilter, nameFilter, priceFilter, buyButtonFilter)

    })

    verTodo.onclick = () => {
        showAllProducts.innerHTML = ``
        mostrarProductos()
    }
}

buscador.onchange = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
}

filtrar.onclick = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
}

//TERMINAR COMPRA

function terminarCompra() {
    class Usuario {
        constructor(nombre, direccion, mail) {
            this.nombre = nombre,
                this.direccion = direccion,
                this.mail = mail
        }
    }
    let nombre = document.getElementById("nombre")
    let direccion = document.getElementById("direccion")
    let mail = document.getElementById("email")
    let usuarioCompra = new Usuario(nombre.value, direccion.value, mail.value)
    console.log(usuarioCompra)
    console.log(Fig)
    
}

let terminarPedido = document.getElementById("terminarPedido")

terminarPedido.onclick = (e) => {
    e.preventDefault()
    terminarCompra()
}