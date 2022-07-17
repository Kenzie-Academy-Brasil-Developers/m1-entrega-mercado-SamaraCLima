const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];
const vitrineFrutas = document.querySelector(".fruits")
const vitrineBebidas = document.querySelector(".drinks")
const vitrineHigiene = document.querySelector(".hygiene")
vitrineFrutas.appendChild(document.createElement("ul"))
vitrineBebidas.appendChild(document.createElement("ul"))
vitrineHigiene.appendChild(document.createElement("ul"))

function produtos (listProdutos) {
    for (let i = 0; i < listProdutos.length; i++) {
        let produto = listProdutos[i]
        let card = createCard (produto)
        let tipoDeProduto = listProdutos[i].category.toLowerCase()
        if (tipoDeProduto == "frutas") {
            vitrineFrutas.querySelector("ul").appendChild(card)
        } else if (tipoDeProduto == "bebidas" ) {
            vitrineBebidas.querySelector("ul").appendChild(card)
        } else if (tipoDeProduto == "higiene") {
            vitrineHigiene.querySelector("ul").append(card)
        }
    }
}
produtos(products)

function createCard (obj) {
    const productCard = document.createElement("li")
    const productImg = document.createElement("img")
    const productMain = document.createElement("main")
    const productTitle = document.createElement("h1")
    const productCategory = document.createElement("h5")
    const productPrice = document.createElement("strong")
    productCard.classList.add("product")
    productImg.classList.add("product-img")
    productMain.classList.add("product-main")
    productTitle.classList.add("product-title")
    productCategory.classList.add("product-category")
    productPrice.classList.add("product-price")
    obj.imageDescription = `${obj.title}, ${obj.category}`
    productImg.setAttribute("alt", `${obj.imageDescription}`)
    productImg.setAttribute("title", `${obj.imageDescription}`)
    if (obj.image == undefined) {
        productImg.src = `img/products/no-img.svg`
    } else {
        productImg.src = obj.image
    }
    productTitle.innerText = obj.title
    productCategory.innerText = obj.category
    productPrice.innerText = `R$ ${obj.price.toFixed(2).replace(".", ",")}`
    productMain.append(productTitle, productCategory, productPrice)
    productCard.append(productImg ,productMain)

    return productCard
}