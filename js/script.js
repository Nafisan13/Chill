


// JavaScript for Dropdown Menu Toggle

let dropdown = document.querySelector(".dropdown");
let dropdownContent = document.querySelector(".dropdown-content");

let isMouseIn = false;

// Tampilkan dropdown saat diklik
dropdown.addEventListener("click", () => {
    dropdownContent.style.display = "block";
    setTimeout(() => {
        dropdownContent.style.opacity = "1";
    }, 100);
});

// Saat mouse masuk, tampilkan dropdown
dropdown.addEventListener("mouseover", () => {
    dropdownContent.style.display = "block";
    setTimeout(() => {
        dropdownContent.style.opacity = "1";
    }, 100);
    isMouseIn = true;
});

// Saat mouse keluar, sembunyikan dropdown
dropdown.addEventListener("mouseleave", () => {
    isMouseIn = false;
    setTimeout(() => {
        if (!isMouseIn){
             dropdownContent.style.opacity = "0";
             
             setTimeout(() => {
                 dropdownContent.style.display = "none";
                },100);
            } 
        }, 100);
});


// ketika link pada dropdown di klik, maka dropdown akan hilang
let dropdownLinks = document.querySelectorAll(".dropdown-content a");
dropdownLinks.forEach(link => { 
    link.addEventListener("click", () => {
        dropdownContent.style.opacity = "0";
        setTimeout(() => {
            dropdownContent.style.display = "none";
        }, 100);
    });
});