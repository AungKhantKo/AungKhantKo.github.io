// search
import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });

// feature
function initProps(el) {
  const scrollMultiple = 5;
  var imageHeight = el.height;
  el.style.bottom = `-${imageHeight - 350}px`;
  el.style.setProperty("--top", `-${imageHeight - 350}px`);
  el.style.setProperty(
    "--animation-duration",
    `${scrollMultiple * imageHeight}ms`
  );
}