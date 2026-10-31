/* Diorama draft. Sound is OFF by default. SOUND HOOKS for Peter: drop files in assets/sfx/ with these names;
   they only play after the visitor turns sound on (localStorage wg-sound=1 / the sound toggle). */
(function(){
  var SFX={hover:'hover-wiggle',gnome:'gnome-poke',badger:'badger-peek',click:'object-click',notify:'notify-submit'};
  var on=localStorage.getItem('wg-sound')==='1',cache={};
  function play(k){if(!on||!SFX[k])return;try{var a=cache[k]||(cache[k]=new Audio((window.WG_ROOT||'./')+'assets/sfx/'+SFX[k]+'.ogg'));a.currentTime=0;a.volume=.5;a.play().catch(function(){})}catch(e){}}
  window.wgSound={play:play,set:function(v){on=!!v;localStorage.setItem('wg-sound',on?'1':'0')}};
  var t=document.getElementById('sound-toggle');if(t){t.textContent=on?'Sound: on':'Sound: off';t.addEventListener('click',function(){wgSound.set(!on);t.textContent=on?'Sound: on':'Sound: off';t.setAttribute('aria-pressed',on)})}
  document.querySelectorAll('.obj').forEach(function(o){o.addEventListener('mouseenter',function(){play('hover')});o.addEventListener('click',function(){play('click')})});
  var g=document.getElementById('gnome'),b=document.getElementById('bubble'),lines=['Oof!','Hey, trainer!','Put \u2019em up!','Not the hat!'],i=0;
  if(g)g.addEventListener('click',function(){g.classList.remove('poked');void g.offsetWidth;g.classList.add('poked');b.textContent=lines[i++%lines.length];b.classList.add('on');play('gnome');setTimeout(function(){b.classList.remove('on')},1400)});
  var bu=document.getElementById('burrow');
  if(bu){bu.addEventListener('click',function(){bu.classList.toggle('peek');play('badger')});
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches)setInterval(function(){bu.classList.add('peek');setTimeout(function(){bu.classList.remove('peek')},1600)},9000)}
  var f=document.getElementById('notify');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();play('notify');document.getElementById('notify-msg').textContent='Thanks! (Draft: sign-up isn\u2019t connected yet, so nothing was sent.)'});
})();
