const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  let data = 0;

  resp.on('data', (values) => {
    const regex = /age=*...(,|})/g;
    let str = values.toString();
    let ages = [...str.matchAll(regex)];

    data = ages.reduce((sum, value) => {
      let age = parseInt(value[0].replace(/\D/g, ""));
      
      if (age >= 50) {
        sum++;
      }

      return sum;
    }, data);
  });

  resp.on('end', () => {
    console.log(data);
  });

});

const regexp = /(?<=key).*?(?<=age=*..,)/g;
