
// ---- yandex map

ymaps.ready(function () {
  const myMap = new ymaps.Map('map', {
    center: [49.280555, 20.289611], // Координаты центра карты

    zoom: 7, // Масштаб карты
    controls: []
  });


  myMap.geoObjects.add(myMap);
});
