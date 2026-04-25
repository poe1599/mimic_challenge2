# 寶箱怪挑戰（mimic_challenge2）

行動裝置優先的多語系互動遊戲專案。

## 文件導覽

- 專案需求規格：`docs/PROJECT_SPEC.md`
- Agent 協作流程：`AGENTS.md`

## 開發指令

```bash
npm install
npm run dev
npm run build
```

## Docker 開發指令

```bash
docker compose run --rm workspace npm install
docker compose run --rm workspace npm run dev
docker compose run --rm workspace npm run build
```

## 技術棧

- Vue 3
- TypeScript
- Vite
- Pinia
- vue-i18n
- PrimeVue
- PWA（vite-plugin-pwa）

## UI 組件

- 本專案 UI 組件採用 PrimeVue

## PWA

- 需求規格：`docs/PROJECT_SPEC.md` 的 `4.0 PWA`
- 建置後應產出 manifest 與 service worker
- 可安裝至行動裝置主畫面，並支援離線啟動 App Shell

## 目前狀態

- 已完成專案規格與 Agent 協作文件
- 遊戲功能尚待實作（目前仍為模板畫面）
