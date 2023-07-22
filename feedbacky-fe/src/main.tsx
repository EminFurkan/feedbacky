import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/styles.scss';
import "@trendyol/baklava";
import "@trendyol/baklava/dist/themes/default.css";
import { setIconPath } from "@trendyol/baklava";
setIconPath("https://cdn.jsdelivr.net/npm/@trendyol/baklava@2.1.0/dist/assets");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
