import store from "../Store";
import { toFixeds } from "../common/func";
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      console.log(store);
      var clientWidth = docEl.clientWidth,
        clientHeig = docEl.clientHeight;
      if (!clientWidth) return;
      if (clientWidth >= 750) {
        docEl.style.fontSize = "100px";
        store.commit("SET_FONTSIZE", 100);
      } else {
        var size = toFixeds(100 * (clientWidth / 750), 4);
        docEl.style.fontSize = toFixeds(size, 4) + "px";
        store.commit("SET_FONTSIZE", size);
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
