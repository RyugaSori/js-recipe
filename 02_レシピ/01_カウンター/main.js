const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const mainasubutton = document.getElementById("mainasu-button")
const nibaibutton = document.getElementById("nibai-button")

let count = 0
plusButton.onclick = function() {
  count += 1
  display.textContent = count
}
mainasubutton.onclick = function() {
  count -= 1
  display.textContent = count
}
nibaibutton.onclick = function() {
  count *= 2
  display.textContent = count
}
