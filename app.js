
// HERO IMAGE SCROLLING EFFECT
document.querySelector('body').onscroll = function scroll() {
    let scrollToTop = document.scrollingElement.scrollTop;
    let target = document.querySelector('.hero');
    let xvalue = 'center';
    let factor = 0.5;
    let yvalue = scrollToTop * factor;
    target.style.backgroundPosition = xvalue + ' ' + yvalue + 'px';
}


// SETTING DATE
let date = document.querySelector('.footer-date');
let year = new Date();
date.textContent = year.getFullYear();


// HOMEPAGE ACCORDIONS

const accordions = document.getElementsByClassName('accordion');
const arrowDowns = document.getElementsByClassName('arrow-down');
for (const arrow of arrowDowns) {

    arrow.addEventListener('click', () => {

        const bookText = arrow.parentElement.parentElement;
        const accordion = bookText.children[4];

        accordion.classList.toggle('active');
        arrow.classList.toggle('up');
    });
}


// OPENING AND CLOSING MODALS

// elements
const subscribeBtn = document.getElementById('subscribe-submit');

subscribeBtn.addEventListener('click', () => {
    alert('Thanks for hitting subscribe!  Unfortuantely this isn\'t a real organization so you actually didn\'t subscribe to anything.')
});


const archivesLink = document.getElementById('archives-link');
const contactLink = document.getElementById('contact-us-link');
const donateLink = document.getElementById('donate-link');

const body = document.getElementById('body');
const contactModal = document.getElementById('contact-us');
const donateModal = document.getElementById('donate');

// opening modal

// function preventScroll(e) {
//     e.preventDefault();
//     e.stopPropagation();

//     return false;
// }

archivesLink.addEventListener('click', () => {
    alert('Our archives page is currently undergoing maintenance.  Sorry for the inconvenience!');
});

// document.addEventListener('click', (e) => {

//     if (e.target.matches('contactCloseBtn') || !e.target.closest('contactModal')) {
//         body.classList.remove('modal-open');
//         contactModal.style.display = 'none';
//     } else if (e.target.matches('donateCloseBtn') || !e.target.closest('donateModal')) {
//         body.classList.remove('modal-open');
//         donateModal.style.display = 'none';
//     }
// });

// const contactBlocker = document.getElementById('contact-blocker');
// const donateBlocker = document.getElementById('donate-blocker');

const contactCloseBtn = document.getElementById('contact-close-btn');
const donateCloseBtn = document.getElementById('donate-close-btn');

const contactSubmitBtn = document.getElementById('contact-submit');
const donateSubmitBtn = document.getElementById('donate-submit');

contactLink.addEventListener('click', () => {
    body.classList.add('modal-open');
    // body.addEventListener('wheel', preventScroll);
    contactModal.style.display = 'block';
});

donateLink.addEventListener('click', () => {
    body.classList.add('modal-open');
    // body.addEventListener('wheel', preventScroll);
    donateModal.style.display = 'block';
});

// closing modal

contactCloseBtn.addEventListener('click', () => {
    body.classList.remove('modal-open');
    // body.removeEventListener('wheel', preventScroll);
    contactModal.style.display = 'none';
});

// contactBlocker.addEventListener('click', () => {
//     body.removeEventListener('wheel', preventScroll);
//     contactModal.style.display = 'none';
// });

donateCloseBtn.addEventListener('click', () => {
    // body.classList.remove('modal-open');
    body.classList.remove('modal-open');
    donateModal.style.display = 'none';
});

// donateBlocker.addEventListener('click', () => {
//     body.removeEventListener('wheel', preventScroll);
//     donateModal.style.display = 'none';
// });


// submitting
contactSubmitBtn.addEventListener('click', () => {
    alert('Thanks for sending us a message!  Unfortunately nobody got it because this organization doesn\'t actually exist.');
});

donateSubmitBtn.addEventListener('click', () => {
    alert('Thanks for donating!  Unfortunately the money didn\'t go anywhere because this organization doesn\'t actually exist.');
});

// function for closing modal
// function closeModal(e) {
//     if (e === 'contact') {
//         contactModal.classList.remove('modal-visible');
//     } else if (e === 'donate') {
//         donateModal.classList.remove('modal-visible');
//     }
// }

// function clicking opening modal
// function openModal(e) {
//     if (e === 'archives') {
//         alert('Our archives page is currently undergoing maintenance.  Sorry for the inconvenience!');
//     } else if (e === 'contact') {
//         body.classList.add('modal-open');
//         contactModal.classList.add('modal-visible');
//     } else if (e === 'donate') {
//         body.classList.add('modal-open');
//         donateModal.classList.add('modal-visible');
//     }
// }

/* TAB CONTENT */

import composers from './tab_content.js';

const tabContent = document.getElementById('tab-content');
const tabLinks = document.getElementsByClassName('tablinks');

for (let e of tabLinks) {
  e.addEventListener('click', e => {
    let period = e.target.classList[0];
    let section = composers.find(item => item.section === period);

    console.log(section);
    let composerList = section.composers;
    console.log(composerList);
    let composer = composerList.find(item => item.id === e.target.id);

    let image = composer.image;
    let name = composer.name;
    let text = composer.text;
    let works = composer.works;
    let worksUL = [];
    works.forEach(item => {
      let li = `<li>${item}</li>`;
      worksUL.push(li);
    });
    worksUL = worksUL.join();
    worksUL = worksUL.replace(/,/g, '');
    // console.log(worksUL);
    
    tabContent.innerHTML = `<div class="tab-pic-container">
    <img
      class="tab-pic"
      src=${image}
      alt=${name}
    />
  </div>
  <div id="tab-text">
    <h3>${name}</h3>
    <div class="divider"></div>
    <p id="tab-bio">
      ${text}
    </p>
    <p id="tab-list-header">Notable Work(s)</p>
    <ul>
      ${worksUL}
    </ul>
  </div>`;
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active');
    }
    e.target.classList.add('active');
  });
}

// SLIDE MENU

const slideMenu = document.getElementById('slide-menu-icon');
const header = document.querySelector('header');

slideMenu.addEventListener('click', () => {
  header.classList.toggle('slide');
});