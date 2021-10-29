// import sourceMapSupport from "source-map-support";
// import fetch from "node-fetch";
import { systemJSPrototype } from "../system-core.js";
// sourceMapSupport.install();

systemJSPrototype.shouldFetch = () => true;
systemJSPrototype.fetch = async (url) => {
  return fetch(url);
};
