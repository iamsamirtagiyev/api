

// const updateId = document.querySelector('.upId')
// const updateName = document.querySelector('.upName')
// const updatePrice = document.querySelector('.upPrice')
// const updateStock = document.querySelector('.upStock')
const updateBtn = document.querySelector('button')
let id = new URLSearchParams(window.location.search).get("id")
const table = document.querySelector('table')



fetch(`https://northwind.vercel.app/api/products/${id}`).then(response => response.json()).then(data => {
    table.innerHTML += `
    <tr>
          <td>${data.id}</td>
          <td><input type="text" class="upName" value="${data.name}"></td>
          <td><input type="text" class="upPrice" value="${data.unitPrice}"></td>
          <td><input type="text" class="upStock" value="${data.unitsInStock}"></td>
    </tr>`
})



updateBtn.onclick = () => {
    axios.patch(`https://northwind.vercel.app/api/products/${id}`, {
        unitPrice: document.querySelector('.upPrice').value,
        name: document.querySelector('.upName').value,
        unitsInStock: document.querySelector('.upStock').value
    }).then(res=>{ window.location = 'index.html'})
}