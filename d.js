import D from "decimal.js";

D.config({ precision: 200 });
const d = (bi) => D(typeof bi === "bigint" ? String(bi) : bi);

D.prototype.asFixed = function (n) {
  return this.toFixed(n, D.ROUND_DOWN);
};

export { d, D };
export default D;
