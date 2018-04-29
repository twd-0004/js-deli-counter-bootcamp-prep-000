var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  var position = katzDeli.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing() {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Now serving ${name}`
  }
}