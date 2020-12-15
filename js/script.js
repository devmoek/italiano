// const
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

// eventListeners
openModalButtons.forEach(button => {
   button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
       openModal(modal)
   })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal (modal)
    })
})

// Functions
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal (modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// Slider
let counter = 1;

setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);

// submenu
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}

function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

// Close Submenu From Anywhere
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

// Event Listeners
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
    }
    item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

// dropup button menu 
let icon = document.querySelector('.dropbtn');
let dropupContent = document.querySelector('.dropup__content');

icon.onclick = function () {

   if (icon.classList.contains('fa-chevron-down')) {
             icon.classList.remove('fa-chevron-down');      
             dropupContent.classList.remove('show');
             icon.classList.toggle('fa-chevron-up');
            
             dropupContent.classList.toggle('dropup__content');    
} else {
        icon.classList.remove('fa-chevron-up');
    
        dropupContent.classList.remove('dropup__content');
   }

  
   icon.classList.toggle('fa-chevron-down');
   dropupContent.classList.toggle('show');
}
