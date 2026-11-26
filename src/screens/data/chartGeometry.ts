import type { ChartGeometry } from '../../components/LineChart/LineChart'

/**
 * Plot geometry copied from the Figma frames (px inside each chart frame). The Figma charts are
 * illustrative — markers are not placed to scale — so the screens pass these for a 1:1 match.
 * Source: specs/C-charts-strategy.md (node 5150:45789 and 3356:7556 / 3356:7557).
 */
export const opexGeometry: ChartGeometry = {
  width: 1101,
  height: 167,
  offsetY: 22, // chart frame is centred in the 211px "Chart Card"
  containerHeight: 211,
  tickY: [123, 93.5, 64, 35, 5.5], // $350M … $550M
  baselineY: 153.5,
  categoryX: [161, 429, 692, 955],
  points: [
    [[246.5, 63], [514.5, 65], null, null], // Actual
    [[246.5, 64], [514.5, 60], [777.5, 64], [1043, 52]], // Plan
    [null, null, [778, 42], [1042.5, 35]], // Plan (magenta)
  ],
  lines: [undefined, undefined, [[516, 68], [777, 43], [1041, 35]]],
}

export const staffingGeometry: ChartGeometry = {
  width: 1317,
  height: 321,
  points: [
    [[115, 157], [493.5, 173], null, null], // Actuals
    [[163, 134], [493, 147], [822.5, 83], [1152, 84]], // Plan
    [null, null, [814, 184], [1154, 245]], // Forecast
  ],
  lines: [undefined, undefined, [[493, 175], [814, 186], [1160, 246]]],
}

/** Screen 3265:11043 (strategy panel closed) draws the staffing chart differently (node 3268:4951). */
export const staffingGeometryInitial: ChartGeometry = {
  width: 1317,
  height: 321,
  points: [
    [[115, 157], [462.5, 173], null, null],
    [[163, 134], [510.5, 147], [862.5, 83], [1152, 84]],
    [null, null, [814, 184], [1104, 245]],
  ],
  lines: [undefined, undefined, [[463, 174], [814, 186], [1194, 245]]],
}

export const impactGeometry: ChartGeometry = {
  width: 1317,
  height: 321,
  containerHeight: 329, // Figma card is 504 tall (vs 496): x-axis labels sit 8px lower
  points: [
    [[164.5, 224], [496.5, 242], null, null],
    [[164.5, 239], [496.5, 233], [823.5, 209], [1154, 195]],
    [null, null, [823, 158], [1153.5, 122]],
  ],
  lines: [undefined, undefined, [[496, 242], [858, 159], [1203, 124]]],
}
