const items = [
    { id: 1, category: 'Coffee', name: 'Irish coffee', description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk', price: '$7.00' },
    { id: 2, category: 'Coffee', name: 'Kahlua coffee', description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk', price: '$7.00' },
    { id: 3, category: 'Coffee', name: 'Honey raf', description: 'Espresso with frothed milk, cream and aromatic honey', price: '$5.50' },
    { id: 4, category: 'Coffee', name: 'Ice cappuccino', description: 'Cappuccino with soft thick foam in summer version with ice', price: '$5.00' },
    { id: 5, category: 'Coffee', name: 'Espresso', description: 'Classic black coffee', price: '$4.50' },
    { id: 6, category: 'Coffee', name: 'Latte', description: 'Espresso coffee with the addition of steamed milk and dense milk foam', price: '$5.50' },
    { id: 7, category: 'Coffee', name: 'Latte macchiato', description: 'Espresso with frothed milk and chocolate', price: '$5.50' },
    { id: 8, category: 'Coffee', name: 'Coffee with cognac', description: 'Fragrant black coffee with cognac and whipped cream', price: '$6.50' },
    { id: 9, category: 'Tea', name: 'Moroccan', description: 'Fragrant black tea with tangerine, cinnamon, honey, lemon and mint', price: '$4.50' },
    { id: 10, category: 'Tea', name: 'Ginger', description: 'Original black tea with fresh ginger, lemon and honey', price: '$5.00' },
    { id: 11, category: 'Tea', name: 'Cranberry', description: 'Invigorating black tea with cranberry and honey', price: '$5.00' },
    { id: 12, category: 'Tea', name: 'Sea buckthorn', description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon', price: '$5.50' },
    { id: 13, category: 'Dessert', name: 'Marble cheesecake', description: 'Philadelphia cheese with lemon zest on sponge cake and red currant jam', price: '$3.50' },
    { id: 14, category: 'Dessert', name: 'Red velvet', description: 'Layer cake with cream cheese frosting', price: '$4.00' },
    { id: 15, category: 'Dessert', name: 'Cheesecakes', description: 'Soft cottage cheese pancakes with sour cream and berries', price: '$4.50' },
    { id: 16, category: 'Dessert', name: 'Creme brulee', description: 'Delicate creamy dessert in a caramel basket with wild berries', price: '$4.00' },
    { id: 17, category: 'Dessert', name: 'Pancakes', description: 'Tender pancakes with strawberry jam and fresh strawberries', price: '$4.50' },
    { id: 18, category: 'Dessert', name: 'Honey cake', description: 'Classic honey cake with delicate custard', price: '$4.50' },
    { id: 19, category: 'Dessert', name: 'Chocolate cake', description: 'Cake with hot chocolate filling and nuts with dried apricots', price: '$5.50' },
    { id: 20, category: 'Dessert', name: 'Black forest', description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse', price: '$6.50' }
];

const divCard = document.querySelector('.level');
const btnCoffee = document.querySelector('.btn-coffee');
const btnTea = document.querySelector('.btn-tea');
const divModal = document.querySelector('.modal');

function createCard(item){
    const card = document.createElement('div');
    card.className = 'content';
    
    card.innerHTML = `
    <img src="./picture/grid/g-1.svg" alt="">
    <div class = 'info'>
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <p class = 'price'>${item.price}</p>
    </div>
    `;
    const preview = document.createElement('div');
    preview.className = 'preview';
    preview.dataset.id = item.id;
    preview.appendChild(card);

    return preview;
}

function showCard(category){
    divCard.innerHTML = '';
    const check = items.filter((el) => el.category === category);
    check.forEach(el => divCard.appendChild(createCard(el)));
};


btnCoffee.addEventListener('click', () => showCard('Coffee'));
btnTea.addEventListener('click', () => showCard('Tea'));

divCard.addEventListener('click', (event) => {
    const card = event.target.closest('.preview');
    if (!card) return;

    const id = Number(card.dataset.id);
    const item = items.find((el) => el.id === id);
    if(!item) return;

    divModal.innerHTML = `
    <img src="./picture/grid/g-1.svg" alt="">
    <div>
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    </div>
    <p>${item.price}</p>
    <button class='close'>Close</button>
    `;

    divModal.style.display = 'block';

})

divModal.addEventListener('click', (event) => {
    if(event.target.classList.contains('close')) {
        divModal.style.display = 'none';
    }
})




