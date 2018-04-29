var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  var position = katzDeli.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${name}.`
  }
}