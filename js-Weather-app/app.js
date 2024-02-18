window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((Error) => console.error("Error:", Error));
    });
  }
});
