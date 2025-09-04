import { initializeApp, getApps, getApp } from "firebase/app";
import { cfg } from "./config.js";

function hasAnyConfigValue(obj) {
  return Object.values(obj).some((v) => v && String(v).length > 0);
}

let app;
if (getApps().length) {
  app = getApp();
} else if (hasAnyConfigValue(cfg)) {
  app = initializeApp(cfg);
} else {
  app = undefined; // env not filled yet
}

export { app };
