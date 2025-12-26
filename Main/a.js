const sliders = [
{src: './picture/coffee-slider-1.svg', h3: 'S’mores Frappuccino', description: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped withoat milk.', p_price: '$5.50', con_1_color: '#665F55', con_2_color: '#C1B6AD', con_3_color: '#C1B6AD'},
{src: './picture/coffee-slider-2.svg', h3: 'Caramel Macchiato', description: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.', p_price: '$5.00', con_2_color: '#665F55', con_1_color: '#C1B6AD', con_3_color: '#C1B6AD'},
{src: './picture/coffee-slider-3.svg', h3: 'Ice coffee', description: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.', p_price: '$4.50', con_3_color: '#665F55', con_2_color: '#C1B6AD', con_1_color: '#C1B6AD'},
]

const divSlider = document.querySelector('.fav-cof-info');
const cupImg = document.querySelector('.cup-slider');
const titleEl = document.querySelector('.fav-cof-content h3');
const descEl = document.querySelector('.fav-cof-content p');
const priceEl = document.querySelector('.fav-cof-content .price');

const rightArrow = document.querySelector('.arrow.right');
const leftArrow = document.querySelector('.arrow.left');

const con1 = document.querySelector('.favor-coffee .fav-cof-info .fav-cof-content .slider-control .con-1');
const con2 = document.querySelector('.favor-coffee .fav-cof-info .fav-cof-content .slider-control .con-2');
const con3 = document.querySelector('.favor-coffee .fav-cof-info .fav-cof-content .slider-control .con-3');

let i = 0;

rightArrow.addEventListener('click', () =>{
    i++
    if(i >= sliders.length) i = 0;
    createElem();
})

leftArrow.addEventListener('click', () => {
    i--
    if(i < 0) i = sliders.length - 1;
    createElem();
})


function createElem() {
    const slide = sliders[i];
    cupImg.src = slide.src;
    cupImg.alt = slide.h3;
    titleEl.textContent = slide.h3;
    descEl.textContent = slide.description;
    priceEl.textContent = slide.p_price;
    con1.style.backgroundColor = slide.con_1_color;
    con2.style.backgroundColor = slide.con_2_color;
    con3.style.backgroundColor = slide.con_3_color;
    
}


// rightArrow.addEventListener('click', () => {
//     i++
//     if(i >= sliders.length){
//     const slide = sliders[i];
//     cupImg.src = slide.src;
//     cupImg.alt = slide.h3;
//     titleEl.textContent = slide.h3;
//     descEl.textContent = slide.description;
//     priceEl.textContent = slide.p_price;
//     } else{
//         i = 0;
//     const slide = sliders[i];
//     cupImg.src = slide.src;
//     cupImg.alt = slide.h3;
//     titleEl.textContent = slide.h3;
//     descEl.textContent = slide.description;
//     priceEl.textContent = slide.p_price;
//     }
// });

// leftArrow.addEventListener('click', () => {
//     i--
//     if(i < 0){
//     const slide = sliders[i];
//     cupImg.src = slide.src;
//     cupImg.alt = slide.h3;
//     titleEl.textContent = slide.h3;
//     descEl.textContent = slide.description;
//     priceEl.textContent = slide.p_price;
//     } else{
//         i = sliders.length - 1;
//     const slide = sliders[i];
//     cupImg.src = slide.src;
//     cupImg.alt = slide.h3;
//     titleEl.textContent = slide.h3;
//     descEl.textContent = slide.description;
//     priceEl.textContent = slide.p_price;
//     }
// })