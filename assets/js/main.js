(function(){
  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var mobile = document.querySelector('.mobile-nav');
  if(toggle && mobile){
    toggle.addEventListener('click', function(){
      mobile.classList.toggle('open');
    });
  }
  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function(item){
    var btn = item.querySelector('.faq-q');
    if(!btn) return;
    btn.addEventListener('click', function(){
      item.classList.toggle('open');
    });
  });
})();
