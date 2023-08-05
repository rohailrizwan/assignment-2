let mobile_obj = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
]
const searchbtn = document.getElementById("search");
const display = document.getElementById("display");

function renderModels(models) {
  display.innerHTML = ""; // Clear previous contents

  models.forEach(model => {
    for (const key in model) {
      if (model.hasOwnProperty(key)) {
        const infoElement = document.createElement("p");
        infoElement.textContent = `${key}: ${model[key]}`;
        display.appendChild(infoElement);
      }
    }
    display.appendChild(document.createElement("br"));
  });
}

function getbrand() {
  const filterbrand = [];
  const searchbar = document.getElementById("searchbar").value.toLowerCase();

  mobile_obj.forEach(element => {
    if (element.brand.toLowerCase().includes(searchbar)) {
      filterbrand.push(element);
    }
  });

  if (filterbrand.length > 0) {
    renderModels(filterbrand);
  } else {
    display.innerHTML = "<p>No matching brand found!</p>";
  }
}

searchbtn.addEventListener("click", getbrand);
