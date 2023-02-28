export default function duration(ms) {
  let minutes = parseFloat(ms) / 60;
  return minutes.toFixed(2);
}
