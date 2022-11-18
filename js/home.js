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
  if (!validDomains.includes(end)) return alert("Invalid domain");
  const domain = value.split("@");
  let count = 0;
  for (let i = 0; i < domain[1].length; i++) {
    if (domain[1][i] === ".") count++;
  }
  if (count > 1) return alert("Invalid email address");
  return alert("Email address is submitted");
}
