import React from "react";

export default function useGoogleMap(scriptId: string) {
  const _map = React.useRef(null);
  const [map, setMap] = React.useState();
  const [geoCoder, setGeoCoder] = React.useState<any>();
  React.useEffect(() => {
    const $googleScript = document.querySelector(`#${scriptId}`);

    if (!$googleScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}`;
      script.id = scriptId;
      document.body.appendChild(script);

      script.onload = (e) => {
        const geoCoder = new window.google.maps.Geocoder();
        // console.log(geoCoder);
        setGeoCoder(geoCoder);
      };
    }
  }, []);

  const currentLoadMap = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      const map = new window.google.maps.Map(_map.current, {
        center: currentLocation,
        zoom: 13,
      });

      new window.google.maps.Marker({
        position: currentLocation,
        map: map,
        title: "Your Location",
      });

      new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map,
        center: currentLocation,
        radius: 1000, // 2km
      });

      setMap(map);
    });
  };

  const loadMap = (lat?: number, lng?: number) => {
    if (lat && lng) {
      const currentLocation = {
        lat,
        lng,
      };

      const map = new window.google.maps.Map(_map.current, {
        center: currentLocation,
        zoom: 13,
      });

      new window.google.maps.Marker({
        position: currentLocation,
        map: map,
        title: "Your Location",
      });

      // new window.google.maps.Circle({
      //   strokeColor: "#FF0000",
      //   strokeOpacity: 0.8,
      //   strokeWeight: 2,
      //   fillColor: "#FF0000",
      //   fillOpacity: 0.35,
      //   map: map,
      //   center: currentLocation,
      //   radius: 1000, // 2km
      // });

      setMap(map);

      return;
    }

    currentLoadMap();
  };

  return {
    _map,
    map,
    loadMap,
    geoCoder,
  };
}
