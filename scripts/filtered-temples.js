// Temple Data Array
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1985, August, 24",
      area: 19000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52000,
      imageUrl:"https://images.squarespace-cdn.com/content/v1/61bef9dc22e1eb3319ff5a1e/e3bebab9-39ce-4ac8-91fc-8774fcbf35cb/Tokyo+Temple.jpeg?format=750w"
  },
      {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, May, 21",
      area: 44000,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/500%2C/0/default"
  }

    ];

const templesContainer = document.querySelector(".temples-container");
function displayTemples(templesList) {
  templesContainer.innerHTML = ""; 

  templesList.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      card.innerHTML = `
          <h3>${temple.templeName}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;

      templesContainer.appendChild(card);
  });
}

displayTemples(temples);

function getYear(dedicatedDate) {
  return parseInt(dedicatedDate.split(", ")[0]); 
}

function filterOld() {
  const oldTemples = temples.filter(temple => getYear(temple.dedicated) < 1900);
  displayTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
  displayTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

document.querySelector('nav a:nth-child(1)').addEventListener("click", () => displayTemples(temples)); // Home
document.querySelector('nav a:nth-child(2)').addEventListener("click", filterOld); // Old
document.querySelector('nav a:nth-child(3)').addEventListener("click", filterNew); // New
document.querySelector('nav a:nth-child(4)').addEventListener("click", filterLarge); // Largehttps://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg
document.querySelector('nav a:nth-child(5)').addEventListener("click", filterSmall); // Small
