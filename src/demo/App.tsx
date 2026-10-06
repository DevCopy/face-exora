import { Face } from "../Face";
import { MoodFlow } from "./MoodFlow";
import "./demo.css";

export function App() {
  return (
    <main className="page">
      <MoodFlow />
      <section className="sizes" aria-label="Мелкие размеры">
        <h2>Мелкие размеры</h2>
        <div className="sizes-row">
          {(["idle", "think", "search", "fail", "sleep", "done", "greet", "ai"] as const).map((mood) => (
            <div key={mood} className="sizes-cell">
              <Face mood={mood} size={0.38} trackCursor={false} />
              <span>{mood}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
