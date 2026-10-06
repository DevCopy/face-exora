export declare const FACE_MOODS: readonly [{
    readonly id: "idle";
    readonly title: "Следит за курсором";
    readonly description: "Спокойно смотрит за мышью и иногда моргает.";
}, {
    readonly id: "think";
    readonly title: "Думает";
    readonly description: "Становится янтарным, взгляд уходит вверх, рядом загораются точки.";
}, {
    readonly id: "search";
    readonly title: "Ищет";
    readonly description: "Голубой, щурится и шарит взглядом, рядом яркая лупа.";
}, {
    readonly id: "fail";
    readonly title: "Не получилось";
    readonly description: "Краснеет, встряхивается и опускает взгляд.";
}, {
    readonly id: "sleep";
    readonly title: "Уснул";
    readonly description: "Серо-синий, глаза закрыты, тело тихо дышит.";
}, {
    readonly id: "done";
    readonly title: "Закончено";
    readonly description: "Фиолетовый и чуть напрягается.";
}, {
    readonly id: "greet";
    readonly title: "Здоровается";
    readonly description: "Розовый, стесняется и машет круглой лапкой.";
}, {
    readonly id: "ai";
    readonly title: "AI";
    readonly description: "Бирюзовый, надевает очки и показывает бейдж AI.";
}];
export type FaceMood = (typeof FACE_MOODS)[number]["id"];
export type FaceMoodInfo = (typeof FACE_MOODS)[number];
export declare function moodInfo(mood: FaceMood): FaceMoodInfo;
