import D from "decimal.js";

BigInt.prototype['toJSON'] = function () { return this.toString() }

D.config({ precision: 200 });
const d = (bi) => D(typeof bi === "bigint" ? String(bi) : bi);

D.prototype.asFixed = function (n) {
  return this.toFixed(n, D.ROUND_DOWN);
};

export { d, D };
export default D;
