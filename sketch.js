var nametext, nameInput, ageText, ageInput, genderText, genderButton, heightText, heightInput, weightText, weightInput, submit;
var pername, perage, pergender, perheight, perweight;
var greeting1, greeting2, greeting3, greeting4, greeting5, greeting6, greeting7;
var upo, puw, pow;

function setup() {

  createCanvas(displayWidth-30, displayHeight-600);

  nameText = createElement('h3', 'Name:');
  nameText.position(displayWidth/2-650, displayHeight/2-245);
  nameInput = createInput("");
  nameInput.position(displayWidth/2-650, displayHeight/2-205);
 
  ageText= createElement('h3', 'Age:');
  ageText.position(displayWidth/2-650, displayHeight/2-195);
  ageInput = createInput("");
  ageInput.position(displayWidth/2-650, displayHeight/2-155);

  genderText = createElement('h3', 'Gender:');
  genderText.position(displayWidth/2-650, displayHeight/2-145);
  genderButton = createRadio();
  genderButton.option('Male');
  genderButton.option('Female');
  genderButton.position(displayWidth/2-655, displayHeight/2-103);

  heightText = createElement('h3', 'Height (m):');
  heightText.position(displayWidth/2-650, displayHeight/2-95)
  heightInput = createInput("");
  heightInput.position(displayWidth/2-650, displayHeight/2-55);

  weightText = createElement('h3', 'Weight (kg):');
  weightText.position(displayWidth/2-650, displayHeight/2-45)
  weightInput = createInput("");
  weightInput.position(displayWidth/2-650, displayHeight/2-5);

  submit = createButton('Submit');
  submit.position(displayWidth/2-650, displayHeight/2+25);
  submit.mousePressed(personalize);

  greeting1 = createElement('h2');
  greeting1.position(displayWidth/2, displayHeight/2-230);

  greeting2 = createElement('h2');
  greeting2.position(displayWidth/2, displayHeight/2-180);

  greeting3 = createElement('h2');
  greeting3.position(displayWidth/2, displayHeight/2-130);

  greeting4 = createElement('h2');
  greeting4.position(displayWidth/2, displayHeight/2-80);
  
  greeting5 = createElement('h2');
  greeting5.position(displayWidth/2, displayHeight/2-30);

  greeting6 = createElement('h2');
  greeting6.position(displayWidth/2, displayHeight/2+20);

  greeting7 = createElement('h2');
  greeting7.position(displayWidth/2, displayHeight/2+70);

  greeting8 = createElement('h2');
  greeting8.position(displayWidth/2, displayHeight/2+140);

}

function draw(){
 
  submit.mousePressed(personalize);
  
}

function personalize() {

  pername = nameInput.value();
  greeting1.html('Hello ' + pername + '!');
  console.log(pername)

  perage = ageInput.value();
  console.log(perage);  

  if(perage < 100 && perage > 0) {
    greeting2.html('You are ' + perage + ' years old.');
  } else if(perage >= 100 || perage <= 0) {
    greeting2.html('This software can only be used for living people.'); 
  } else {
    greeting2.html('Your age is invalid. Kindly enter a number.');
  }

  pergender = genderButton.value();
  console.log(pergender);

  if(pergender === "Male") {
    greeting3.html('You are male.');
  } else if(pergender === "Female") {
    greeting3.html('You are female.');
  } else {
    greeting3.html('Your gender is invalid. Kindly enter either Male or Female.');
  }
  
  perheight = heightInput.value();
  console.log(perheight);

  if(perheight >= 0.5 && perheight <= 3) {
    greeting4.html('You are ' + perheight + ' m tall.');
    greeting5.position(displayWidth/2, displayHeight/2-30);
  } else if(perheight < 0.5) {
    greeting4.html('This software is probably not best for babies or dwarves.');
    greeting5.position(displayWidth/2, displayHeight/2-30);
  } else if(perheight > 3) {
    greeting4.html('This software is probably not best for giants.');
    greeting5.position(displayWidth/2, displayHeight/2-30);
  } else {
    greeting4.html('Your height is invalid. Kindly enter a number (your height in meters).');
    greeting5.position(displayWidth/2, displayHeight/2-5)
  }

  perweight = weightInput.value();
  console.log(perweight);

  if(perweight >= 2 && perweight <= 700) {
    greeting6.position(displayWidth/2, displayHeight/2+20);
    greeting5.html('You weigh ' + perweight + ' kg.');
  } else if(perweight < 2) {
    greeting6.position(displayWidth/2, displayHeight/2+20);
    greeting5.html('This software is probably not best for babies or dwarves.')
  } else if(perweight > 700) {
    greeting6 .position(displayWidth/2, displayHeight/2+20);
    greeting5.html('This software is probably not best for giants.');
  } else {
    greeting6.position(displayWidth/2, displayHeight/2+70);
    greeting5.html('Your weight is invalid. Kindly enter a number (your weight in kilograms).');
  } 

  if(perage < 1) {
    greeting6.html('There is no set time for you to sleep. You may sleep for as long as you wish.');
  } else if(perage >= 1 && perage < 5) {
    greeting6.html('You need 12 hours of sleep everyday.');
  } else if(perage >= 5 && perage < 10) {
    greeting6.html('You need 11 hours of sleep everyday.');    
  } else if(perage >= 10 && perage < 18) {
    greeting6.html('You need 10 hours of sleep everyday.');
  } else if(perage >= 18) {
    greeting6.html('You need 8 hours of sleep everyday.');
  }

  upo = Math.round(perweight/(perheight*perheight));
  puw = Math.round(18*(perheight*perheight));
  pow = Math.round(25*(perheight*perheight));
  
  if(upo < 18) {
    greeting7.html('You are underweight. Eating a nutrious diet, while going for a walk for 30 minutes everyday should help you!');
    greeting8.html('Your BMI is ' + upo + '. The healthy BMI is between 18 - 25, so the ideal weight for you is between ' + puw + ' and ' + pow + '.');
  } else if(upo > 25) {
    greeting7.html('You are overweight. Eating a nutrious diet with a little bit less fat while being active in sports should help you!');
    greeting8.html('Your BMI is ' + upo + '. The healthy BMI is between 18 - 25, so the ideal weight for you is between ' + puw + ' and ' + pow + '.');
  } else if(upo >= 18 && upo <= 25) {
    greeting7.html('You weigh... perfect? You weigh perfect for your height and should continue doing what you do!');
    greeting8.html('Your BMI is ' + upo + '. The healthy BMI is between 18 - 25, so the ideal weight for you is between ' + puw + ' and ' + pow + '.');
  } 

}

