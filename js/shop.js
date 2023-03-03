const COLOR_RADIOS = document.querySelectorAll('input[type="radio"]');

function switchItemColor(e) {
    const ITEM_COLOR_REGEX = /\[(.*?)\]/g;
    
    const radioValue = e.target.value;
    const srcColorReplacement = `[${radioValue}]`;
    const closestItemImage = e.target.closest('.item-card').querySelector('.item-img');
    const currentItemColor = closestItemImage.src.match(ITEM_COLOR_REGEX)[0].slice(1, -1);

    if (radioValue === currentItemColor) return; 
    
    let newImageSource = closestItemImage.getAttribute('src').replaceAll(ITEM_COLOR_REGEX, srcColorReplacement);
    
    closestItemImage.setAttribute('src', newImageSource);
}

COLOR_RADIOS.forEach(radio => {
    radio.addEventListener('click', switchItemColor);
});