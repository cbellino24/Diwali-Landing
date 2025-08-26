// State selector redirect logic
document.getElementById("goBtn").addEventListener("click", function() {
  const state = document.getElementById("state").value;

  if (!state) {
    alert("Please select a state first!");
    return;
  }

  switch (state) {
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
