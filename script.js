const input = document.querySelector('input')
fetch('https://northwind.vercel.app/api/products').then(response => response.json()).then(data => {
    data.forEach(item => {
        document.querySelector('table').innerHTML += `
    <tr class="product" onclick="myFunc(${item.id})"}>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.unitPrice}</td>
        <td>${item.unitsInStock}</td>
        <td><button>Delete</button>
        <button><a href="update.html?id=${item.id}">Update</a></button>
        </td>
    </tr>`

    });

    input.addEventListener('input', () => {
        let search = input.value.toUpperCase()
        document.querySelector('table').innerHTML = `
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>`
        data.forEach(item => {
            if (item.name.toUpperCase().includes(search)) {
                document.querySelector('table').innerHTML += `
        <tr class="product">
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.unitPrice}</td>
            <td>${item.unitsInStock}</td>
        </tr>
        `
           }
        })
    })
})

function myFunc(id){
    window.location = `info.html?id=${id}`
}




