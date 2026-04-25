# AGENTS 協作開發指南

本文件提供人類開發者與 AI agent 在本專案共同作業時的固定流程。

## 1. 開發前必讀

每次開始任務前，請先閱讀：

- `docs/PROJECT_SPEC.md`
- 本文件 `AGENTS.md`

若需求與實作衝突，以 `docs/PROJECT_SPEC.md` 為主。

## 2. 專案目標摘要

- 建立行動裝置優先的多語系互動遊戲「寶箱怪挑戰」
- 完成三階段流程：首頁 -> 戰鬥 -> 開寶箱
- 支援四語系：繁中、簡中、日文、英文
- 實作可配置的劇本排除與有寶物自動關閉規則
- 提供可安裝與離線啟動能力的 PWA

## 3. 推薦技術切分

- UI/頁面：Vue SFC + PrimeVue
- 狀態管理：VueUse composable + localStorage（遊戲狀態 + 設定）
- 多語系：vue-i18n
- 業務邏輯：純 TypeScript 模組（易測試）
- PWA：vite-plugin-pwa

## 4. 建議資料夾結構

```text
src/
  app/
    router-state.ts
  composables/
    useGameSettings.ts
  i18n/
    index.ts
    locales/
      zh-TW.ts
      zh-CN.ts
      ja.ts
      en.ts
  game/
    scenes/
      battle-scenes.ts
      chest-scenes.ts
    services/
      random.ts
      scene-picker.ts
    types.ts
  components/
    HomeView.vue
    BattleView.vue
    ChestView.vue
    SettingsPanel.vue
```

## 5. Agent 任務執行標準

每個任務都應遵守以下步驟：

1. 先定義任務範圍與受影響檔案
2. 實作最小可行變更（避免無關重構）
3. 更新或補充文件（若需求、流程或資料結構有改動）
4. 執行驗證指令
5. 回報結果與風險

## 6. 驗證指令

```bash
npm run build
npm run dev
```

PWA 驗證最少需補充：

- build 後確認 `dist/manifest.webmanifest` 存在
- build 後確認 `dist/sw.js` 或等價 service worker 檔案存在

若新增測試框架，請補上對應指令並更新此段。

## 7. 定義完成（Definition of Done）

- 需求符合 `docs/PROJECT_SPEC.md` 對應章節
- 不破壞既有流程與語系切換
- 所有新增文案具備四語系 key
- 劇本排除規則可正確影響抽選
- 有寶物結局命中後會關閉 `treasureEnabled`
- 已完成基本建置驗證（至少 `npm run build`）
- PWA 產物與安裝流程可用（manifest + service worker）

## 8. 建議提問模板（給 Agent）

### 8.1 功能實作

```text
請依 docs/PROJECT_SPEC.md 實作「首頁 -> 戰鬥 -> 開寶箱」最小流程。
限制：
1) 使用 Pinia 管理狀態
2) 使用 vue-i18n 提供 zh-TW/zh-CN/ja/en
3) UI 元件使用 PrimeVue
完成後請執行 npm run build 並回報修改檔案與驗證結果。
```

### 8.2 規則修正

```text
請修正寶箱抽選規則：當抽中有寶物劇情後，自動關閉 treasureEnabled，並確保後續抽選不再出現有寶物劇情。
請補上必要測試或至少提供可重現驗證步驟。
```

### 8.3 文件同步

```text
請檢查目前實作與 docs/PROJECT_SPEC.md 是否一致。
若不一致，請先列出差異，再更新文件或程式碼使其一致。
```

## 9. 協作原則

- 優先可讀性與可維護性
- 變更越小越好，避免一次處理過多需求
- 文件與程式碼同步更新，不留下規格落差
