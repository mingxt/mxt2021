export function addZero (var1) {
  if (var1.toString().length === 1) {
    return '0' + var1.toString()
  }
  return var1.toString()
}
