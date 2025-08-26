// Custom dropdown logic
const dropdown = document.getElementById("stateDropdown");
const selected = dropdown.querySelector(".dropdown-selected");
const options = dropdown.querySelectorAll(".dropdown-options div");
const goBtn = document.getElementById("goBtn");

let selectedState = "";

// Toggle dropdown
selected.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

// Select option
options.forEach(option => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent;
    selectedState = option.getAttribute("data-value");
    dropdown.classList.remove("open"); // close after selecting
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", e => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

// Go button redirect
goBtn.addEventListener("click", () => {
  if (!selectedState) {
    alert("Please select a state first!");
    return;
  }

  switch (selectedState) {
    case "texas":
    case "oklahoma":
      window.location.href = "https://fireworksworldstore.com";
      break;

    case "arizona":
      window.location.href = "https://bellinofireworks.com";
      break;

    default:
      alert("This state is not supported yet!");
      break;
  }
});
