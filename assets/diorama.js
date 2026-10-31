/* v2 draft. Sound is OFF by default. SOUND HOOKS for Peter: drop files in assets/sfx/ with these names (.ogg);
   they only play after the visitor turns sound on (footer toggle, stored as localStorage wg-sound=1). */
(function(){
  var SFX={hover:'hover-soft',click:'object-click',gnome:'gnome-peek',badger:'badger-dusk',notify:'notify-submit'};
  var on=localStorage.getItem('wg-sound')==='1',cache={},R=window.WG_ROOT||'./';
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function play(k){if(!on||!SFX[k])return;try{var a=cache[k]||(cache[k]=new Audio(R+'assets/sfx/'+SFX[k]+'.ogg'));a.currentTime=0;a.volume=.4;a.play().catch(function(){})}catch(e){}}
  window.wgSound={play:play,set:function(v){on=!!v;localStorage.setItem('wg-sound',on?'1':'0')}};
  var t=document.getElementById('sound-toggle');
  function lbl(){t.textContent=on?'Sound on':'Sound off';t.setAttribute('aria-pressed',on)}
  if(t){lbl();t.addEventListener('click',function(){wgSound.set(!on);lbl()})}
  document.querySelectorAll('.piece').forEach(function(p){
    p.addEventListener('mouseenter',function(){play('hover');if(p.querySelector('.peek-gnome'))play('gnome');if(p.querySelector('.dusk-badger'))play('badger')});
    p.addEventListener('click',function(){play('click')});
    if(still||matchMedia('(pointer:coarse)').matches)return;
    var img=p.querySelector('img.art');
    p.addEventListener('mousemove',function(e){var r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;img.style.transform='scale(1.0) translate('+(x*-8)+'px,'+(y*-8)+'px)'});
    p.addEventListener('mouseleave',function(){img.style.transform=''});
  });
  /* One understated idle moment: after a while the gnome and badger appear briefly, once. */
  if(!still)setTimeout(function(){var g=document.querySelector('.peek-gnome'),b=document.querySelector('.dusk-badger');
    [g,b].forEach(function(x){if(x)x.classList.add('idle')});setTimeout(function(){[g,b].forEach(function(x){if(x)x.classList.remove('idle')})},3200)},7000);
  var f=document.getElementById('notify');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();play('notify');document.getElementById('notify-msg').textContent='Thank you. (Draft: sign-up isn\u2019t connected yet, so nothing was sent.)'});
})();
