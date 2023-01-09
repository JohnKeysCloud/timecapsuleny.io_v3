const navButton = document.querySelector('#nav-btn');
const navList = document.querySelector('#nav-list');
const COLOR_RADIOS = document.querySelectorAll('input[type="radio"]');
const cloudOne = document.getElementById('cloud');

function driftCloud(e) {
    const x = e.clientX;
    const y = e.clientY;

    cloudOne.style.transform = `translate(${x - 500}px, ${y - 500}px)`;
}

function hideCloudOne() {
    cloudOne.classList.toggle('hide-cloud');
    cloudOne.addEventListener('animationend', () => {
        cloudOne.classList.toggle('hide-cloud');
        cloudOne.style.display = 'none';
        window.removeEventListener('mousemove', driftCloud);
    });

}

function showCloudOne() {
    console.log(1)
    cloudOne.style.display = 'block';
    cloudOne.style.animation = 'none';
    window.addEventListener('mousemove', driftCloud);

    cloudOne.classList.toggle('show-cloud');
    cloudOne.addEventListener('animationend', () => {
        cloudOne.classList.toggle('show-cloud');
        cloudOne.style.animation = 'cloudDriftOne 2s ease-in-out linear';
    });
}

function toggleNav() {
    navButton.classList.toggle('open');
    navList.classList.toggle('open');

    console.log(navList.classList.contains('open'));
    if (navList.classList.contains('open')) {
        hideCloudOne();
    } else {
        showCloudOne();
    }
}

function setTempDimensions(e) {
    let targetedItemContainer = e.target.closest('.item-card').firstElementChild;
    let width = targetedItemContainer.offsetWidth;

    targetedItemContainer.style.height = `${width}px`;
    targetedItemContainer.style.width = `${width}px`;
}

function revertDimensions(e) {
    let targetedItemContainer = e.target.closest('.item-card').firstElementChild;

    targetedItemContainer.style.height = 'auto';
    targetedItemContainer.style.width = 'auto'; 
}

function switchItemColor(e) {
    let itemColorRegEx = /(?<=\[)(.*?)(?=\])/g;
    let radioValue = e.target.value;
    let closestVideoElement = e.target.closest('.item-card').querySelector('.item-source').parentElement;
    let closestItemSources = e.target.closest('.item-card').querySelectorAll('.item-source');
    let currentItemColor = closestItemSources[0].src.match(itemColorRegEx)[0];

    if (radioValue === currentItemColor) return;
    closestVideoElement.pause();
    setTempDimensions(e);
    closestItemSources.forEach(source => {
        let newSource = source.getAttribute('src').replaceAll(itemColorRegEx, radioValue);
        source.setAttribute('src', newSource);
    });
    closestVideoElement.load();
    closestVideoElement.play();

    closestVideoElement.addEventListener('loadeddata', () => {
        if (closestVideoElement.readyState >= 2) {
            revertDimensions(e);
        }
    });
}

COLOR_RADIOS.forEach(radio => {
    radio.addEventListener('click', switchItemColor);
})

navButton.addEventListener('click', toggleNav);
window.addEventListener('mousemove', driftCloud);