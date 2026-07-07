/* ============================================================
   APP — Nederlands B1.2 → C1
   Vanilla JS. Spraaksynthese (TTS) + spraakherkenning (STT).
   Voortgang en XP worden lokaal bewaard.
   ============================================================ */
(function(){
  "use strict";
  const CUR = window.CURRICULUM;
  const ALL = CUR.flatMap(lvl => lvl.lessons.map(l => ({...l, levelId:lvl.id, levelLabel:lvl.label, levelColor:lvl.color})));
  const TOTAL = ALL.length;
  const root = document.getElementById('root');

  // ---------- State (persisted) ----------
  const SAVE_KEY = "nl_c1_state_v1";
  let S = load() || { completed:[], xp:0, streak:0, active:null };
  function load(){ try{ return JSON.parse(localStorage.getItem(SAVE_KEY)); }catch(e){ return null; } }
  function save(){ try{ localStorage.setItem(SAVE_KEY, JSON.stringify(S)); }catch(e){} }

  // ---------- Speech synthesis (TTS) ----------
  let nlVoice = null;
  function pickVoice(){
    const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    nlVoice = vs.find(v=>v.lang==="nl-NL") || vs.find(v=>v.lang&&v.lang.indexOf("nl")===0) || null;
  }
  if (window.speechSynthesis){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  const ttsOK = typeof window!=="undefined" && !!window.speechSynthesis;
  function speak(text, rate){
    if(!ttsOK) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang="nl-NL"; if(nlVoice) u.voice=nlVoice; u.rate=rate||0.9;
    speechSynthesis.speak(u);
  }
  function cleanPrompt(p){ return p.replace(/^[^:]+:\s*«?/, "").replace(/»$/, ""); }

  // ---------- Speech recognition (STT) ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const sttOK = !!SR;
  let recog = null, recognising = false;
  function startRecog(onResult, onEnd){
    if(!sttOK) return;
    try{ if(recog) recog.abort(); }catch(e){}
    recog = new SR();
    recog.lang="nl-NL"; recog.interimResults=true; recog.continuous=false; recog.maxAlternatives=1;
    let finalText="";
    recog.onresult = (e)=>{
      let interim="";
      for(let i=e.resultIndex;i<e.results.length;i++){
        const r=e.results[i];
        if(r.isFinal) finalText += r[0].transcript;
        else interim += r[0].transcript;
      }
      onResult(finalText || interim, !!finalText);
    };
    recog.onerror = ()=>{ recognising=false; onEnd(); };
    recog.onend = ()=>{ recognising=false; onEnd(finalText); };
    recognising=true; recog.start();
  }
  function stopRecog(){ try{ if(recog) recog.stop(); }catch(e){} recognising=false; }

  // ---------- Toast ----------
  let toastTimer=null;
  function toast(msg){
    let t=document.querySelector('.toast'); if(t) t.remove();
    t=document.createElement('div'); t.className='toast'; t.textContent=msg;
    document.body.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>{ t.remove(); }, 1900);
  }

  // ---------- Reward ----------
  function award(amount, msg){ S.xp += amount; save(); toast(msg); renderHud(); }
  function userLevel(){ return Math.floor(S.xp/100)+1; }

  // ---------- Helpers ----------
  function el(tag, attrs, html){
    const e=document.createElement(tag);
    if(attrs) for(const k in attrs){ if(k==="class") e.className=attrs[k]; else if(k==="style") e.style.cssText=attrs[k]; else e.setAttribute(k,attrs[k]); }
    if(html!=null) e.innerHTML=html;
    return e;
  }
  function pct(){ return Math.round((S.completed.length/TOTAL)*100); }
  function norm(s){ return s.toLowerCase().replace(/[.,!?;:«»"]/g,"").trim(); }

  // ============================================================
  //  HEADER / HUD
  // ============================================================
  function renderHud(){
    const hud=document.getElementById('hud');
    if(hud) hud.innerHTML =
      `<div class="pill"><span style="color:var(--gold);font-weight:800">★</span><b>${S.xp}</b><span class="muted" style="font-size:12px">XP</span></div>`+
      `<div class="pill"><span style="color:var(--orange)">🔥</span><b>${S.streak}</b></div>`+
      `<div class="pill dark">Niv. ${userLevel()}</div>`;
    const bar=document.getElementById('pbarFill'); if(bar) bar.style.width=pct()+"%";
    const lbl=document.getElementById('pbarPct'); if(lbl) lbl.textContent=pct()+"% naar C1";
  }

  function header(){
    return `<header class="app"><div class="wrap">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <div class="eyebrow">NEDERLANDS · B1.2 → C1</div>
          <div class="h1">Spreken op niveau</div>
        </div>
        <div class="hud" id="hud"></div>
      </div>
      <div style="margin-top:14px">
        <div class="pbar-head"><span>B1.2</span><span id="pbarPct" style="color:var(--orange);font-weight:800">${pct()}% naar C1</span><span>C1</span></div>
        <div class="pbar"><i id="pbarFill" style="width:${pct()}%"></i></div>
      </div>
    </div></header>`;
  }

  // ============================================================
  //  OVERVIEW
  // ============================================================
  function renderOverview(){
    root.innerHTML = header() + `<main><p class="muted" style="margin-top:0;font-size:15px">
      Korte lessen met tekst én audio, gericht op spreken. ${S.completed.length}/${TOTAL} lessen klaar.
      ${sttOK?"🎤 Spraakherkenning actief — spreek je antwoorden in.":"⚠️ Spraakherkenning niet beschikbaar in deze browser; gebruik Chrome of Edge."}
      </p><div id="list"></div></main>`;
    const list=document.getElementById('list');
    let idx=0;
    CUR.forEach(lvl=>{
      const sec=el('div',{style:"margin-bottom:26px"});
      sec.appendChild(el('div',{style:"display:flex;align-items:center;gap:10px;margin-bottom:10px"},
        `<span style="width:10px;height:10px;border-radius:999px;background:${lvl.color}"></span><h3 style="margin:0;font-size:17px;color:var(--ink)">${lvl.label}</h3>`));
      lvl.lessons.forEach(l=>{
        const myIdx=idx++;
        const done=S.completed.includes(l.id);
        const isNext=!done && S.completed.length===myIdx;
        const locked=!done && !isNext;
        const b=el('button',{class:"lessonbtn",style:
          `background:${done?'#E8F3EC':isNext?'var(--panel)':'#EEE8DA'};border-color:${isNext?'var(--orange)':'var(--line)'};opacity:${locked?.6:1};cursor:${locked?'not-allowed':'pointer'}`});
        b.innerHTML=`<span class="dot" style="background:${done?'var(--green)':isNext?'var(--orange)':'#CFC7B3'}">${done?'✓':locked?'🔒':'▶'}</span>
          <span style="flex:1"><span class="ttl">${l.title}</span><span class="sub">${l.intro}</span></span>`;
        if(!locked) b.onclick=()=>{ S.active=l.id; save(); renderLesson(l.id); };
        sec.appendChild(b);
      });
      list.appendChild(sec);
    });
    renderHud();
  }

  // ============================================================
  //  LESSON
  // ============================================================
  function renderLesson(id){
    const L=ALL.find(x=>x.id===id);
    root.innerHTML=header()+`<main><div id="lesson"></div></main>`;
    renderHud();
    const host=document.getElementById('lesson');
    lessonIntro(host,L);
  }

  function backBtn(host){
    const b=el('button',{style:"background:none;border:none;color:var(--mute);cursor:pointer;font-family:inherit;font-size:14px;margin-bottom:12px"},"← Terug naar overzicht");
    b.onclick=()=>{ S.active=null; save(); stopRecog(); renderOverview(); };
    host.appendChild(b);
  }
  function lessonTitle(host,L){
    host.appendChild(el('div',{style:"display:flex;align-items:center;gap:10px;margin-bottom:6px"},
      `<span class="badge" style="background:${L.levelColor}">${L.levelLabel.split(' ')[0]}</span><h2 style="margin:0;font-size:24px;color:var(--ink)">${L.title}</h2>`));
  }

  function lessonIntro(host,L){
    host.innerHTML=""; backBtn(host); lessonTitle(host,L);
    const c=el('div',{class:"card",style:"margin-top:12px"});
    c.innerHTML=`<p style="font-size:16px;line-height:1.5">${L.intro}</p>
      <p class="muted" style="font-size:14px">Twee delen: eerst nieuwe woorden inoefenen (hardop herhalen),
      daarna een echt gesprek voeren met directe feedback op je spreekvormen.</p>`;
    const start=el('button',{class:"btn primary"},"Begin de les →");
    start.onclick=()=>vocabDrill(host,L,0);
    c.appendChild(start);
    host.appendChild(c);
  }

  // ---------- VOCAB DRILL (repeat to memorise) ----------
  function vocabDrill(host,L,i){
    const REQUIRED=3;
    const words=L.vocab; const w=words[i];
    host.innerHTML=""; backBtn(host); lessonTitle(host,L);
    if(ttsOK) speak(w.nl);

    const card=el('div',{class:"card",style:"margin-top:4px"});
    card.innerHTML=`<span class="badge" style="background:var(--delft)">Nieuw woord ${i+1}/${words.length}</span>
      <div style="font-size:30px;font-weight:800;line-height:1.1;margin-top:16px">${w.nl}</div>
      <div class="muted" style="margin-top:4px;font-size:16px">${w.en}</div>
      <div style="margin-top:14px;padding-top:14px;border-top:1px dashed var(--line);font-style:italic;color:var(--delft);font-size:16px">“${w.ex}”</div>`;

    const row=el('div',{style:"margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;align-items:center"});
    const listen=el('button',{class:"spk"},"♪ Herhaal hardop");
    listen.onclick=()=>speak(w.nl);
    row.appendChild(listen);
    if(!ttsOK) row.appendChild(el('span',{style:"font-size:12px;color:var(--red)"},"(Audio niet beschikbaar — lees hardop voor.)"));
    card.appendChild(row);

    // progress dots
    let reps=0;
    card.appendChild(el('div',{class:"muted",style:"font-size:13px;margin:16px 0 6px"},`Spreek het woord ${REQUIRED}× uit om het te onthouden:`));
    const dotsWrap=el('div',{style:"display:flex;gap:8px"});
    const dots=[];
    for(let k=0;k<REQUIRED;k++){ const d=el('div',{style:"flex:1;height:9px;border-radius:999px;background:#E5DCC6;transition:background .25s"}); dots.push(d); dotsWrap.appendChild(d); }
    card.appendChild(dotsWrap);

    // mic for self-repetition (counts a rep when speech detected, or fallback button)
    const micRow=el('div',{style:"margin-top:16px;display:flex;align-items:center;gap:12px"});
    const nextBtn=el('button',{class:"btn primary",style:"margin-top:20px"}, i+1<words.length?"Volgend woord →":"Naar het gesprek →");
    nextBtn.disabled=true;

    function bump(){ if(reps<REQUIRED){ reps++; dots[reps-1].style.background="var(--green)"; } if(reps>=REQUIRED){ nextBtn.disabled=false; } }

    if(sttOK){
      const mic=el('button',{class:"mic","aria-label":"Spreek het woord uit"},"🎤");
      const status=el('span',{class:"muted",style:"font-size:13px"},"Tik en spreek het woord uit");
      mic.onclick=()=>{
        if(recognising){ stopRecog(); return; }
        mic.classList.add('live'); status.textContent="Luisteren…";
        startRecog((txt,isFinal)=>{ if(txt) status.textContent="“"+txt+"”"; },
          (finalTxt)=>{
            mic.classList.remove('live');
            const heard=norm(finalTxt||"");
            if(heard && (heard.includes(norm(w.nl))|| norm(w.nl).split(" ").some(x=>x.length>2&&heard.includes(x)))){
              status.textContent="✓ Goed uitgesproken!"; bump();
            } else if(heard){ status.textContent="Gehoord: “"+finalTxt+"” — probeer nog eens"; bump(); }
            else { status.textContent="Niets gehoord, probeer opnieuw"; }
          });
      };
      micRow.appendChild(mic); micRow.appendChild(status);
    } else {
      const manual=el('button',{class:"spk"},"Ik heb het herhaald ✓");
      manual.onclick=bump;
      micRow.appendChild(manual);
      micRow.appendChild(el('span',{class:"muted",style:"font-size:13px"},"Spreek hardop en tik om te tellen"));
    }
    card.appendChild(micRow);

    nextBtn.onclick=()=>{
      if(i+1<words.length) vocabDrill(host,L,i+1);
      else { award(10,"Woorden geleerd! +10 XP"); conversation(host,L); }
    };
    card.appendChild(nextBtn);
    host.appendChild(card);
  }

  // ---------- CONVERSATION (speaking + feedback) ----------
  function conversation(host,L){
    const convo=L.convo; let turn=0; const log=[];
    function draw(){
      const t=convo.turns[turn];
      host.innerHTML=""; backBtn(host); lessonTitle(host,L);
      if(ttsOK) speak(cleanPrompt(t.prompt));

      const head=el('div'); head.innerHTML=`<span class="badge" style="background:var(--green)">Gesprek · spreken</span>
        <div style="margin-top:14px;background:#EFF3F9;border:1px solid #CBD8EC;border-radius:12px;padding:12px 14px;font-size:14px;color:var(--delft)"><b>Situatie:</b> ${convo.scene}</div>`;
      host.appendChild(head);

      const chat=el('div',{style:"margin-top:16px;display:flex;flex-direction:column;gap:12px"});
      log.forEach(e=>{
        chat.appendChild(el('div',{class:"bubble left"},e.prompt));
        chat.appendChild(el('div',{class:"bubble right"},e.answer));
      });
      const cur=el('div',{class:"bubble left"});
      cur.innerHTML=`<div style="display:flex;justify-content:space-between;gap:10px;align-items:center"><span>${t.prompt}</span></div>`;
      const sp=el('button',{class:"spk sm",style:"margin-left:8px"},"♪");
      sp.onclick=()=>speak(cleanPrompt(t.prompt));
      cur.firstChild.appendChild(sp);
      chat.appendChild(cur);
      host.appendChild(chat);

      host.appendChild(el('div',{class:"muted",style:"margin-top:14px;font-size:14px"},"💡 "+t.hint));

      // input + mic
      const ta=el('textarea',{rows:"2",placeholder:"Typ je antwoord — of gebruik de microfoon →"});
      ta.style.marginTop="10px";
      const inputRow=el('div',{style:"display:flex;gap:12px;align-items:flex-start;margin-top:10px"});
      inputRow.appendChild(ta); inputRow.firstChild.style.flex="1";

      if(sttOK){
        const mic=el('button',{class:"mic","aria-label":"Spreek je antwoord in",style:"flex-shrink:0"},"🎤");
        mic.onclick=()=>{
          if(recognising){ stopRecog(); mic.classList.remove('live'); return; }
          mic.classList.add('live'); ta.placeholder="Luisteren…";
          startRecog((txt)=>{ ta.value=txt; },
            (finalTxt)=>{ mic.classList.remove('live'); if(finalTxt) ta.value=finalTxt; ta.placeholder="Typ je antwoord…"; });
        };
        inputRow.appendChild(mic);
      }
      host.appendChild(inputRow);

      const fbBox=el('div'); host.appendChild(fbBox);
      const actions=el('div',{style:"margin-top:16px;display:flex;gap:10px"});
      host.appendChild(actions);

      let passed=false;
      function showActions(){
        actions.innerHTML="";
        if(!passed){
          const check=el('button',{class:"btn primary"},"Controleer");
          check.disabled=!ta.value.trim();
          ta.oninput=()=>{ check.disabled=!ta.value.trim(); };
          check.onclick=doCheck;
          actions.appendChild(check);
          if(fbBox.dataset.shown==="bad"){
            const showModel=el('button',{class:"btn ghost"},"Toon model");
            showModel.onclick=()=>{ ta.value=t.model; check.disabled=false; };
            actions.appendChild(showModel);
          }
        } else {
          const next=el('button',{class:"btn primary"}, turn+1<convo.turns.length?"Volgende beurt →":"Les afronden ✓");
          next.onclick=proceed;
          actions.appendChild(next);
        }
      }
      function doCheck(){
        const text=norm(ta.value);
        const hasWords=ta.value.trim().split(/\s+/).length>=3;
        const ok=t.accept.every(a=>text.includes(norm(a)));
        if(ok && hasWords){
          passed=true; fbBox.dataset.shown="good";
          fbBox.innerHTML=`<div style="margin-top:12px;border-radius:12px;padding:12px 14px;background:#E8F3EC;border:1.5px solid var(--green);color:var(--green);font-size:15px"><b>✓ </b>Correct! ${t.note}</div>`;
          award(15,"Goed gezegd! +15 XP");
        } else {
          const missing=t.accept.filter(a=>!text.includes(norm(a)));
          let advice;
          if(!hasWords) advice="Probeer een volledige zin te maken in plaats van losse woorden.";
          else if(missing.length) advice=`Bijna! Verwerk dit nog: «${missing.join('», «')}». ${t.note}`;
          else advice=t.note;
          fbBox.dataset.shown="bad";
          fbBox.innerHTML=`<div style="margin-top:12px;border-radius:12px;padding:12px 14px;background:#FBEDE9;border:1.5px solid var(--red);color:var(--red);font-size:15px">
            <b>✎ </b>${advice}
            <div style="margin-top:8px;color:var(--ink);font-size:14px"><b>Voorbeeld:</b> “${t.model}” <button class="link" id="mdlSpk">♪ luister</button></div></div>`;
          const ms=document.getElementById('mdlSpk'); if(ms) ms.onclick=()=>speak(t.model);
        }
        showActions();
      }
      function proceed(){
        log.push({prompt:t.prompt, answer:ta.value, model:t.model});
        if(turn+1<convo.turns.length){ turn++; draw(); }
        else completeLesson(L);
      }
      showActions();
    }
    draw();
  }

  function completeLesson(L){
    if(!S.completed.includes(L.id)){
      S.completed.push(L.id); S.streak+=1; save();
      if(S.completed.length===TOTAL) award(50,"🎉 Gefeliciteerd! Je hebt C1 bereikt!");
      else award(25,"Les voltooid! +25 XP 🎯");
    }
    S.active=null; save(); stopRecog(); renderOverview();
  }

  // ---------- Boot ----------
  if(S.active && ALL.find(x=>x.id===S.active)) renderLesson(S.active);
  else renderOverview();
})();
