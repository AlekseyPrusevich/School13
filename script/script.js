$(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');

    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
});
    
(function() {
  let toggles = document.querySelectorAll(".c-hamburger");
 
  for (let i = toggles.length - 1; i >= 0; i--) {
    let toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
 
})();



