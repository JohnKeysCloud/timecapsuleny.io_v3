const COLOR_RADIOS = document.querySelectorAll('input[type="radio"]');

function switchItemColor(e) {
    let radioValue = e.target.value;
    let itemColorRegEx = /\[(.*?)\]/g;
    
    let closestItemImage = e.target.closest('.item-card').querySelector('.item-img');
    let currentItemColor = closestItemImage.src.match(itemColorRegEx)[0];

    if (radioValue === currentItemColor) return; 
    
    let newImageSource = closestItemImage.getAttribute('src').replaceAll(itemColorRegEx, `[${radioValue}]`);
    
    closestItemImage.setAttribute('src', newImageSource);
}

COLOR_RADIOS.forEach(radio => {
    radio.addEventListener('click', switchItemColor);
});


