var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  for (let i = 1; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i-1] === name) {
      break;
    }
  }
  return i
}