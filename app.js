let slider = document.querySelector('.slider');
let pageViews = document.querySelector('.pageviews')
let toggleButton = document.querySelector('.checkbox');
let priceNumber = document.querySelector('.price-number');

let sliderValue = slider.value;

// console.log(sliderValue)
// console.log(slider, pageViews, toggleButton, priceNumber)

slider.addEventListener('mouseout', priceValue())

console.log('something')

function priceValue(){
    if (sliderValue <= 4){
        priceNumber.write('8$')
        pageViews.write('10k PAGEVIEWS')
        console.log('Menor que 4')
    } 
    else if(sliderValue > 4 && sliderValue <= 8){
        priceNumber.innerHTML = '12$'
        pageViews.innerHTML = '50k PAGEVIEWS'
    }
    else if(sliderValue > 8 && sliderValue <= 12){
        priceNumber.innerHTML = '16$'
        pageViews.innerHTML = '100k PAGEVIEWS'
    } 
    else if(sliderValue > 12 && sliderValue <= 14){
        priceNumber.innerHTML = '24$'
        pageViews.innerHTML = '500k PAGEVIEWS'
    }
    else if(sliderValue > 14){
        priceNumber.innerHTML = '36$'
        pageViews.innerHTML = '1M PAGEVIEWS'
    }
}