/* 
 *From: https://www.npmjs.com/package/typewriter-effect
*/ 

/* -------------------------------------------------------------------------- */

/*                       Logo typewrite from lg deskpot                       */

/* -------------------------------------------------------------------------- */

(function() {
      
    const appLogoName = document.getElementById('appLogoNameTxt');

    const typewriterLogoName = new Typewriter(appLogoName, {
      loop: true,
      delay: 75,
    });
    
    typewriterLogoName 
      .pauseFor(2500)
      .typeString('<span style="color: var(--color-light);">szorakozásból.</span>')
      .pauseFor(1000)
      .deleteChars(14)
      .typeString('<span style="color: var(--color-green);">tájékoztatni.</span>')
      .pauseFor(1000)
      .deleteChars(13)
      .typeString('<span style="color: var(--color-strong);">eladni.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: var(--color-red);">neked.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .start();

 })();


/* -------------------------------------------------------------------------- */

/*                     Logo typewrite from lg deskpot EN                      */

/* -------------------------------------------------------------------------- */

(function() {
      
    const appLogoNameEn = document.getElementById('appLogoNameEn');

    const typewriterLogoNameEn = new Typewriter(appLogoNameEn, {
      loop: true,
      delay: 75,
    });
    
    typewriterLogoNameEn 
      .pauseFor(2500)
      .typeString('<span style="color: var(--color-light);">design.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: var(--color-green);">fun.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: var(--color-strong);">selling.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: var(--color-red);">you.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .start();

 })();


/* -------------------------------------------------------------------------- */

/*                          Typewrite in code editor                          */

/* -------------------------------------------------------------------------- */




$(window).on('scroll',function() {
  if (checkVisible($('#tester'))) {

    (function() {
      
      const TextEditor = document.getElementById('appTextEditor');
    
    
      const typewriteTextEditor = new Typewriter(TextEditor, {
        loop: false,
        delay: 150,    
      });
    
      typewriteTextEditor
      .pauseFor(2500)
      .typeString('Milyen címet írjak?')
      .pauseFor(1200)
      .start();
        
    })();

    
      $(window).off('scroll');
  } else {
      // do nothing
  }
});
function checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
      scrolltop = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();   
  
  if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}


