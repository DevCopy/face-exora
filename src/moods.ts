export const FACE_MOODS = [
  {
    id: "idle",
    title: "Следит за курсором",
    description: "Спокойно смотрит за мышью и иногда моргает.",
  },
  {
    id: "think",
    title: "Думает",
    description: "Становится янтарным, взгляд уходит вверх, рядом загораются точки.",
  },
  {
    id: "search",
    title: "Ищет",
    description: "Голубой, щурится и шарит взглядом, рядом яркая лупа.",
  },
  {
    id: "fail",
    title: "Не получилось",
    description: "Краснеет, встряхивается и опускает взгляд.",
  },
  {
    id: "sleep",
    title: "Уснул",
    description: "Серо-синий, глаза закрыты, тело тихо дышит.",
  },
  {
    id: "done",
    title: "Закончено",
    description: "Фиолетовый и чуть напрягается.",
  },
  {
    id: "greet",
    title: "Здоровается",
    description: "Розовый, стесняется и машет круглой лапкой.",
  },
  {
    id: "ai",
    title: "AI",
    description: "Бирюзовый, надевает очки и показывает бейдж AI.",
  },
] as const;

export type FaceMood = (typeof FACE_MOODS)[number]["id"];

export type FaceMoodInfo = (typeof FACE_MOODS)[number];

export function moodInfo(mood: FaceMood): FaceMoodInfo {
  const info = FACE_MOODS.find((item) => item.id === mood);
  if (!info) return FACE_MOODS[0];
  return info;
}
