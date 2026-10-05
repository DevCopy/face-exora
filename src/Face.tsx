import { useEffect, useLayoutEffect, useRef, type CSSProperties } from "react";
import { injectFaceStyles } from "./injectStyles";
import { moodInfo, type FaceMood } from "./moods";

const MAX_X = 13;
const MAX_Y = 9;
const BLEND_MS = 700;
const PARTS = [
  ".fa-rig",
  ".fa-look",
  ".fa-drift",
  ".fa-shadow",
  ".fa-blob",
  ".fa-eye.fa-left",
  ".fa-eye.fa-right",
] as const;

type Pose = { transform: string; filter: string; opacity: string };

function capturePoses(face: HTMLElement) {
  const poses = new Map<string, Pose>();
  for (const selector of PARTS) {
    const el = face.querySelector(selector);
    if (!(el instanceof HTMLElement)) continue;
    const style = getComputedStyle(el);
    poses.set(selector, {
      transform: style.transform,
      filter: style.filter,
      opacity: style.opacity,
    });
  }
  return poses;
}

function clearPose(el: HTMLElement) {
  el.style.animation = "";
  el.style.transition = "";
  el.style.transform = "";
  el.style.filter = "";
  el.style.opacity = "";
}

function seekSettled(el: HTMLElement) {
  for (const anim of el.getAnimations()) {
    const effect = anim.effect;
    if (!effect || !("getComputedTiming" in effect)) continue;
    const timing = effect.getComputedTiming();
    const duration = typeof timing.duration === "number" ? timing.duration : 0;
    const delay = typeof timing.delay === "number" ? timing.delay : 0;
    anim.currentTime = timing.iterations === Infinity ? delay : delay + duration;
  }
}

function readPose(el: HTMLElement): Pose {
  const style = getComputedStyle(el);
  return {
    transform: style.transform,
    filter: style.filter,
    opacity: style.opacity,
  };
}

export type FaceProps = {
  /** Настроение. По умолчанию лицо следит за курсором. */
  mood?: FaceMood;
  /** Масштаб относительно базового размера 230×170. */
  size?: number;
  /** Для `idle` смотреть за указателем. По умолчанию включено. */
  trackCursor?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Face({
  mood = "idle",
  size = 1,
  trackCursor = true,
  className,
  style,
}: FaceProps) {
  const faceRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const lookRef = useRef<HTMLDivElement>(null);
  const blending = useRef(false);
  const blendTimer = useRef(0);
  const follow = mood === "idle" && trackCursor;

  injectFaceStyles();

  useLayoutEffect(() => {
    const face = faceRef.current;
    if (!face) return;

    const previous = face.dataset.mood;
    if (previous === mood) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!previous || reduced) {
      face.dataset.mood = mood;
      return;
    }

    const from = capturePoses(face);
    for (const selector of PARTS) {
      const el = face.querySelector(selector);
      if (el instanceof HTMLElement) clearPose(el);
    }

    face.dataset.mood = mood;
    const to = new Map<string, Pose>();
    for (const selector of PARTS) {
      const el = face.querySelector(selector);
      if (!(el instanceof HTMLElement)) continue;
      seekSettled(el);
      to.set(selector, readPose(el));
      el.style.animation = "none";
    }
    window.clearTimeout(blendTimer.current);
    blending.current = true;

    for (const selector of PARTS) {
      const el = face.querySelector(selector);
      const pose = from.get(selector);
      if (!(el instanceof HTMLElement) || !pose) continue;
      el.style.animation = "none";
      el.style.transition = "none";
      el.style.transform = pose.transform;
      el.style.filter = pose.filter;
      el.style.opacity = pose.opacity;
    }

    face.getBoundingClientRect();

    for (const selector of PARTS) {
      const el = face.querySelector(selector);
      const pose = to.get(selector);
      if (!(el instanceof HTMLElement) || !pose) continue;
      el.style.transition = `transform ${BLEND_MS}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${BLEND_MS}ms ease, opacity ${BLEND_MS}ms ease`;
      el.style.transform = pose.transform;
      el.style.filter = pose.filter;
      el.style.opacity = pose.opacity;
    }

    blendTimer.current = window.setTimeout(() => {
      blending.current = false;
      for (const selector of PARTS) {
        const el = face.querySelector(selector);
        if (el instanceof HTMLElement) {
          clearPose(el);
          seekSettled(el);
        }
      }
    }, BLEND_MS);
  }, [mood]);

  useEffect(() => {
    if (!follow) return;

    const onMove = (event: PointerEvent) => {
      const blob = blobRef.current;
      const look = lookRef.current;
      if (!blob || !look || blending.current) return;
      const rect = blob.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const angle = Math.atan2(dy, dx);
      const reach = Math.min(Math.hypot(dx, dy) / 180, 1);
      const x = Math.cos(angle) * reach * MAX_X;
      const y = Math.sin(angle) * reach * MAX_Y;
      look.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [follow]);

  useEffect(() => {
    return () => window.clearTimeout(blendTimer.current);
  }, []);

  useEffect(() => {
    const face = faceRef.current;
    if (!face || mood !== "idle") return;

    let blinkTimer = 0;
    let holdTimer = 0;
    const blink = () => {
      face.classList.add("fa-blink");
      holdTimer = window.setTimeout(() => face.classList.remove("fa-blink"), 130);
      blinkTimer = window.setTimeout(blink, 2600 + Math.random() * 2400);
    };
    const start = window.setTimeout(blink, 900);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(blinkTimer);
      window.clearTimeout(holdTimer);
      face.classList.remove("fa-blink");
    };
  }, [mood]);

  const info = moodInfo(mood);

  return (
    <div
      className={className ? `fa-slot ${className}` : "fa-slot"}
      style={{ width: 230 * size, height: 170 * size, ...style }}
    >
      <div
        ref={faceRef}
        className="fa-face"
        role="img"
        aria-label={info.title}
        style={size === 1 ? undefined : { transform: `scale(${size})` }}
      >
        <div className="fa-shadow" />
        <div className="fa-rig">
          <div className="fa-blob" ref={blobRef}>
            <div className="fa-drift">
              <div className="fa-look" ref={lookRef}>
                <span className="fa-eye fa-left" />
                <span className="fa-eye fa-right" />
              </div>
            </div>
            <span className="fa-blush fa-blush-left" aria-hidden="true" />
            <span className="fa-blush fa-blush-right" aria-hidden="true" />
            <span className="fa-paw" aria-hidden="true">
              <span className="fa-paw-hand" />
            </span>
            <svg className="fa-glasses" viewBox="0 0 120 52" aria-hidden="true">
              <path className="fa-glasses-arm" d="M16 24 2 18" />
              <path className="fa-glasses-arm" d="M104 24 118 18" />
              <rect className="fa-lens" x="14" y="8" width="40" height="36" rx="13" />
              <rect className="fa-lens" x="66" y="8" width="40" height="36" rx="13" />
              <path className="fa-bridge" d="M54 26h12" />
              <path className="fa-glint" d="M24 18c5-5 12-5 16 1" />
            </svg>
          </div>
        </div>
        <span className="fa-dots fa-think-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="fa-search-mark" aria-hidden="true">
          <svg className="fa-search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10" cy="10" r="6.2" fill="none" stroke="currentColor" strokeWidth="2.6" />
            <path d="M14.6 14.8 20 20.2" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
          <span className="fa-dots">
            <i />
            <i />
            <i />
          </span>
        </span>
        <span className="fa-zzz" aria-hidden="true">
          z
        </span>
        <span className="fa-ai-badge" aria-hidden="true">
          AI
        </span>
      </div>
    </div>
  );
}
