const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" },
    { id: "jj-1969", name: "Warp Equalizer" }
];

document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const ratingStars = document.querySelectorAll(".rating input");

    ratingStars.forEach(star => {
        star.addEventListener("change", function () {
            const value = this.value;
            document.querySelectorAll(".rating label").forEach(label => {
                label.style.color = label.htmlFor <= "star" + value ? "gold" : "#ccc";
            });
        });
    });
});


const yearElement = document.querySelector("#year");
const lastModifiedElement = document.querySelector("#lastModified");

const currentDate = new Date();

const formattedDate = currentDate.toLocaleString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h24", 
});

yearElement.innerHTML = `
  <span class="highlight">
    ${currentDate.getFullYear()} &copy; Elisha Sunday ✅ Software Engineer ✅ Nigeria
  </span>`;
lastModifiedElement.innerHTML = `
  <span class="lastmodified">
    Last Modification: ${formattedDate}
  </span>`;