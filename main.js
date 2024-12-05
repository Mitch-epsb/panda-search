// KF Panda Search
let char = document.getElementById("search-in");
let search = document.getElementById("btn");
let theme = document.getElementById("theme-in");
let themebtn = document.getElementById("theme-btn");
let img = document.getElementById("img");
let charname = document.getElementById("char-name");
let quote = document.getElementById("quote");

let body = document.getElementById("body");

search.addEventListener("click", runsrch);
themebtn.addEventListener("click", runthm);

function runsrch() {
  let name = char.value.toLowerCase();

  if (name == "crane") {
    charname.innerHTML = "Crane";
    quote.innerHTML = '"Wings of justice"';
    img.innerHTML = '<img src="img/crane.png" alt="kung fu panda character" />';
  } else if (name == "kai") {
    charname.innerHTML = "Kai";
    quote.innerHTML =
      '"I fought by his side. I loved him like a brother. And he... betrayed me. Well, now I will destroy everything he has created!"';
    img.innerHTML = '<img src="img/kai.png" alt="kung fu panda character" />';
  } else if (name == "mantis") {
    charname.innerHTML = "Mantis";
    quote.innerHTML = '"Fear the bug!"';
    img.innerHTML =
      '<img src="img/mantis.png" alt="kung fu panda character" />';
  } else if (name == "boss") {
    charname.innerHTML = "Boss Wolf";
    quote.innerHTML = '"my fist in your plush, cuddly, super-soft face!"';
    img.innerHTML =
      '<img src="img/boss-wolf.png" alt="kung fu panda character" />';
  } else if (name == "monkey") {
    charname.innerHTML = "Monkey";
    quote.innerHTML = '"We should hang out!"';
    img.innerHTML =
      '<img src="img/monkey.png" alt="kung fu panda character" />';
  } else if (name == "mr ping" || name == "ping") {
    charname.innerHTML = "Mr Ping";
    quote.innerHTML = '"We are noodle folk. Broth runs through our veins!"';
    img.innerHTML =
      '<img src="img/mr-ping.png" alt="kung fu panda character" />';
  } else if (name == "oogway" || name == "master oogway") {
    charname.innerHTML = "Oogway";
    quote.innerHTML =
      '"I think they will all lose until they find a battle worth fighting."';
    img.innerHTML =
      '<img src="img/oogway.png" alt="kung fu panda character" />';
  } else if (
    name == "po" ||
    name == "dragon warrior" ||
    name == "kung fu panda"
  ) {
    charname.innerHTML = "Po";
    quote.innerHTML = '"Buddy, I am the Dragon Warrior"';
    img.innerHTML = '<img src="img/po.png" alt="kung fu panda character" />';
  } else if (name == "shen") {
    charname.innerHTML = "Shen";
    quote.innerHTML = '"What is rightfully mine: Gongmen City!"';
    img.innerHTML = '<img src="img/shen.png" alt="kung fu panda character" />';
  } else if (name == "shifu") {
    charname.innerHTML = "Shifu";
    quote.innerHTML =
      '"Well done, students—if you were trying to disappoint me."';
    img.innerHTML = '<img src="img/shifu.png" alt="kung fu panda character" />';
  } else if (name == "ox" || name == "storming ox") {
    charname.innerHTML = "Ox";
    quote.innerHTML = '"You insolent fool!"';
    img.innerHTML =
      '<img src="img/storming-ox.png" alt="kung fu panda character" />';
  } else if (name == "croc") {
    charname.innerHTML = "Croc";
    quote.innerHTML = '"Vengeance is served!"';
    img.innerHTML = '<img src="img/croc.png" alt="kung fu panda character" />';
  } else if (name == "soothsayer") {
    charname.innerHTML = "Soothsayer";
    quote.innerHTML = `"Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be."`;
    img.innerHTML =
      '<img src="img/soothsayer.png" alt="kung fu panda character" />';
  } else if (name == "tai lung" || name == "tai") {
    charname.innerHTML = "Tai Lung";
    quote.innerHTML =
      '"Finally, a worthy opponent! Our battle will be legendary!"';
    img.innerHTML =
      '<img src="img/tai-lung.png" alt="kung fu panda character" />';
  } else if (name == "tigress") {
    charname.innerHTML = "Tigress";
    quote.innerHTML = '"That was hardcore!"';
    img.innerHTML =
      '<img src="img/tigress.png" alt="kung fu panda character" />';
  } else if (name == "viper") {
    charname.innerHTML = "Viper";
    quote.innerHTML = `"I don't need to bite to fight"`;
    img.innerHTML = '<img src="img/viper.png" alt="kung fu panda character" />';
  } else {
    charname.innerHTML = "Not in Database";
    quote.innerHTML = "Make sure it's spelled correctly";
    img.innerHTML =
      '<img src="img/question-mark.png" alt="kung fu panda character" />';
  }
}

function runthm() {
  mode = theme.value.toLowerCase();
  if (mode == "dark" || mode == "black") {
    body.style.color = "white";
    body.style.background = "rgba(0, 0, 0, 0.7)";
  } else if (mode == "light" || mode == "white") {
    body.style.background = "rgba(255,255,255, 0.7)";
    body.style.color = "black";
  } else if (mode == "random") {
    let r1 = Math.random() * 255;
    let r2 = Math.random() * 255;
    let r3 = Math.random() * 255;
    body.style.background = `rgba(${r1},${r2},${r3}, 0.7)`;
    body.style.color = `rgba(${r2},${r3},${r1}, 0.7)`;
  }
}
