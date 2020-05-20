let randomized = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomProductNameA = () => {
  const randomTop = [
    'Technical',
    'Winter Technical',
    'Futuristic',
    'Functional',
    'MA-1',
    'Military Style',
    'Climate Cool',
    'Silver Anti-Bacterial',
    'Reinforced',
  ];
  const randomType = [
    'Cotton Noragi',
    'Nylon Noragi',
    'Ny/Co Noragi',
    'Goretex Noragi',
    'Jersey Noragi',
    'Ripstop Noragi',
  ];
  return randomTop[randomized(0,9)] + ' ' + randomType[randomized(0,6)];
};

const randomProductNameB = () => {
  const randomPant = [
    'Cargo',
    'Technical Cargo',
    'Utility',
    'Parachute',
    'Utilitarian',
    'Multi-purpose',
    'Futuristic',
    'Paratrooper',
    'Medical',
  ];
  const randomMaterial = [
    'Ripstop Pants',
    'NyCo Pants',
    'Goretex Pants',
    'Summer Pants',
    'Heat-tech Pants',
    'Fire Pants',
  ];
  return randomPant[randomized(0,9)] + ' ' + randomMaterial[randomized(0,6)];
};


const randomPrice = () => {
  return Number((Math.random() * (80.99 - 1.99) + 1.99).toFixed(2));
};

const randomZipCodes = () => {
  let zipcodes = [];
  let randomTotalZips = Math.floor(Math.random() * (50 - 10) + 10);
  while (randomTotalZips > 0) {
    let newZip = Math.floor(Math.random() * (95000 - 94000) + 94000);
    zipcodes.push(newZip);
    randomTotalZips--
  }
  return zipcodes;
};

// AWS URLs will go here
const photographsA = [
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+1.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+2.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+3.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+4.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+5.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+6.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+7.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+8.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/NORAGI+9.jpg',
];

const photographsB = [
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+1.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+2.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+3.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+4.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+5.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+6.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+7.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+8.jpg',
  'https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+9.jpg',
];

// This will randomize recommendations within each of the 5 below main items
const randomRecommendedA = () => {
  let recoms = [];
  let randomRecoms = (Math.floor(Math.random() * (12 - 3) + 3));
  while (randomRecoms > 0) {
    let object = {
      name: randomProductNameA(),
      price: randomPrice(),
      recImage: photographsA[randomized(0, 9)],
    };
    recoms.push(object);
    randomRecoms--;
  }
  return recoms;
};

const randomRecommendedB = () => {
  let recoms = [];
  let randomRecoms = (Math.floor(Math.random() * (12 - 3) + 3));
  while (randomRecoms > 0) {
    let object = {
      name: randomProductNameB(),
      price: randomPrice(),
      recImage: photographsB[randomized(0, 9)],
    };
    recoms.push(object);
    randomRecoms--
  }
  return recoms;
};

// Main items array generator
const randomizedData = () => {
  let fullDataSet = [];
  let counter = 100;
  while (counter > 0) {
    if (counter%2 === 0) {
      let objectA = {
        productId: (101-counter),
        recommended: randomRecommendedA(),
        price: randomPrice(),
        zip: randomZipCodes(),
        image: photographsA[randomized(0, 9)],
      };
      fullDataSet.push(objectA);
      counter--;
    } else {
      let objectB = {
        productId: (101-counter),
        recommended: randomRecommendedB(),
        price: randomPrice(),
        zip: randomZipCodes(),
        image: photographsB[randomized(0, 9)],
      };
      fullDataSet.push(objectB);
      counter--;
    }
  }
  return fullDataSet;
};

const seedData = randomizedData();

module.exports.seedData = seedData;

