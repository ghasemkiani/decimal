import D from "decimal.js";

D.config({ precision: 200 });
const d = (bi) => D(typeof bi === "bigint" ? String(bi) : bi);

D.prototype.asFixed = function (n) {
  return this.mul(10 ** n).truncated().div(10 ** n).toFixed(n);
};

export { d, D };
export default D;
