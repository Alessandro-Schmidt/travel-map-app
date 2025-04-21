# 🌍 Travel Map MVP

I have been solo traveling for a while now. And I always wanted to create an app that could somehow track my trips and itineraries. This is how the idea about this project came along.

A simple travel map app built with HTML, CSS, and JavaScript using Leaflet.js. It allows users to add cities they've visited, view them as markers on a map, and draw a path between them. The cities are saved locally, and the map can be exported as a JPEG.

---

## 🚀 Features

- Add cities manually by name
- Mark locations on an interactive Leaflet map
- Draw paths between cities in the order added
- Save and load data from `localStorage`
- Export the map view as a `.jpeg` image

---

## 🧰 Technologies Used

- HTML, CSS, JavaScript (Vanilla)
- [Leaflet.js](https://leafletjs.com/) for map rendering
- [OpenStreetMap Nominatim API](https://nominatim.org/) for geocoding city names
- [html2canvas](https://html2canvas.hertzen.com/) for JPEG export

---

## 🛠️ Setup Instructions

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/travel-map-mvp.git](https://github.com/Alessandro-Schmidt/travel-map-app.git)
cd travel-map-mvp
```

2. **Run a local server** (required for map and export to work properly):
```bash
# With Python 3
python3 -m http.server

# Or with Node.js (if installed)
npm install -g http-server
http-server
```

3. **Open in your browser:**
```
http://localhost:8000
```

---

## ✏️ Usage

1. Type a city name in the input field
2. Click **"Add"** to add it to the map
3. Use **"Clean"** to clear all cities
4. Click **"Export JPEG"** to save a screenshot of the map

---

## 📸 Example Screenshot

<img width="1440" alt="Captura de Tela 2025-04-21 às 01 03 08" src="https://github.com/user-attachments/assets/56426357-d37a-4104-bf2b-f018ea2ff904" />
<img width="1440" alt="Captura de Tela 2025-04-21 às 01 07 31" src="https://github.com/user-attachments/assets/bc0fb54d-e26f-42dd-b36e-c06cb5cc1069" />


---

## 🙌 Acknowledgments

- Leaflet for amazing open-source map tools
- OpenStreetMap for free geolocation data
- html2canvas for screenshot capability

---

Feel free to fork and improve the project! Contributions welcome. This is only an MVP 🌎

