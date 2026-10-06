import { jsx as a, jsxs as d } from "react/jsx-runtime";
import { useRef as u, useLayoutEffect as q, useEffect as w } from "react";
const T = '@property --fa-green-core{syntax: "<color>"; inherits: true; initial-value: #c8ff78;}@property --fa-green-mid{syntax: "<color>"; inherits: true; initial-value: #3dff4a;}@property --fa-green-edge{syntax: "<color>"; inherits: true; initial-value: #18e034;}@property --fa-green-deep{syntax: "<color>"; inherits: true; initial-value: #0fbe28;}.fa-slot,.fa-slot *,.fa-board,.fa-board *{box-sizing:border-box}.fa-slot{position:relative;width:230px;height:170px}.fa-face{--fa-green-core: #c8ff78;--fa-green-mid: #3dff4a;--fa-green-edge: #18e034;--fa-green-deep: #0fbe28;position:absolute;left:0;top:0;width:230px;height:170px;transform-origin:top left;transition:--fa-green-core .7s ease,--fa-green-mid .7s ease,--fa-green-edge .7s ease,--fa-green-deep .7s ease}.fa-shadow{position:absolute;left:50%;bottom:14px;width:150px;height:28px;border-radius:50%;background:radial-gradient(closest-side,#28dc468c,#28dc4600);filter:blur(2px);transform:translate(-50%);transform-origin:center}.fa-rig{position:absolute;left:50%;top:28px;width:196px;height:112px;margin-left:-98px;transform-origin:50% 80%}.fa-blob{position:relative;width:100%;height:100%;border-radius:50px;background:radial-gradient(90px 70px at 50% 42%,var(--fa-green-core) 0%,transparent 72%),radial-gradient(120px 80px at 50% 60%,var(--fa-green-mid) 0%,var(--fa-green-edge) 58%,var(--fa-green-deep) 140%);box-shadow:inset 0 14px 18px #ffffff61,inset 0 -16px 18px #141e2829}.fa-blob:before{content:"";position:absolute;left:28px;top:14px;width:78px;height:26px;border-radius:50%;background:linear-gradient(180deg,#ffffffb3,#fff0);transform:rotate(-8deg);pointer-events:none}.fa-drift,.fa-look{position:absolute;inset:0}.fa-look{display:flex;justify-content:center;align-items:center;gap:28px;transition:transform .12s linear}.fa-eye{display:block;width:16px;height:46px;border-radius:999px;background:#fff;box-shadow:0 0 0 1.5px #0a121c2e,0 1px #ffffffd9;transform-origin:center;transition:transform .14s ease}.fa-face[data-mood=idle] .fa-rig{animation:fa-breathe 3.4s ease-in-out infinite}.fa-face[data-mood=idle] .fa-shadow{animation:fa-shadow-breathe 3.4s ease-in-out infinite}.fa-face[data-mood=idle] .fa-drift{animation:fa-idle-drift 5.5s ease-in-out infinite}.fa-face.fa-blink .fa-eye{transform:scaleY(.08)}.fa-face[data-mood=think]{--fa-green-core: #ffe8a8;--fa-green-mid: #ffb020;--fa-green-edge: #f08a00;--fa-green-deep: #c45e00}.fa-face[data-mood=think] .fa-rig{animation:fa-think-body 3.6s ease-in-out infinite}.fa-face[data-mood=think] .fa-look{animation:fa-think-look 3.6s ease-in-out infinite}.fa-face[data-mood=think] .fa-eye{animation:fa-think-blink 3.6s ease-in-out infinite}.fa-face[data-mood=think] .fa-shadow{background:radial-gradient(closest-side,#f08c148c,#f08c1400);animation:fa-think-shadow 3.6s ease-in-out infinite}.fa-mark{position:absolute;right:2px;top:0;z-index:4;opacity:0;pointer-events:none;transform:scale(calc(1/max(.5,var(--fa-size, 1))));transform-origin:top right;transition:opacity .45s ease}.fa-think-dots{right:8px;top:2px}.fa-search-mark{right:0;top:-2px}.fa-blush,.fa-paw,.fa-glasses{opacity:0;transition:opacity .5s ease}.fa-face[data-mood=think] .fa-think-dots,.fa-face[data-mood=search] .fa-search-mark,.fa-face[data-mood=sleep] .fa-sleep-mark,.fa-face[data-mood=greet] .fa-blush,.fa-face[data-mood=greet] .fa-paw,.fa-face[data-mood=ai] .fa-glasses,.fa-face[data-mood=ai] .fa-ai-mark{opacity:1}.fa-chip{display:inline-flex;align-items:center;gap:7px;min-height:28px;padding:5px 10px;border-radius:999px;background:#1d1408;box-shadow:0 4px 12px #14100838}.fa-chip-search{background:#06263a}.fa-dots{display:flex;align-items:center;gap:5px;height:12px}.fa-dots i{display:block;width:8px;height:8px;border-radius:50%;background:#ffd36a;opacity:.28;animation:fa-dot 1.2s ease-in-out infinite}.fa-chip-search .fa-dots i{background:#7fe7ff}.fa-dots i:nth-child(2){animation-delay:.18s}.fa-dots i:nth-child(3){animation-delay:.36s}.fa-face[data-mood=search]{--fa-green-core: #b8f4ff;--fa-green-mid: #2ec8ff;--fa-green-edge: #0a8fd6;--fa-green-deep: #065f9a}.fa-face[data-mood=search] .fa-rig{animation:fa-search-body 1.6s ease-in-out infinite}.fa-face[data-mood=search] .fa-look{animation:fa-search-look 1.6s ease-in-out infinite}.fa-face[data-mood=search] .fa-eye{animation:fa-search-squint 1.6s ease-in-out infinite}.fa-face[data-mood=search] .fa-shadow{background:radial-gradient(closest-side,#14a0e680,#14a0e600);animation:fa-search-shadow 1.6s ease-in-out infinite}.fa-search-icon{display:block;width:18px;height:18px;color:#e8fbff;flex:none}.fa-face[data-mood=fail]{--fa-green-core: #ffc4b0;--fa-green-mid: #ff6a4a;--fa-green-edge: #e03a28;--fa-green-deep: #a81f16}.fa-face[data-mood=fail] .fa-rig{animation:fa-fail-body 3.8s ease-in-out infinite}.fa-face[data-mood=fail] .fa-look{animation:fa-fail-look 3.8s ease-in-out infinite}.fa-face[data-mood=fail] .fa-eye.fa-left{animation:fa-fail-eye-l 3.8s ease-in-out infinite}.fa-face[data-mood=fail] .fa-eye.fa-right{animation:fa-fail-eye-r 3.8s ease-in-out infinite}.fa-face[data-mood=fail] .fa-shadow{background:radial-gradient(closest-side,#dc463273,#dc463200);animation:fa-fail-shadow 3.8s ease-in-out infinite}.fa-face[data-mood=fail] .fa-blob{animation:fa-fail-color 3.8s ease-in-out infinite}.fa-face[data-mood=sleep]{--fa-green-core: #d7e0f0;--fa-green-mid: #8ea0c0;--fa-green-edge: #5d6f92;--fa-green-deep: #3a4868}.fa-face[data-mood=sleep] .fa-rig{animation:fa-sleep-body 4.2s ease-in-out infinite}.fa-face[data-mood=sleep] .fa-eye{animation:fa-sleep-eye 4.2s ease-in-out infinite}.fa-face[data-mood=sleep] .fa-shadow{background:radial-gradient(closest-side,#50648c73,#50648c00);animation:fa-sleep-shadow 4.2s ease-in-out infinite}.fa-zzz{display:grid;place-items:center;min-width:30px;min-height:30px;padding:2px 8px 4px;border-radius:999px;background:#24304a;color:#e8eefc;font-family:Avenir Next,Segoe UI,sans-serif;font-weight:800;font-size:18px;letter-spacing:-.04em;line-height:1;box-shadow:0 4px 12px #141c3038}.fa-face[data-mood=sleep] .fa-zzz{animation:fa-zzz 4.2s ease-in-out infinite}.fa-face[data-mood=done]{--fa-green-core: #f0e0ff;--fa-green-mid: #b984ff;--fa-green-edge: #8b4cf0;--fa-green-deep: #5c28b8;animation:fa-done-color 2.6s ease-in-out infinite}.fa-face[data-mood=done] .fa-rig{animation:fa-done-body 2.6s ease-in-out infinite}.fa-face[data-mood=done] .fa-eye{animation:fa-done-eye 2.6s ease-in-out infinite}.fa-face[data-mood=done] .fa-shadow{background:radial-gradient(closest-side,#965ae673,#965ae600);animation:fa-done-shadow 2.6s ease-in-out infinite}.fa-face[data-mood=greet]{--fa-green-core: #ffe0ec;--fa-green-mid: #ff7eb0;--fa-green-edge: #ef4f8d;--fa-green-deep: #c22662}.fa-face[data-mood=greet] .fa-rig{animation:fa-greet-body 2.8s ease-in-out infinite}.fa-face[data-mood=greet] .fa-look{animation:fa-greet-look 2.8s ease-in-out infinite}.fa-face[data-mood=greet] .fa-eye.fa-left{animation:fa-greet-eye-l 2.8s ease-in-out infinite}.fa-face[data-mood=greet] .fa-eye.fa-right{animation:fa-greet-eye-r 2.8s ease-in-out infinite}.fa-face[data-mood=greet] .fa-shadow{background:radial-gradient(closest-side,#f05a8c66,#f05a8c00);animation:fa-greet-shadow 2.8s ease-in-out infinite}.fa-blush{position:absolute;top:68px;width:30px;height:14px;border-radius:50%;background:#ff70968c;filter:blur(1px);pointer-events:none}.fa-blush-left{left:34px}.fa-blush-right{right:48px}.fa-paw{position:absolute;right:-6px;top:64px;width:40px;height:40px;transform-origin:6px 78%;z-index:2}.fa-face[data-mood=greet] .fa-paw{animation:fa-wave .95s ease-in-out infinite}.fa-face[data-mood=ai]{--fa-green-core: #d8fff6;--fa-green-mid: #2fe0c8;--fa-green-edge: #1299a8;--fa-green-deep: #0a5f72}.fa-face[data-mood=ai] .fa-rig{animation:fa-ai-pose .5s cubic-bezier(.2,.85,.24,1) both,fa-ai-breathe 3.4s ease-in-out .5s infinite}.fa-face[data-mood=ai] .fa-look{animation:fa-ai-look .5s ease both}.fa-face[data-mood=ai] .fa-eye{animation:fa-ai-focus .42s ease .12s both,fa-ai-blink 4.4s ease-in-out .7s infinite}.fa-face[data-mood=ai] .fa-shadow{background:radial-gradient(closest-side,#14aab473,#14aab400);animation:fa-ai-shadow 3.4s ease-in-out .5s infinite}.fa-glasses{position:absolute;left:47px;top:33px;width:102px;height:44px;z-index:3;overflow:visible;pointer-events:none}.fa-face[data-mood=ai] .fa-glasses{animation:fa-glasses-on .46s cubic-bezier(.16,.84,.24,1.12) both}.fa-glasses-arm,.fa-bridge{fill:none;stroke:#06263a;stroke-width:4.2;stroke-linecap:round}.fa-lens{fill:#ffffff47;stroke:#06263a;stroke-width:4.2}.fa-glint{fill:none;stroke:#fffffff2;stroke-width:2.4;stroke-linecap:round;opacity:0}.fa-face[data-mood=ai] .fa-glint{animation:fa-glint 4.4s ease-in-out .55s infinite}.fa-ai-badge{display:inline-flex;align-items:center;justify-content:center;min-width:34px;min-height:28px;padding:4px 10px 3px;border-radius:999px;background:#06263a;color:#d8fff6;font-family:Avenir Next,Segoe UI,sans-serif;font-size:14px;font-weight:800;letter-spacing:.08em;line-height:1.1;box-shadow:0 4px 12px #06263a47}.fa-face[data-mood=ai] .fa-ai-badge{animation:fa-ai-badge .38s cubic-bezier(.16,.9,.24,1.2) both}.fa-paw-hand{display:block;width:36px;height:36px;border-radius:50%;background:radial-gradient(circle at 36% 30%,rgba(255,255,255,.75),transparent 36%),radial-gradient(circle at 50% 58%,#ffe0ec,#ff7eb0 46%,#ef4f8d);box-shadow:inset 0 5px 6px #fff6,inset 0 -5px 7px #a01e5038}.fa-board{--fa-ink: #1c1f1a;--fa-muted: #6d7468;--fa-line: #e6e8e2;--fa-card: #ffffff;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin-top:28px;font-family:Avenir Next,Segoe UI,sans-serif;color:var(--fa-ink)}.fa-cell{background:var(--fa-card);border:1px solid var(--fa-line);border-radius:22px;padding:18px 16px 16px;box-shadow:0 10px 30px #1c28140a}.fa-cell h2{margin:12px 0 0;font-size:17px;font-weight:700;letter-spacing:-.03em}.fa-cell p{margin:4px 0 0;color:var(--fa-muted);font-size:13px;line-height:1.4;min-height:2.8em}.fa-stage{height:210px;display:grid;place-items:center;background:radial-gradient(120px 40px at 50% 78%,rgba(40,230,70,.16),transparent 70%),linear-gradient(#fff,#fbfcfb);border-radius:16px;overflow:hidden}@keyframes fa-breathe{0%,to{transform:translateY(0) scale(1)}50%{transform:translateY(2px) scale(1.015,.985)}}@keyframes fa-shadow-breathe{0%,to{transform:translate(-50%) scaleX(1);opacity:.9}50%{transform:translate(-50%) scaleX(.92);opacity:.7}}@keyframes fa-idle-drift{0%,to{transform:translate(0)}35%{transform:translate(2px,1px)}70%{transform:translate(-2px,1px)}}@keyframes fa-think-body{0%,to{transform:rotate(-6deg) translateY(1px)}45%{transform:rotate(-7deg) translateY(0)}62%{transform:rotate(6deg) translateY(1px)}88%{transform:rotate(4deg)}}@keyframes fa-think-look{0%,to{transform:translate(-8px,-9px)}45%{transform:translate(-11px,-12px)}62%{transform:translate(10px,-10px)}88%{transform:translate(6px,-8px)}}@keyframes fa-think-blink{0%,40%,49%,to{transform:scaleY(.86)}44%{transform:scaleY(.08)}}@keyframes fa-dot{0%,55%,to{opacity:.22;transform:translateY(3px) scale(.8)}28%{opacity:1;transform:translateY(-3px) scale(1)}}@keyframes fa-think-shadow{0%,45%{transform:translate(-58%) scaleX(1)}62%,to{transform:translate(-42%) scaleX(1)}}@keyframes fa-search-body{0%,to{transform:translate(-6px) rotate(-7deg)}25%{transform:translate(8px,-2px) rotate(8deg)}50%{transform:translate(-2px,3px) rotate(-3deg)}75%{transform:translate(6px,1px) rotate(5deg)}}@keyframes fa-search-look{0%,to{transform:translate(-12px,-1px)}25%{transform:translate(13px,-5px)}50%{transform:translate(-8px,7px)}75%{transform:translate(10px,2px)}}@keyframes fa-search-squint{0%,to{transform:scaleY(.2)}25%{transform:scaleY(.28)}50%{transform:scaleY(.14)}75%{transform:scaleY(.24)}}@keyframes fa-search-shadow{0%,to{transform:translate(-62%) scaleX(.96)}25%{transform:translate(-38%) scaleX(.96)}50%{transform:translate(-54%)}75%{transform:translate(-42%)}}@keyframes fa-fail-body{0%,8%{transform:translate(0) rotate(0)}12%{transform:translate(-8px) rotate(-3deg)}16%{transform:translate(8px) rotate(3deg)}20%{transform:translate(-5px,1px) rotate(-2deg)}24%{transform:translate(4px,1px) rotate(1deg)}36%,to{transform:translateY(8px) scale(.98,.94) rotate(-2deg)}}@keyframes fa-fail-look{0%,24%{transform:translate(0)}36%,to{transform:translateY(8px)}}@keyframes fa-fail-eye-l{0%,24%{transform:none}36%,78%{transform:translateY(2px) rotate(16deg) scaleY(.78)}88%,to{transform:translateY(2px) rotate(16deg) scaleY(.12)}}@keyframes fa-fail-eye-r{0%,24%{transform:none}36%,78%{transform:translateY(2px) rotate(-16deg) scaleY(.78)}88%,to{transform:translateY(2px) rotate(-16deg) scaleY(.12)}}@keyframes fa-fail-color{0%,18%{filter:saturate(1) brightness(1)}52%,90%{filter:saturate(.88) brightness(.92)}to{filter:saturate(1) brightness(1)}}@keyframes fa-fail-shadow{0%,24%{transform:translate(-50%) scaleX(1);opacity:.85}36%,to{transform:translate(-50%) scaleX(.82);opacity:.55}}@keyframes fa-sleep-body{0%,to{transform:translateY(6px) scale(1.01,.96)}50%{transform:translateY(10px) scale(1.03,.93)}}@keyframes fa-sleep-eye{0%,to{transform:scaleY(.08)}72%{transform:scaleY(.08)}76%{transform:scaleY(.28)}80%{transform:scaleY(.08)}}@keyframes fa-sleep-shadow{0%,to{transform:translate(-50%) scaleX(1.05);opacity:.7}50%{transform:translate(-50%) scaleX(1.12);opacity:.5}}@keyframes fa-zzz{0%,to{transform:translateY(6px);opacity:.2}40%{transform:translate(6px,-8px);opacity:.85}70%{transform:translate(12px,-18px);opacity:0}}@keyframes fa-done-color{0%,12%,to{--fa-green-core: #f0e0ff;--fa-green-mid: #b984ff;--fa-green-edge: #8b4cf0;--fa-green-deep: #5c28b8}32%,74%{--fa-green-core: #ffe8ff;--fa-green-mid: #d4a8ff;--fa-green-edge: #9b5af8;--fa-green-deep: #6a30c8}}@keyframes fa-done-body{0%,to{transform:scale(1)}14%{transform:scale(1.06,.92)}30%,70%{transform:translateY(5px) scale(.86,.78)}40%{transform:translateY(6px) scale(.84,.76) rotate(-1.2deg)}52%{transform:translateY(5px) scale(.87,.79) rotate(1.1deg)}64%{transform:translateY(5px) scale(.85,.77) rotate(-.6deg)}86%{transform:scale(1.02,.98)}}@keyframes fa-done-eye{0%,12%{transform:scaleY(1)}26%,76%{transform:scaleY(.08)}90%,to{transform:scaleY(.92)}}@keyframes fa-done-shadow{0%,to{transform:translate(-50%) scaleX(1);opacity:.75}16%{transform:translate(-50%) scaleX(.88);opacity:.55}34%,62%{transform:translate(-50%) scaleX(1.2);opacity:.9}80%{transform:translate(-50%) scaleX(1.02);opacity:.7}}@keyframes fa-greet-body{0%,to{transform:translateY(6px) rotate(-5deg) scale(.98,.95)}45%{transform:translateY(8px) rotate(-7deg) scale(.96,.93)}72%{transform:translateY(4px) rotate(-2deg) scale(.99,.97)}}@keyframes fa-greet-look{0%,to{transform:translate(-8px,11px)}45%{transform:translate(-10px,13px)}72%{transform:translate(-3px,8px)}}@keyframes fa-greet-eye-l{0%,to{transform:translateY(3px) rotate(14deg) scaleY(.62)}45%{transform:translateY(4px) rotate(16deg) scaleY(.42)}72%{transform:rotate(6deg) scaleY(.82)}}@keyframes fa-greet-eye-r{0%,to{transform:translateY(2px) rotate(-10deg) scaleY(.7)}45%{transform:translateY(3px) rotate(-12deg) scaleY(.5)}72%{transform:rotate(-4deg) scaleY(.9)}}@keyframes fa-greet-shadow{0%,to{transform:translate(-56%) scaleX(.92);opacity:.7}45%{transform:translate(-58%) scaleX(.86);opacity:.6}72%{transform:translate(-50%) scaleX(.96);opacity:.75}}@keyframes fa-ai-pose{0%{transform:translateY(4px) scale(.98,.95)}55%{transform:translateY(-4px) scale(1.03,1.05)}to{transform:translateY(-1px) scale(1)}}@keyframes fa-ai-breathe{0%,to{transform:translateY(-1px) scale(1)}50%{transform:translateY(-3px) scale(1.012,1.02)}}@keyframes fa-ai-look{0%{transform:translateY(2px)}to{transform:translateY(-3px)}}@keyframes fa-ai-focus{0%{transform:scaleX(1) scaleY(1)}to{transform:scaleX(.92) scaleY(.46) translateY(-1px)}}@keyframes fa-ai-blink{0%,78%,86%,to{transform:scaleX(.92) scaleY(.46) translateY(-1px)}82%{transform:scaleX(.92) scaleY(.08) translateY(-1px)}}@keyframes fa-ai-shadow{0%,to{transform:translate(-50%) scaleX(.96);opacity:.7}50%{transform:translate(-50%) scaleX(1.02);opacity:.82}}@keyframes fa-glasses-on{0%{opacity:0;transform:translateY(-34px) rotate(-7deg) scale(.9)}68%{opacity:1;transform:translateY(3px) rotate(1.5deg) scale(1.03)}to{opacity:1;transform:translateY(0) rotate(0) scale(1)}}@keyframes fa-glint{0%,18%,to{opacity:0}28%,40%{opacity:.95}52%{opacity:0}}@keyframes fa-ai-badge{0%{opacity:0;transform:translateY(6px) scale(.7)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes fa-wave{0%,to{transform:rotate(14deg)}50%{transform:rotate(-38deg)}}@media(max-width:980px){.fa-board{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.fa-board{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){.fa-rig,.fa-look,.fa-eye,.fa-shadow,.fa-drift,.fa-zzz,.fa-dots i,.fa-paw,.fa-search-icon,.fa-glasses,.fa-glint,.fa-ai-badge{animation:none!important}.fa-face[data-mood=ai] .fa-glasses,.fa-face[data-mood=ai] .fa-ai-mark,.fa-face[data-mood=ai] .fa-ai-badge{opacity:1;transform:none}.fa-face[data-mood=ai] .fa-eye{transform:scaleX(.92) scaleY(.46) translateY(-1px)}.fa-face[data-mood=ai] .fa-look{transform:translateY(-3px)}.fa-dots i{opacity:.85;transform:none}}', S = "face-animation-sdk";
function v() {
  if (typeof document > "u") return;
  let e = document.getElementById(S);
  e?.textContent !== T && (e || (e = document.createElement("style"), e.id = S, document.head.appendChild(e)), e.textContent = T);
}
const Y = [
  {
    id: "idle",
    title: "Следит за курсором",
    description: "Спокойно смотрит за мышью и иногда моргает."
  },
  {
    id: "think",
    title: "Думает",
    description: "Становится янтарным, взгляд уходит вверх, рядом загораются точки."
  },
  {
    id: "search",
    title: "Ищет",
    description: "Голубой, щурится и шарит взглядом, рядом яркая лупа."
  },
  {
    id: "fail",
    title: "Не получилось",
    description: "Краснеет, встряхивается и опускает взгляд."
  },
  {
    id: "sleep",
    title: "Уснул",
    description: "Серо-синий, глаза закрыты, тело тихо дышит."
  },
  {
    id: "done",
    title: "Закончено",
    description: "Фиолетовый и чуть напрягается."
  },
  {
    id: "greet",
    title: "Здоровается",
    description: "Розовый, стесняется и машет круглой лапкой."
  },
  {
    id: "ai",
    title: "AI",
    description: "Бирюзовый, надевает очки и показывает бейдж AI."
  }
];
function $(e) {
  const r = Y.find((o) => o.id === e);
  return r || Y[0];
}
const B = 13, R = 9, y = 700, x = [
  ".fa-rig",
  ".fa-look",
  ".fa-drift",
  ".fa-shadow",
  ".fa-blob",
  ".fa-eye.fa-left",
  ".fa-eye.fa-right"
];
function F(e) {
  const r = /* @__PURE__ */ new Map();
  for (const o of x) {
    const f = e.querySelector(o);
    if (!(f instanceof HTMLElement)) continue;
    const m = getComputedStyle(f);
    r.set(o, {
      transform: m.transform,
      filter: m.filter,
      opacity: m.opacity
    });
  }
  return r;
}
function E(e) {
  e.style.animation = "", e.style.transition = "", e.style.transform = "", e.style.filter = "", e.style.opacity = "";
}
function L(e) {
  for (const r of e.getAnimations()) {
    const o = r.effect;
    if (!o || !("getComputedTiming" in o)) continue;
    const f = o.getComputedTiming(), m = typeof f.duration == "number" ? f.duration : 0, h = typeof f.delay == "number" ? f.delay : 0;
    r.currentTime = f.iterations === 1 / 0 ? h : h + m;
  }
}
function H(e) {
  const r = getComputedStyle(e);
  return {
    transform: r.transform,
    filter: r.filter,
    opacity: r.opacity
  };
}
function j({
  mood: e = "idle",
  size: r = 1,
  trackCursor: o = !0,
  className: f,
  style: m
}) {
  const h = u(null), N = u(null), z = u(null), b = u(!1), k = u(0), X = e === "idle" && o;
  v(), q(() => {
    const n = h.current;
    if (!n) return;
    const c = n.dataset.mood;
    if (c === e) return;
    const p = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!c || p) {
      n.dataset.mood = e;
      return;
    }
    const g = F(n);
    for (const s of x) {
      const t = n.querySelector(s);
      t instanceof HTMLElement && E(t);
    }
    n.dataset.mood = e;
    const l = /* @__PURE__ */ new Map();
    for (const s of x) {
      const t = n.querySelector(s);
      t instanceof HTMLElement && (L(t), l.set(s, H(t)), t.style.animation = "none");
    }
    window.clearTimeout(k.current), b.current = !0;
    for (const s of x) {
      const t = n.querySelector(s), i = g.get(s);
      !(t instanceof HTMLElement) || !i || (t.style.animation = "none", t.style.transition = "none", t.style.transform = i.transform, t.style.filter = i.filter, t.style.opacity = i.opacity);
    }
    n.getBoundingClientRect();
    for (const s of x) {
      const t = n.querySelector(s), i = l.get(s);
      !(t instanceof HTMLElement) || !i || (t.style.transition = `transform ${y}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${y}ms ease, opacity ${y}ms ease`, t.style.transform = i.transform, t.style.filter = i.filter, t.style.opacity = i.opacity);
    }
    k.current = window.setTimeout(() => {
      b.current = !1;
      for (const s of x) {
        const t = n.querySelector(s);
        t instanceof HTMLElement && (E(t), L(t));
      }
    }, y);
  }, [e]), w(() => {
    if (!X) return;
    const n = (c) => {
      const p = N.current, g = z.current;
      if (!p || !g || b.current) return;
      const l = p.getBoundingClientRect(), s = c.clientX - (l.left + l.width / 2), t = c.clientY - (l.top + l.height / 2), i = Math.atan2(t, s), M = Math.min(Math.hypot(s, t) / 180, 1), A = Math.cos(i) * M * B, I = Math.sin(i) * M * R;
      g.style.transform = `translate(${A.toFixed(2)}px, ${I.toFixed(2)}px)`;
    };
    return window.addEventListener("pointermove", n), () => window.removeEventListener("pointermove", n);
  }, [X]), w(() => () => window.clearTimeout(k.current), []), w(() => {
    const n = h.current;
    if (!n || e !== "idle") return;
    let c = 0, p = 0;
    const g = () => {
      n.classList.add("fa-blink"), p = window.setTimeout(() => n.classList.remove("fa-blink"), 130), c = window.setTimeout(g, 2600 + Math.random() * 2400);
    }, l = window.setTimeout(g, 900);
    return () => {
      window.clearTimeout(l), window.clearTimeout(c), window.clearTimeout(p), n.classList.remove("fa-blink");
    };
  }, [e]);
  const C = $(e);
  return /* @__PURE__ */ a(
    "div",
    {
      className: f ? `fa-slot ${f}` : "fa-slot",
      style: {
        width: 230 * r,
        height: 170 * r,
        "--fa-size": String(r),
        ...m
      },
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: h,
          className: "fa-face",
          role: "img",
          "aria-label": C.title,
          style: r === 1 ? void 0 : { transform: `scale(${r})` },
          children: [
            /* @__PURE__ */ a("div", { className: "fa-shadow" }),
            /* @__PURE__ */ a("div", { className: "fa-rig", children: /* @__PURE__ */ d("div", { className: "fa-blob", ref: N, children: [
              /* @__PURE__ */ a("div", { className: "fa-drift", children: /* @__PURE__ */ d("div", { className: "fa-look", ref: z, children: [
                /* @__PURE__ */ a("span", { className: "fa-eye fa-left" }),
                /* @__PURE__ */ a("span", { className: "fa-eye fa-right" })
              ] }) }),
              /* @__PURE__ */ a("span", { className: "fa-blush fa-blush-left", "aria-hidden": "true" }),
              /* @__PURE__ */ a("span", { className: "fa-blush fa-blush-right", "aria-hidden": "true" }),
              /* @__PURE__ */ a("span", { className: "fa-paw", "aria-hidden": "true", children: /* @__PURE__ */ a("span", { className: "fa-paw-hand" }) }),
              /* @__PURE__ */ d("svg", { className: "fa-glasses", viewBox: "0 0 120 52", "aria-hidden": "true", children: [
                /* @__PURE__ */ a("path", { className: "fa-glasses-arm", d: "M16 24 2 18" }),
                /* @__PURE__ */ a("path", { className: "fa-glasses-arm", d: "M104 24 118 18" }),
                /* @__PURE__ */ a("rect", { className: "fa-lens", x: "14", y: "8", width: "40", height: "36", rx: "13" }),
                /* @__PURE__ */ a("rect", { className: "fa-lens", x: "66", y: "8", width: "40", height: "36", rx: "13" }),
                /* @__PURE__ */ a("path", { className: "fa-bridge", d: "M54 26h12" }),
                /* @__PURE__ */ a("path", { className: "fa-glint", d: "M24 18c5-5 12-5 16 1" })
              ] })
            ] }) }),
            /* @__PURE__ */ a("span", { className: "fa-mark fa-think-dots", "aria-hidden": "true", children: /* @__PURE__ */ a("span", { className: "fa-chip", children: /* @__PURE__ */ d("span", { className: "fa-dots", children: [
              /* @__PURE__ */ a("i", {}),
              /* @__PURE__ */ a("i", {}),
              /* @__PURE__ */ a("i", {})
            ] }) }) }),
            /* @__PURE__ */ a("span", { className: "fa-mark fa-search-mark", "aria-hidden": "true", children: /* @__PURE__ */ d("span", { className: "fa-chip fa-chip-search", children: [
              /* @__PURE__ */ d("svg", { className: "fa-search-icon", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
                /* @__PURE__ */ a("circle", { cx: "10", cy: "10", r: "6.2", fill: "none", stroke: "currentColor", strokeWidth: "3" }),
                /* @__PURE__ */ a("path", { d: "M14.6 14.8 20 20.2", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" })
              ] }),
              /* @__PURE__ */ d("span", { className: "fa-dots", children: [
                /* @__PURE__ */ a("i", {}),
                /* @__PURE__ */ a("i", {}),
                /* @__PURE__ */ a("i", {})
              ] })
            ] }) }),
            /* @__PURE__ */ a("span", { className: "fa-mark fa-sleep-mark", "aria-hidden": "true", children: /* @__PURE__ */ a("span", { className: "fa-zzz", children: "z" }) }),
            /* @__PURE__ */ a("span", { className: "fa-mark fa-ai-mark", "aria-hidden": "true", children: /* @__PURE__ */ a("span", { className: "fa-ai-badge", children: "AI" }) })
          ]
        }
      )
    }
  );
}
function D({ className: e, style: r }) {
  return v(), /* @__PURE__ */ a(
    "section",
    {
      className: e ? `fa-board ${e}` : "fa-board",
      style: r,
      "aria-label": "Все состояния",
      children: Y.map((o) => /* @__PURE__ */ d("article", { className: "fa-cell", children: [
        /* @__PURE__ */ a("div", { className: "fa-stage", children: /* @__PURE__ */ a(j, { mood: o.id }) }),
        /* @__PURE__ */ a("h2", { children: o.title }),
        /* @__PURE__ */ a("p", { children: o.description })
      ] }, o.id))
    }
  );
}
v();
export {
  Y as FACE_MOODS,
  j as Face,
  D as FaceBoard
};
