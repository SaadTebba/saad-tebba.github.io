// TODO ========================= Sticky Header ==============================


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});


// TODO ========================= Scroll To Top Button ==============================


const scrollToTopButton = document.getElementById("backToTopBtn");

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


window.addEventListener("scroll", () => {

    if (window.scrollY > window.innerHeight / 2) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
    let scrollPos = window.scrollY + window.innerHeight / 2;

    navButtons.forEach(btn => btn.classList.remove("active"));

    for (let i = 0; i < sectionOffsets.length - 1; i++) {
        if (scrollPos >= sectionOffsets[i] - 5 && scrollPos < sectionOffsets[i + 1] - 5) {
            if (navButtons[i]) navButtons[i].classList.add("active");
        }
    }

});



// TODO ========================= Navbar items style ==============================


const navButtons = document.querySelectorAll(".ul_list_navbar");
const sections = document.querySelectorAll("section, #home");

function updateActiveNav() {
    const scrollPos = window.scrollY + 80;

    navButtons.forEach(btn => btn.classList.remove("active"));

    sections.forEach((sec, index) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
            if (navButtons[index]) navButtons[index].classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);


// TODO ========================= Send Mail ==============================


function sendMail() {
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_e83sk0f", "template_j8fxfah", parms)
        .then(res => {
            alert("Success! " + res.status);
        })
        .catch(err => {
            alert("Error: " + err.text);
        });
}


// TODO ========================= Smooth Scrolling ==============================


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});


// TODO ========================= Mobile Menu Toggle ==============================


// Mobile Menu Toggle
document.getElementById('checkbox').addEventListener('change', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (this.checked) {
        navbarCollapse.classList.add('show');
    } else {
        navbarCollapse.classList.remove('show');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const checkbox = document.getElementById('checkbox');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        checkbox.checked = false;
        navbarCollapse.classList.remove('show');
    });
});