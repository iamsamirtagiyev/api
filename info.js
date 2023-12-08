const wrapper = document.querySelector('.wrapper')
let id = new URLSearchParams(window.location.search).get("id")

fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(response => response.json())
.then(data =>{
    console.log(data);
    wrapper.innerHTML += `
    <h1>${data.name}</h1>
    <h2>${data.unitPrice}</h2>
    <h3>${data.unitsInStock}</h3>
    <h4>${data.quantityPerUnit}</h4>`
})