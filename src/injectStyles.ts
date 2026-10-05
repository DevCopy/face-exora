import faceCss from "./face.css?inline";

const STYLE_ID = "face-animation-sdk";

export function injectFaceStyles() {
  if (typeof document === "undefined") return;
  let style = document.getElementById(STYLE_ID);
  if (style?.textContent === faceCss) return;
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  style.textContent = faceCss;
}
