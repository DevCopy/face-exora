import type { CSSProperties } from "react";
import { Face } from "./Face";
import { injectFaceStyles } from "./injectStyles";
import { FACE_MOODS } from "./moods";

export type FaceBoardProps = {
  className?: string;
  style?: CSSProperties;
};

export function FaceBoard({ className, style }: FaceBoardProps) {
  injectFaceStyles();

  return (
    <section
      className={className ? `fa-board ${className}` : "fa-board"}
      style={style}
      aria-label="Все состояния"
    >
      {FACE_MOODS.map((mood) => (
        <article key={mood.id} className="fa-cell">
          <div className="fa-stage">
            <Face mood={mood.id} />
          </div>
          <h2>{mood.title}</h2>
          <p>{mood.description}</p>
        </article>
      ))}
    </section>
  );
}
