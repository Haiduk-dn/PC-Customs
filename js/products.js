const productsJson = 
` [
    {
        "id": "1",
        "title": "External Custom Parts",
        "image": "ekp.png",
        "description": "External Custom Parts"
    }, 
    {
        "id": "2",
        "title": "Customs Lights",
        "image": "light.png",
        "description": "Customs Lights"
    },
    {
        "id": "3",
        "title": "water cooling system for pc",
        "image": "cool.png",
        "description": "water cooling system for pc"
    },
    {
        "id": "4",
        "title": "External Soundcard",
        "image": "soundcard.png",
        "description": "External Soundcard"
    }
]` ;

function renderProducts(products) {
    const productsContainer = document.querySelector('.products-list');
    let html = '';
    for (const product of products) {
        html += `<div class="product">
        <img src="img/${product.image}" alt="${product.title}">
        <button class="button">${product.description}</button>
    </div>`;
    }
    productsContainer.innerHTML = html;
}

renderProducts(JSON.parse(productsJson));