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

/*                     Logo typewrite mobile and tablet                       */

/* -------------------------------------------------------------------------- */

(function() {
      
    const appLogoNameMobile = document.getElementById('appLogoNameMobile');

    const typewriterLogoNameMobile = new Typewriter(appLogoNameMobile, {
      loop: true,
      delay: 75,
    });
    
    typewriterLogoNameMobile 
      .pauseFor(2500)
      .typeString('<span style="color: var(--color-light);">mókából.</span>')
      .pauseFor(1000)
      .deleteChars(14)
      .typeString('<span style="color: var(--color-green);">cégeknek.</span>')
      .pauseFor(1000)
      .deleteChars(13)
      .typeString('<span style="color: var(--color-strong);">menőzni.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: var(--color-red);">tőlem.</span>')
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


(function() {
      
  const TextEditor = document.getElementById('appTextEditor');
  const TextEditorNext = document.getElementById('appTextEditorTwo');


  const typewriteTextEditor = new Typewriter(TextEditor, {
    loop: false,
    delay: 150,    
  });

  typewriteTextEditor
  .pauseFor(2500)
  .typeString('Milyen címet írjak?')
  .pauseFor(1200)
  .start();
  

  const typewriteTextEditorNexT = new Typewriter(TextEditorNext, {
    loop: false,
    delay: 150,
  });
  
  typewriteTextEditorNexT 
    .pauseFor(3850)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tag">script</span> <span class="attr">src</span>=<span class="val">"scripts/script.js</span>&gt;&lt;/<span class="tag">script</span>&gt;')
    .pauseFor(1200)
    .start();


    

})();
