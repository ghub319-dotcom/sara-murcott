// Simple workout pool
const WORKOUTS = {
  Full:["Jumping Jacks - 30s","Burpees - 30s","Mountain Climbers - 30s"],
  Arms:["Push-ups - 30s","Tricep Dips - 30s","Bicep Curls - 30s"],
  Legs:["Squats - 30s","Lunges - 30s","Calf Raises - 30s"],
  Core:["Plank - 30s","Bicycle Crunches - 30s","Leg Raises - 30s"]
};

function pickExercises(part){
  const pool = WORKOUTS[part] || WORKOUTS.Full;
  // pick 3 random
  const copy = pool.slice();
  const out = [];
  while(out.length<3 && copy.length){
    const idx = Math.floor(Math.random()*copy.length);
    out.push(copy.splice(idx,1)[0]);
  }
  return out;
}

document.getElementById && (function(){
  const genBtn = document.getElementById('genBtn');
  genBtn.addEventListener('click', ()=>{
    const part = document.getElementById('bodyPart').value;
    const plan = pickExercises(part);
    const ol = document.getElementById('planList'); ol.innerHTML='';
    plan.forEach(p=>{
      const li=document.createElement('li'); li.textContent=p; ol.appendChild(li);
    });
    document.getElementById('plan').classList.remove('hidden');
  });

  // Timer
  let secs = 30, timerId = null;
  document.getElementById('startTimer').addEventListener('click', ()=>{
    if(timerId){ clearInterval(timerId); timerId=null; document.getElementById('startTimer').textContent='Start'; return; }
    secs = 30; document.getElementById('startTimer').textContent='Stop';
    timerId = setInterval(()=>{
      secs--;
      const mm = String(Math.floor(secs/60)).padStart(2,'0'), ss=String(secs%60).padStart(2,'0');
      document.getElementById('timeDisplay').textContent = mm+':'+ss;
      if(secs<=0){ clearInterval(timerId); timerId=null; document.getElementById('startTimer').textContent='Start'; playBeep(); }
    },1000);
  });

  function playBeep(){
    try{
      const ctx = new (window.AudioContext||window.webkitAudioContext)();
      const o = ctx.createOscillator(); o.type='sine'; o.frequency.value=600;
      o.connect(ctx.destination); o.start();
      setTimeout(()=>{ o.stop(); ctx.close(); },200);
    }catch(e){}
  }
})();
