function fToC(f) {
  return (f - 32) * 5 / 9;
}

function cToF(c) {
  return c * 9 / 5 + 32;
}

function clickfToC() {
  let input = document.getElementById("temp");
  let convtemp = cToF(parseFloat(input.value));
  let output = document.getElementById("result");
  output.textContext = convtemp;
}

function clickcToF() {
  let input = document.getElementById("temp");
  let convtemp = fToC(parseFloat(input.value));
  let output = document.getElementById("result");
    output.textContext = convtemp;
}
