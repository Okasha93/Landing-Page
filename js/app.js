/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");

const list = document.getElementById("navbar__list");

const frag = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function makeNavbar() {
// loop for sec
    sections.forEach(sec =>{        
// create "li" & "a"
        let listItems = document.createElement("li");

        let listLinks = document.createElement("a");
// sections attributes
        let secId = sec.getAttribute("id");
    
        let secTitle = sec.getAttribute("data-nav");
// smooth scrolling
        listLinks.classList.add("menu__link");

        listLinks.href = `#${secId}`;

        listLinks.textContent = secTitle;

        listLinks.addEventListener("click", event =>{
            
            event.preventDefault();

            sec.scrollIntoView({
                behavior: "smooth"
            });

        });

        listItems.appendChild(listLinks);

        frag.appendChild(listItems);
    });

    list.appendChild(frag);
};

makeNavbar();



// Add class 'active' to section when near top of viewport
let links = document.querySelectorAll("a.menu__link");

function beActive() {
    // loop for function
    for (const sec of sections) {
        // dimension
        let box = sec.getBoundingClientRect();
        let secTitle = sec.getAttribute("data-nav");
        if(box.top <= 150 && box.bottom >= 150 ){
            // adding active class
            sec.classList.add("your-active-class");
            // adding active link
            links.forEach(link =>{
                if(link.textContent === secTitle) {
                    link.classList.add("active-link")
                } else {
                    link.classList.remove("active-link")

                }
            });
        } else {
            sec.classList.remove("your-active-class");
        };
    };
};
window.addEventListener("scroll", beActive);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


