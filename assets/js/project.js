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





