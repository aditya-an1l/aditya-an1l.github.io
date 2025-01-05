document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("tr").forEach((row) => {
  row.addEventListener("mouseover", () => {
    row.style.backgroundColor = "#f0f8ff";
  });
  row.addEventListener("mouseout", () => {
    row.style.backgroundColor = "";
  });
});

const toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle Theme";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "5px";
toggleButton.style.cursor = "pointer";
toggleButton.style.backgroundColor = "#007acc";
toggleButton.style.color = "#fff";
document.body.appendChild(toggleButton);

let isDarkTheme = false;
toggleButton.addEventListener("click", () => {
  isDarkTheme = !isDarkTheme;
  document.body.style.backgroundColor = isDarkTheme ? "#2c3e50" : "#f5f7fa";
  document.body.style.color = isDarkTheme ? "#ecf0f1" : "#333";
});
