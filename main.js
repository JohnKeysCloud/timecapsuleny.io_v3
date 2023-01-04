const colorRadios = document.querySelectorAll('input[type="radio"]');
console.log(colorRadios);

function switchItemColor(e) {
    let radioItemValue = e.target.value; 

    let closestItemCard = (e.target.closest('.item-card'));
    let closestItemSource = closestItemCard.querySelector('.item-source');
    let closestVideoElement = closestItemSource.parentElement;

    let colorRegEx = /(?<=\_)(.*?)(?=\.)/;
    let newVideoSource = closestItemSource.src.replace(colorRegEx, radioItemValue);
    
    closestVideoElement.pause()
    closestItemSource.src = newVideoSource
    closestVideoElement.load()
    closestVideoElement.play();
}

colorRadios.forEach(radio => {
    radio.addEventListener('click', switchItemColor)
})