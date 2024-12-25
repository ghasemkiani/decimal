import D from "decimal.js";

D.config({ precision: 200 });
const d = (bi) => D(typeof bi === "bigint" ? String(bi) : bi);

export { d };
