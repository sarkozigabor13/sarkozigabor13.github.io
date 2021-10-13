/* -------------------------------------------------------------------------- */

/*                              Project nav bg                                */

/* -------------------------------------------------------------------------- */


 $(function () {
  $(document).scroll(function () {
	  var $nav = $(".dark-bg-text");
	  $nav.toggleClass('text-white', $(this).scrollTop() < 540);
	});
});


/* ---------- Change color --------------- */

const [red, green, blue] = [255, 255, 255]
const projectHeadSection = document.querySelector('.project-head-section')

window.addEventListener('scroll', () => {

    const y = 1 + (window.scrollY || window.pageYOffset) / 100;
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
    projectHeadSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})




/* $(document).ready(function () {
    $(window).scroll(function () {
        $('.project-head-section').css("opacity", 1 - $(window).scrollTop() / 650)
    })
}) */


/* ---------- If rock the bottom --------------- */

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {

        // Toast activity
        $("#myToast").toast({ delay: 5000 });
        $("#myToast").toast('show');

    }
});


var timeSpent = 0; //seconds on page
var timer;
window.onload = function() {
  timer = setInterval( function() { timeSpent++; }, 998 );
};

window.onunload = function() {
  timer = clearInterval( timer );
  console.log(timer);
}


/* ---------- Mesaure read article --------------- */


function readingTime() {
    const text = document.getElementById("top").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  }
  readingTime();


/* ---------- View counter --------------- */


// https://countapi.xyz/
// It have to registre myself

function callbackName(response) {
    document.getElementById('visits').innerText = response.value;
}

/* ---------- View counter --------------- */



ScrollReveal().reveal('.headline', { delay: 3500 })
ScrollReveal().reveal('.tagline', { delay: 1000 })
ScrollReveal().reveal('.punchline', { delay: 5000 })

