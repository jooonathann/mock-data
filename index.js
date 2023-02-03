const {
  name,
  lastName,
  age,
  favouriteColor,
  country,
  hobbie,
  basicProfilePictures,
} = require("./mockData");
const fs = require("fs");


function getMockData(n) {
  let index = 0;
  let obj = {}

  while (index < n) {
    let nameIndex = Math.round(Math.random() * (name.length - 1));
    let lastNameIndex = Math.round(Math.random() * (lastName.length - 1));
    let ageIndex = Math.round(Math.random() * (age.length - 1));
    let favouriteColorIndex = Math.round(
      Math.random() * (favouriteColor.length - 1)
    );
    let countryIndex = Math.round(Math.random() * (country.length - 1));
    let hobbieIndex = Math.round(Math.random() * (hobbie.length - 1));
    basicProfilePictures;
    let basicProfilePicturesIndex = Math.round(
      Math.random() * (basicProfilePictures.length - 1)
    );

    obj[index] = {
      id : index,
      name: name[nameIndex],
      lastName: lastName[lastNameIndex],
      age: age[ageIndex],
      favouriteColor: favouriteColor[favouriteColorIndex],
      country: country[countryIndex],
      hobbie: hobbie[hobbieIndex],
      image: basicProfilePictures[basicProfilePicturesIndex],
    };

    fs.writeFileSync(__dirname + "/madeUpPeople.json", JSON.stringify(obj));
    index++;
  }
}
function AskForHowMany() {
  let num;
  process.stdout.write(`how many fake people do you need? `);
  process.stdin.setEncoding('utf-8')
  process.stdin.on("data", (data) => {
    
    //console.log('data is ',(parseInt(data)))
    
    if (typeof(parseInt(data)) === 'number' && !isNaN(parseInt(data))){

    num = parseInt(data);

    getMockData(num);
    process.stdout.write(
      `A JSON with ${num} fake people has been done! \n`
    );
    process.exit();
    } else {
      process.stdout.write('The input is not a number \n')
      process.exit()
    }
    
  });
}

AskForHowMany();
