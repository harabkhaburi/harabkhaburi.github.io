(function(){
  var b=document.querySelector('.menu-toggle'), m=document.getElementById('site-menu');
  if(!b||!m) return;
  function set(o){b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');m.classList.toggle('open',o);}
  b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true');});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
})();
