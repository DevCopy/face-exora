# face-animation

React-компонент зелёного лица. Стили входят в пакет и подключаются при импорте, отдельный CSS не нужен.

Нужны React и React DOM 18 или новее. Пакет собран как ESM.

## Установка

Соберите пакет, затем поставьте его в приложение по пути к этой папке:

```bash
npm install github:пользователь/face-animation
```

## Использование

```tsx
import { Face } from "face-animation";

export function Status() {
  return <Face mood="think" />;
}
```

Смена `mood` уже бесшовная: лицо около 0,7 секунды переходит из текущей позы в новое состояние. Первый показ появляется сразу, без перехода из пустоты.

```tsx
import { useEffect, useState } from "react";
import { Face, type FaceMood } from "face-animation";

const STEPS: FaceMood[] = ["idle", "think", "search", "done"];

export function Status() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((current) => (current + 1) % STEPS.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  return <Face mood={STEPS[step]} />;
}
```

## Пропсы `Face`

| Проп | По умолчанию | Описание |
| --- | --- | --- |
| `mood` | `"idle"` | Настроение |
| `size` | `1` | Масштаб от базового размера 230×170 |
| `trackCursor` | `true` | В `idle` взгляд следует за указателем |
| `className` | — | Класс внешней обёртки |
| `style` | — | Стили внешней обёртки |

```tsx
<Face mood="search" size={0.8} />
<Face mood="idle" trackCursor={false} />
```

## Настроения

| `mood` | Что происходит |
| --- | --- |
| `idle` | Следит за курсором и иногда моргает |
| `think` | Взгляд уходит вверх, рядом загораются точки |
| `search` | Щурится и шарит взглядом, рядом лупа и точки |
| `fail` | Встряхивается и опускает взгляд |
| `sleep` | Глаза закрыты, тело тихо дышит |
| `done` | Чуть фиолетовеет и напрягается |
| `greet` | Стесняется и машет круглой лапкой |
| `ai` | Надевает очки и показывает бейдж AI |

Подписи и описания лежат в `FACE_MOODS`. Тип настроения — `FaceMood`.

Витрина всех состояний:

```tsx
import { FaceBoard } from "face-animation";

export function AllMoods() {
  return <FaceBoard />;
}
```

## Разработка

```bash
npm install
npm run dev
npm run build
```

`npm run dev` открывает демо на `http://127.0.0.1:5173/`: сверху лицо само проходит состояния, ниже каждое состояние по отдельности. `npm run build` собирает пакет в `dist/`.
