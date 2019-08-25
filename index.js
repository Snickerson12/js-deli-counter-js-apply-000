function takeANumber(num, client) {
  num.push(client);
  return`Welcome, ${client}. You are number ${num.length} in line.`; 
}

function nowServing(num) {
  if (num.length === 0) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${num.shift()}.`;
}

function currentLine(num) {
  if (num.length === 0) {
    return "The line is currently empty.";
  }

  const DealiDeli = [];

  for (let i = 0, l = num.length; i < l; i++) {
    DealiDeli.push(`${i + 1}. ${num[i]}`);
  }
  return `The line is currently: ${DealiDeli.join(', ')}`;
}

