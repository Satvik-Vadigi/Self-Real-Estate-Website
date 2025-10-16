  // Initialize map
  const map = L.map('map').setView([18.0902982, 83.4337964], 13); // Default location: Hyderabad

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Optional: Add a marker
  L.marker([18.0902982, 83.4337964]).addTo(map)
    .bindPopup('Bhudevi Plot Location')
    .openPopup();