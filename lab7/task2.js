function purgeElements(collection, ...toRemove) {
  for (const item of toRemove) {
    const idx = collection.indexOf(item);
    if (idx !== -1) {
      collection.splice(idx, 1);
    }
  }
}

const dataSet = [100, 200, 300, 400, 500];
purgeElements(dataSet, 200, 400, 100);
console.log(dataSet);

const travelDestinations = ['Odesa', 'Kharkiv', 'Rome', 'Madrid'];
purgeElements(travelDestinations, 'Odesa', 'Madrid', 'Prague');
console.log(travelDestinations);