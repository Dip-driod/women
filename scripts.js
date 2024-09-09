// Function to navigate to the SOS page
function openSOSPage() {
    const confirmation = confirm("Are you sure you want to trigger the SOS?");
    if (confirmation) {
        window.location.href = "sos.html";
    }
}

// Live location tracking with improvements
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const mapDiv = document.getElementById('map');
            mapDiv.innerHTML = `Your Location: Latitude: ${lat}, Longitude: ${lon}`;
            mapDiv.style.background = `url(https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=600x300&key=YOUR_API_KEY)`;
            mapDiv.style.backgroundSize = 'cover';
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

window.onload = initMap;
