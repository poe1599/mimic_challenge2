# 寶箱怪挑戰 - 專案需求規格

## 1. 專案定位

本專案為行動裝置優先（mobile-first）的多語系互動遊戲網站。

- 遊戲名稱：寶箱怪挑戰
- 類型：文字敘事 + 隨機結局
- 語系：繁體中文、簡體中文、日文、英文
- 核心體驗：每次挑戰會隨機進入不同劇本與結局

## 2. 目標與範圍

### 2.1 核心目標

- 提供簡單直覺的單局互動流程
- 以劇本隨機性提高重玩性
- 允許玩家在設定中排除特定劇本
- 支援完整四語系 UI 與劇本內容
- 支援可安裝的 PWA（可加入主畫面與離線啟動）
- UI 組件採用 PrimeVue

## 3. 遊戲流程

## 3.1 進入遊戲（首頁）

畫面包含以下元素：

- 遊戲標題「寶箱怪挑戰」
- 挑戰開始按鈕
- 語系切換選單
- 設定按鈕（可開啟設定面板）

使用者操作：

- 點擊語系切換選單：切換語言
- 點擊設定按鈕：開啟設定
  - 開關「結局是否有寶物」
  - 勾選可使用的劇本選項（未勾選者將從隨機池排除）
- 點擊挑戰開始：進入戰鬥結果階段

## 3.2 開始遊戲（戰鬥結果階段）

- 系統從戰鬥劇本池隨機選擇一段敘事
- 戰鬥劇本結果分為：勝利 / 失敗

對應操作：

- 失敗：顯示「挑戰失敗」按鈕，點擊返回首頁
- 勝利：顯示「打開寶箱」按鈕，點擊進入下一階段

補充：

- 戰鬥劇本池需受設定勾選控制，可排除指定劇本

## 3.3 打開寶箱（結局階段）

- 系統從寶箱劇本池隨機選擇一段敘事
- 顯示「結束」按鈕，點擊返回首頁
- 寶箱劇本池同樣受設定勾選控制，可排除指定劇本

特殊規則：

- 若本次抽中「有寶物」劇情，系統需自動關閉設定中的「有寶物」開關
- 自動關閉後，後續抽選都需排除有寶物劇情，直到再次手動開啟為止

## 4. 功能需求

## 4.0.1 UI 組件框架

- 本專案 UI 組件統一使用 PrimeVue
- 若需新增按鈕、輸入、對話框等元件，優先使用 PrimeVue 元件
- 允許以自訂 CSS 微調樣式，但避免替換成其他大型 UI 框架

## 4.0 PWA

- 提供 Web App Manifest（名稱、短名稱、圖示、啟動畫面顏色）
- 註冊 Service Worker 並快取必要靜態資源
- 支援安裝為行動裝置主畫面 App
- 在離線狀態下至少可啟動已快取的應用殼層（App Shell）
- 正式版建置需輸出 PWA 相關檔案（manifest 與 service worker）

## 4.1 多語系（i18n）

- 支援語言：`zh-TW`、`zh-CN`、`ja`、`en`
- 所有可見文字需可切換語系：
  - UI 文案（標題、按鈕、設定標籤）
  - 劇本內容（戰鬥與寶箱）
  - 提示與空狀態訊息

建議：語系 key 在四種語言保持相同結構，避免遺漏。

## 4.2 設定系統

- 設定項目：
  - 是否允許有寶物結局（boolean）
  - 戰鬥劇本可用清單（checkbox group）
  - 寶箱劇本可用清單（checkbox group）
- 勾選狀態應立即影響隨機池
- 需處理極端狀況：
  - 若可用劇本清單為空，需顯示提示並阻止進入對應流程

## 4.3 隨機抽選

- 戰鬥階段：僅從可用戰鬥劇本中抽選
- 寶箱階段：僅從可用寶箱劇本中抽選
- 需保證抽選邏輯可測試（可替換隨機函式或注入種子）

## 4.4 導頁與狀態

- 建議頁面狀態：`home`、`battle`、`chest`
- 狀態轉移：
  - `home -> battle`
  - `battle(lose) -> home`
  - `battle(win) -> chest`
  - `chest -> home`

## 5. 資料模型建議

```ts
export type Locale = 'zh-TW' | 'zh-CN' | 'ja' | 'en'

export type SceneType = 'battle' | 'chest'

export interface BattleScene {
  id: string
  enabled: boolean
  result: 'win' | 'lose'
  text: Record<Locale, string>
}

export interface ChestScene {
  id: string
  enabled: boolean
  hasTreasure: boolean
  text: Record<Locale, string>
}

export interface GameSettings {
  treasureEnabled: boolean
  enabledBattleSceneIds: string[]
  enabledChestSceneIds: string[]
}
```

## 6. 驗收條件（Acceptance Criteria）

- 首頁必須顯示：標題、開始按鈕、語系選單、設定按鈕
- 語系切換後，UI 與劇本文字要立即反映
- 戰鬥失敗時只可返回首頁
- 戰鬥勝利時可進入開寶箱階段
- 開寶箱後可結束並返回首頁
- 被設定排除的劇本不會出現在抽選結果
- 抽中有寶物結局後，`treasureEnabled` 會被自動關閉
- 可在支援瀏覽器看到安裝提示或手動安裝選項
- 正式版輸出含 `manifest.webmanifest` 與 service worker 檔案
- 於離線模式重新開啟時，至少可進入應用初始畫面

## 7. 目前程式現況（截至 2026-04-26）

- 專案為 Vue 3 + TypeScript + Vite
- 畫面仍為範本內容（尚未進入遊戲實作）
- 已安裝套件包含 `pinia` 與 `vue-i18n`，可作為狀態管理與多語系基礎

## 8. 開發建議里程碑

1. 建立基本畫面與頁面狀態機（home/battle/chest）
2. 建立 i18n 字典與語系切換
3. 建立劇本資料結構與抽選邏輯
4. 建立設定面板與勾選排除功能
5. 補上有寶物自動關閉規則
6. 導入 PWA（manifest、service worker、安裝流程）
7. 撰寫核心邏輯單元測試與基本互動測試
