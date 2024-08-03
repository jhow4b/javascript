const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Esporte",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxo",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Esporte",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const showProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map((product) => 
    `
    <div class="product">
        <img src=${product.img} alt="">
        <span class="productName">${product.name}</span>
        <span class="producPrice">R$ ${product.price}</span>
    </div>
    `
    ).join("")
}

searchInput.addEventListener("keyup", (e) => {
   const value = e.target.value.toLowerCase()

   if(value) {
      showProducts(data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1))
   } else {
    showProducts(data)
   }
})

const showCategories = () => {
  const allCats = data.map(item=>item.cat)
  const categories = [
    "Todos",
    ...allCats.filter((item, i)=> {
      return allCats.indexOf(item) === i
    })
  ]

  categoriesContainer.innerHTML = categories.map((cat) => 
    `
    <div class="cat">${cat}</div>
    `
  ).join("")

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent
    selectedCat === "Todos" ? showProducts(data) : showProducts(data.filter((item) => item.cat === selectedCat))
  })
}

const setPrices = () => {
  const priceList = data.map((item) => item.price)
  const minPrice = Math.min(...priceList)
  const maxPrice = Math.max(...priceList)

  priceRange.min = minPrice
  priceRange.max = maxPrice
  priceRange.value = maxPrice
  priceValue.textContent = `R$ ${maxPrice}`

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = `R$ ${e.target.value}`
    showProducts(data.filter((item) => item.price <= e.target.value))
  })
}

setPrices()
showCategories( )
showProducts(data)