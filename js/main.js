const root = document.documentElement;
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

navButton.addEventListener('click', toggleNav);
window.addEventListener('mousemove', driftCloud);
window.addEventListener('resize', remobilizeCloud);