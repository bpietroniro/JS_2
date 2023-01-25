let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(bands) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ').map(capitalize).join(' ');
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function removeDotsInBandName(band) {
  band.name = band.name.replaceAll('.', '');
}

console.log(processBands(bands));
