"""Procedural wooden/mellow SFX (self-made, CC0). Kingmaker two-fan markers + WG diorama site sfx."""
import numpy as np, subprocess, sys, os
SR=44100; rng=np.random.default_rng(7)
def buf(d): return np.zeros(int(SR*d))
def env(n,a,dec): t=np.arange(n)/SR; return np.minimum(1,t/max(a,1e-4))*np.exp(-t/dec)
def wood(o,t0,f,amp,dec=0.05):
    i=int(t0*SR); n=min(len(o)-i,int(SR*dec*8)); t=np.arange(n)/SR
    s=sum(w*np.sin(2*np.pi*f*r*t)*np.exp(-t/(dec/r**0.7)) for r,w in [(1,1),(2.76,.35),(5.4,.12)])
    o[i:i+n]+=amp*s*np.minimum(1,t/0.002)
def swish(o,t0,d,amp,lo=600,hi=4000,rise=True):
    i=int(t0*SR); n=min(len(o)-i,int(SR*d)); x=rng.standard_normal(n)
    X=np.fft.rfft(x); fr=np.fft.rfftfreq(n,1/SR); X[(fr<lo)|(fr>hi)]=0; x=np.fft.irfft(X,n)
    t=np.linspace(0,1,n); e=np.sin(np.pi*t**(0.6 if rise else 1.6))**2
    o[i:i+n]+=amp*x/np.abs(x).max()*e
def tick(o,t0,amp,f=2400): wood(o,t0,f,amp,0.012)
def save(o,path,peak=0.5):
    o=o/np.abs(o).max()*peak; fade=int(0.01*SR); o[-fade:]*=np.linspace(1,0,fade)
    subprocess.run(['ffmpeg','-v','error','-y','-f','f32le','-ar',str(SR),'-ac','1','-i','-','-c:a','libvorbis','-q:a','4',path],input=o.astype(np.float32).tobytes(),check=True)
F=1/30
def two_fan(d):
    o=buf(.35); swish(o,0,.3,1,800,3500); save(o,f'{d}/fan_fold.ogg',.35)
    o=buf(.12); wood(o,0,1100,1,.02); save(o,f'{d}/fan_fold_settle.ogg',.25)
    o=buf(.3); wood(o,0,420,1,.06); wood(o,.004,180,.6,.05); swish(o,0,.05,.3,300,2000,False); save(o,f'{d}/fan_set_down.ogg',.55)
    o=buf(.12); swish(o,0,.08,1,1500,6000); tick(o,.03,.3); tick(o,.06,.2); save(o,f'{d}/fan_square.ogg',.2)
    o=buf(.2); swish(o,0,.15,1,500,2500); wood(o,0,700,.25,.02); save(o,f'{d}/fan_pick_up.ogg',.35)
    o=buf(.45); swish(o,0,.35,.6,1200,5000)
    for k in range(5): tick(o,k*1.5*F,.5,2000+k*120)
    save(o,f'{d}/fan_spread.ogg',.4)
    o=buf(.3); swish(o,0,.25,.8,700,3000,False); wood(o,.05,520,.5,.04); wood(o,.12,390,.3,.04); save(o,f'{d}/fan_switch_cancel.ogg',.35)
def site(d):
    o=buf(.3); [wood(o,k*.06,880*(1+.06*(-1)**k),.6-.1*k,.02) for k in range(4)]; save(o,f'{d}/hover-wiggle.ogg',.3)
    o=buf(.2); wood(o,0,1046,1,.03); save(o,f'{d}/object-click.ogg',.35)
    o=buf(.3); wood(o,0,260,1,.05); wood(o,.06,392,.5,.03); save(o,f'{d}/gnome-poke.ogg',.35)
    o=buf(.45); wood(o,0,330,.6,.05); swish(o,.05,.2,.3,400,1500); wood(o,.22,494,.5,.05); save(o,f'{d}/badger-peek.ogg',.3)
    o=buf(.55); [wood(o,k*.1,f,.6,.06) for k,f in enumerate([523.3,659.3,784])]; save(o,f'{d}/notify-submit.ogg',.3)
if __name__=='__main__':
    which,d=sys.argv[1],sys.argv[2]; os.makedirs(d,exist_ok=True); (two_fan if which=='fan' else site)(d)
