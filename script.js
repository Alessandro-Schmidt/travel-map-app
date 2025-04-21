let map = L.map('map').setView([-15.77972, -47.92972], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let cities = JSON.parse(localStorage.getItem('cities')) || [];
let markers = [];
let polyline = null;

async function addCity() {
  const input = document.getElementById('city-input');
  const city = input.value.trim();
  if (!city) return;

  const coords = await getCoordinates(city);
  if (coords) {
    cities.push(city);
    localStorage.setItem('cities', JSON.stringify(cities));
    renderMap();
    input.value = '';
  }
}

function clearCities() {
  cities = [];
  localStorage.removeItem('cities');
  renderMap();
}

async function getCoordinates(city) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`);
    const data = await response.json();
    if (data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
  } catch (e) {
    console.error('Erro ao buscar coordenadas:', e);
  }
  return null;
}

async function renderMap() {
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
  if (polyline) map.removeLayer(polyline);

  const points = [];

  for (const city of cities) {
    const coords = await getCoordinates(city);
    if (coords) {
      const marker = L.marker(coords).addTo(map).bindPopup(city);
      markers.push(marker);
      points.push(coords);
    }
  }

  if (points.length > 1) {
    polyline = L.polyline(points, { color: 'blue' }).addTo(map);
    map.fitBounds(polyline.getBounds());
  } else if (points.length === 1) {
    map.setView(points[0], 6);
  }
}

function exportMap() {
  const mapElement = document.getElementById('map');
  html2canvas(mapElement).then(canvas => {
    const link = document.createElement('a');
    link.download = 'mapa-viagem.jpeg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
  });
}

renderMap();