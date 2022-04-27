
import  fs  from 'fs';
import {faker } from '@faker-js/faker';

let nameList = "";

for (let i=1; i<=1000; i++){
  const randomName = faker.name.findName();
  nameList += `${randomName}\n`
}

  
fs.writeFile("randomNames.txt", nameList.trim(), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Se creo archivo con los 1000 nombres falsos \n");
  }
});
