import { type CSSProperties } from "react";
import { type FaceMood } from "./moods";
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
export declare function Face({ mood, size, trackCursor, className, style, }: FaceProps): import("react").JSX.Element;
