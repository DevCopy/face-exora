export declare const FACE_MOODS: readonly [{
    readonly id: "idle";
    readonly title: "Следит за курсором";
    readonly description: "Спокойно смотрит за мышью и иногда моргает.";
}, {
    readonly id: "think";
    readonly title: "Думает";
    readonly description: "Взгляд уходит вверх, рядом по очереди загораются точки.";
}, {
    readonly id: "search";
    readonly title: "Ищет";
    readonly description: "Щурится и шарит взглядом, рядом лупа и точки.";
}, {
    readonly id: "fail";
    readonly title: "Не получилось";
    readonly description: "Встряхивается и опускает взгляд.";
}, {
    readonly id: "sleep";
    readonly title: "Уснул";
    readonly description: "Глаза закрыты, тело тихо дышит.";
}, {
    readonly id: "done";
    readonly title: "Закончено";
    readonly description: "Чуть фиолетовеет и напрягается.";
}, {
    readonly id: "greet";
    readonly title: "Здоровается";
    readonly description: "Немного стесняется и машет круглой лапкой.";
}, {
    readonly id: "ai";
    readonly title: "AI";
    readonly description: "Сразу подписывается, надевает очки и становится умным.";
}];
export type FaceMood = (typeof FACE_MOODS)[number]["id"];
export type FaceMoodInfo = (typeof FACE_MOODS)[number];
export declare function moodInfo(mood: FaceMood): FaceMoodInfo;
