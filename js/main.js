const root = document.documentElement;
const themeSwitch = document.getElementById('theme-switcher');
const navButton = document.querySelector('#nav-btn');
const navList = document.querySelector('#nav-list');
const cloudEncapsulator = document.getElementById('cloud-encapsulator');
const cloudOne = document.getElementById('cloud');

let cloudState = 'mobile';

function remobilizeCloud() {
    if (root.clientWidth < 768 && cloudState === 'mobile') return;
    if (navButton.classList.contains('open')) navButton.click();
}

function driftCloud(e) {
    const clientX = e.clientX;
    const clientY = e.clientY;  
    
    let halfCloudEncapsulatorHeight = cloudEncapsulator.offsetHeight / 2;
    let halfCloudEncapsulatorWidth = cloudEncapsulator.offsetWidth / 2;

    cloudOne.style.transform = `translate(${clientX - halfCloudEncapsulatorWidth}px, ${clientY - halfCloudEncapsulatorHeight}px)`;
}

function toggleNav() {
    navButton.classList.toggle('open');
    navList.classList.toggle('open');

    if (navList.classList.contains('open')) {
        window.removeEventListener('mousemove', driftCloud);
        cloudState = 'immobile';
    } else {
        window.addEventListener('mousemove', driftCloud);
        cloudState = 'mobile';
    }
}

function toggleTheme(e) {
    console.log(themeSwitch.checked);

    if (e.target.checked) {
        console.log('night')
        root.style.setProperty('--background', 'var(--background-night)');
        root.style.setProperty('--shop-background-item', 'var(--shop-background-item-night)');
        root.style.setProperty('--shop-item-background', 'var(--shop-item-background-night)');
        root.style.setProperty('--shop-item-box-shadow', 'var(--shop-item-box-shadow-night)');
        root.style.setProperty('--shop-item-box-shadow-hover', 'var(--shop-item-box-shadow-hover-night)');

    } else if (!e.target.checked) {
        console.log('light');
        root.style.setProperty('--background', 'var(--background-day)');
        root.style.setProperty('--shop-background-item', 'var(--shop-background-item-day)');
        root.style.setProperty('--shop-item-background', 'var(--shop-item-background-day)');
        root.style.setProperty('--shop-item-box-shadow', 'var(--shop-item-box-shadow-day)');
        root.style.setProperty('--shop-item-box-shadow-hover', 'var(--shop-item-box-shadow-hover-day)');

    }
}

themeSwitch.addEventListener('click', toggleTheme);
navButton.addEventListener('click', toggleNav);
window.addEventListener('mousemove', driftCloud);
window.addEventListener('resize', remobilizeCloud);