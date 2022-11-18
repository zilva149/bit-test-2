// VARIABLES
const form = document.getElementById("form");
const input = document.getElementById("email");

// EVENT LISTENERS
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  validateEmail(value);
  input.value = "";
});

// FUNCTIONS
function validateEmail(value) {
  const validDomains = [".com", ".lt", ".uk", "de", "lv", "ru"];
  const end = value.slice(-4);
  if (!validDomains.includes(end)) return alert("Invalid email");
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === ".") count++;
  }
  if (count > 1) return alert("Invalid email");
  return alert("Email address is submitted");
}
