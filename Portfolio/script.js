// ===============================
// Typing Effect
// ===============================

const roles = [
    "Computer Science Engineer",
    "AI & ML Enthusiast",
    "Data Scientist",
    "Full Stack Developer",
    "IoT Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".right h2");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(deleteEffect,1800);

    }

}

function deleteEffect(){

    if(charIndex>0){

        typingElement.textContent=roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);

    }

    else{

        roleIndex++;

        if(roleIndex>=roles.length){

            roleIndex=0;

        }

        setTimeout(typeEffect,300);

    }

}

typingElement.textContent="";

typeEffect();


// ===============================
// Navbar Active Link
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(scrollY>=sectionTop-200){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ===============================
// Scroll Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".skill-card,.project-card,.achievement-card,.info-card").forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});