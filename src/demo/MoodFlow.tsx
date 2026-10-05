import { useEffect, useState } from "react";
import { Face, FACE_MOODS, type FaceMood } from "../index";
import { moodInfo } from "../moods";

const STEP_MS = 3200;

export function MoodFlow() {
  const [mood, setMood] = useState<FaceMood>(FACE_MOODS[0].id);
  const [cycle, setCycle] = useState(0);
  const info = moodInfo(mood);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      setMood((current) => {
        const index = FACE_MOODS.findIndex((item) => item.id === current);
        const next = FACE_MOODS[(index + 1) % FACE_MOODS.length];
        return next.id;
      });
    }, STEP_MS);

    return () => window.clearInterval(timer);
  }, [cycle]);

  return (
    <section className="flow" aria-label="Смена состояний">
      <div className="flow-stage">
        <Face mood={mood} />
      </div>
      <div className="flow-copy">
        <p className="flow-kicker">Общий пример</p>
        <h2>{info.title}</h2>
        <p>{info.description}</p>
        <div className="flow-steps" role="tablist" aria-label="Состояния">
          {FACE_MOODS.map((item) => {
            const active = item.id === mood;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={active ? "flow-step is-active" : "flow-step"}
                onClick={() => {
                  setMood(item.id);
                  setCycle((value) => value + 1);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
