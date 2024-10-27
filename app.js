const itensList = document.querySelector('.items-list');

const itens = [
    {name: 'X-Salada', price: '18.00', image: 'salada.jpg'},
    {name: 'X-Bacon', price: '20.00', image: 'bacon.jpg'},
    {name: 'X-Frango', price: '21.00', image: 'frango.jpg'},
    {name: 'X-Filé', price: '21.00', image: 'file.jpg'},

]

document.addEventListener('DOMContentLoaded', () => {
    let output = '';
    itens.forEach(({name, price, image}) => {
        output += `<div class="item-card">
    <img src="assets/${image}" alt="">

    <div class="card-content">
        <h2>${name}</h2>

        <p class="item-price">R$ ${price}</p>

        <div class="item-raiting">
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star-half' ></i>
        </div>

        <div class="item-option">
            <a href="item_detail.html?name=${name}&price=${price}&image=${image}" class="option-details">Ver detalhes</a>
            <div class="icon-option">
                <i class='bx bx-chat' ></i>
            </div>
            <div class="icon-option">
                <i class='bx bx-heart' ></i>  
            </div>
        </div>
    </div>
</div>`
    })


    itensList.innerHTML = output
})