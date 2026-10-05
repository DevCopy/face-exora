export const FACE_MOODS = [
  {
    id: "idle",
    title: "Следит за курсором",
    description: "Спокойно смотрит за мышью и иногда моргает.",
  },
  {
    id: "think",
    title: "Думает",
    description: "Взгляд уходит вверх, рядом по очереди загораются точки.",
  },
  {
    id: "search",
    title: "Ищет",
    description: "Щурится и шарит взглядом, рядом лупа и точки.",
  },
  {
    id: "fail",
    title: "Не получилось",
    description: "Встряхивается и опускает взгляд.",
  },
  {
    id: "sleep",
    title: "Уснул",
    description: "Глаза закрыты, тело тихо дышит.",
  },
  {
    id: "done",
    title: "Закончено",
    description: "Чуть фиолетовеет и напрягается.",
  },
  {
    id: "greet",
    title: "Здоровается",
    description: "Немного стесняется и машет круглой лапкой.",
  },
  {
    id: "ai",
    title: "AI",
    description: "Сразу подписывается, надевает очки и становится умным.",
  },
] as const;

export type FaceMood = (typeof FACE_MOODS)[number]["id"];

export type FaceMoodInfo = (typeof FACE_MOODS)[number];

export function moodInfo(mood: FaceMood): FaceMoodInfo {
  const info = FACE_MOODS.find((item) => item.id === mood);
  if (!info) return FACE_MOODS[0];
  return info;
}
