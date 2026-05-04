const items = [
    {
        id: 1,
        pname: "mobile",
        description: "This is the description for Item 1."
    },
    {
        id: 2,
        pname: "Airbuds",
        description: "This is the description for Item 2."

    },
    {
        id: 3,
        pname: "Headphones",
        description: "This is the description for Item 3."
    },

];




function displayItems() {


    const itemGrid = document.querySelector('.itemGrid');
    itemGrid.innerHTML = '';

    if (items.length === 0) {

    } else {
        items.forEach(function (item, index) {

            const itemCard = document.createElement('div');
            itemCard.classList.add('itemCard');
            itemCard.innerHTML = `
                <h3 class="item-name">${item.pname}</h3>
                <p class="item-description">${item.description}</p>
                <button class="add-btn" onclick="addCart(${index})">Add to Cart</button>
            `;
            itemGrid.appendChild(itemCard);

        });
    }
}

displayItems();


const cart = [];

function addCart(index) {
    cart.push(items[index]);
    renderCart();

    console.log(cart);

}

function renderCart() {
    const cardGrid = document.querySelector(".cardGrid");
    cardGrid.innerHTML = "";

    if (cart.length === 0) {
        cardGrid.innerHTML = "<p>Cart is empty</p>";
        return;
    }

    cart.forEach(function (item, index) {

        const cardCard = document.createElement("div");
        cardCard.classList.add("card-card");

        cardCard.innerHTML = `
            <h3 class="cart-item">${item.pname}</h3>
            <p class="cart-description">${item.description}</p>
            <button class="delete-btn" onclick="removeCart(${index})">X</button>
        `;


        cardGrid.appendChild(cardCard);
    });


}







function removeCart(index) {
    cart.splice(index, 1);
    renderCart();
}
