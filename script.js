const students = [
  // Betting & Chance Games
  {
    name: "Kanav Agarwal",
    project: "Mines Casino",
    image: "./images/Kanav_Agarwal.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Jaic Andrades",
    project: "Rock Paper Scissors",
    image: "./images/Jaic_Andrades.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Zachary Andrews",
    project: "Dice Game",
    image: "./images/Zachary_Andrews.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Damian Borbolla",
    project: "Dice Game",
    image: "./images/Damian_Borbolla.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Andrelle Beverly Jr",
    project: "Cyber Showdown",
    image: "./images/Andrelle_Beverly.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Andrew Cassella",
    project: "Slots",
    image: "./images/Andrew_Cassella.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Jeremy Figueroa",
    project: "BlackJack",
    image: "./images/Jeremy_Figueroa.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Bryce Jones",
    project: "South Croatian Famine Blackjack",
    image: "./images/Bryce_Jones.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Toby Littleman",
    project: "Minesweeper",
    image: "./images/Toby_Littleman.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Aslan Ortiz Gomez",
    project: "Rock Paper Scissors",
    image: "./images/Aslan_Ortiz_Gomez.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Jessica Quezada",
    project: "Fishing Game",
    image: "./images/Jessica_Quezada.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "Michael Rodriguez",
    project: "Chiles and Dragons",
    image: "./images/Michael_Rodriguez.PNG",
    category: "Betting & Chance Games",
  },
  {
    name: "David Weinberg",
    project: "The Impossible Game",
    image: "./images/David_Weinberg.PNG",
    category: "Betting & Chance Games",
  },

  // Guessing Games
  {
    name: "Liyonette Barrera",
    project: "Guess the Celebrity Game",
    image: "./images/Liyonette_Barrera.PNG",
    category: "Guessing Games",
  },
  {
    name: "Gianna Cavalari",
    project: "Wild Guess",
    image: "./images/Gianna_Cavalari.PNG",
    category: "Guessing Games",
  },
  {
    name: "Yanitza Chavez",
    project: "Guess the Country",
    image: "./images/Yanitza_Chavez.PNG",
    category: "Guessing Games",
  },
  {
    name: "Desiree Dabney-Corona",
    project: "Guess the Sonic Character",
    image: "./images/Desiree_Dabney_Corona.PNG",
    category: "Guessing Games",
  },
  {
    name: "Demian English",
    project: "Music Guesser",
    image: "./images/Demian_English.PNG",
    category: "Guessing Games",
  },
  {
    name: "Jose Galeas",
    // project: "Guess Which Video Was Rated the Funniest",
    project: "Rate Funniest Video",
    image: "./images/Jose_Galeas.PNG",
    category: "Guessing Games",
  },
  {
    name: "Ambriele Gallegos",
    project: "Guess the Movie by Emojis",
    image: "./images/Ambriele_Gallegos.PNG",
    category: "Guessing Games",
  },
  {
    name: "Benjamin Pandumrongpun",
    project: "Color Game",
    image: "./images/Benjamin_Pandumrongpun.PNG",
    category: "Guessing Games",
  },
  {
    name: "Valeria Sanchez Llanes",
    project: "General Knowledge Quiz",
    image: "./images/Valeria.PNG",
    category: "Guessing Games",
  },
  {
    name: "Kayla Yocum",
    project: "Guess the Song",
    image: "./images/Kayla_Yocum.PNG",
    category: "Guessing Games",
  },
  {
    name: "Talan Zsilavec",
    project: "Game Guesser",
    image: "./images/Talan_Zsilavec.PNG",
    category: "Guessing Games",
  },

  // Word Games
  {
    name: "Bernardo Castillo",
    project: "Hangman",
    image: "./images/Bernardo_Castillo.PNG",
    category: "Word Games",
  },
  {
    name: "Joao Dias",
    project: "Wordle",
    image: "./images/Joao_Dias.PNG",
    category: "Word Games",
  },
  {
    name: "Thomas Fraule",
    project: "Hangman",
    image: "./images/Thomas_Fraule.PNG",
    category: "Word Games",
  },
  {
    name: "Nicolas Okuly",
    project: "SAT Word Game",
    image: "./images/Nicolas_Okuly.PNG",
    category: "Word Games",
  },
  {
    name: "Olivia Schuetz",
    project: "Hangman",
    image: "./images/Olivia_Schuetz.PNG",
    category: "Word Games",
  },

  // Math Games
  {
    name: "Samantha McClure",
    project: "Are You Smarter than a 6th Grader?",
    image: "./images/Samantha_McClure.PNG",
    category: "Math Games",
  },
  {
    name: "Corbin Patel",
    project: "Multiplication Game",
    image: "./images/Corbin_Patel.PNG",
    category: "Math Games",
  },

  // Reaction & Clicker Games
  {
    name: "Ola Al Zreikat",
    project: "Brick Breaker",
    image: "./images/Ola_Al_Zreikat.PNG",
    category: "Reaction Time & Clicker Games",
  },
  {
    name: "Joao Dias",
    project: "Dot Dash Survival",
    image: "./images/Joao_Dias_2.PNG",
    category: "Reaction Time & Clicker Games",
  },
  {
    name: "Corey Furman",
    project: "Energy Savers",
    image: "./images/Corey_Furman.PNG",
    category: "Reaction Time & Clicker Games",
  },
  {
    name: "Joseph Mendias",
    project: "Dot Finder",
    image: "./images/Joseph_Mendias.PNG",
    category: "Reaction Time & Clicker Games",
  },
  {
    name: "Jacob Rubio",
    project: "Can You Click the Button?",
    image: "./images/Jacob_Rubio.PNG",
    category: "Reaction Time & Clicker Games",
  },
  {
    name: "Rasmidah Shekul Islam",
    project: "Whac' A Color",
    image: "./images/Rasmidah_Shekul_Islam.PNG",
    category: "Reaction Time & Clicker Games",
  },
  {
    name: "Arthur Simoes",
    project: "Sonic Super Adventure",
    image: "./images/Arthur_Simoes.PNG",
    category: "Reaction Time & Clicker Games",
  },

  // Other
  {
    name: "Angel Coronel Gambino",
    project: "Memory Game",
    image: "./images/Angel_Corone_Gambino.PNG",
    category: "Other Games",
  },
  {
    name: "Kiara Flores",
    project: "Cat Generator",
    image: "./images/Kiara_Flores.PNG",
    category: "Other Games",
  },
  {
    name: "Martin Miller",
    project: "Character Placement Game",
    image: "./images/Martin_Miller.PNG",
    category: "Other Games",
  },
  {
    name: "Matthew Miller",
    project: "Regretevator",
    image: "./images/Matthew_Miller.PNG",
    category: "Other Games",
  },
  {
    name: "Cole Maron",
    project: "Chess",
    image: "./images/Cole_Maron.PNG",
    category: "Other Games",
  },
  {
    name: "Logan Moreno",
    project: "Random Name Generator",
    image: "./images/Logan_Moreno.PNG",
    category: "Other Games",
  },
  {
    name: "Matthew Mendoza",
    project: "cee-lo",
    image: "./images/Matthew_Mendoza.PNG",
    category: "Other Games",
  },
  {
    name: "Deangelo Panameno",
    project: "Ten Shadows Subjugation",
    image: "./images/Deangelo_Panameno.PNG",
    category: "Other Games",
  },
  {
    name: "Ritvik Pattela",
    project: "Match the Fruit",
    image: "./images/Ritvik_Pattela.PNG",
    category: "Other Games",
  },
  {
    name: "Tyler Thorne",
    project: "Fortnite Clicker",
    image: "./images/Tyler_Thorne.PNG",
    category: "Other Games",
  },
  {
    name: "Jassiel Vera",
    project: "fnex",
    image: "./images/Jassiel_Vera.PNG",
    category: "Other Games",
  },
];

let interval;
let currentIndex = 0;
const slidesContainer = document.getElementById("slides-container");

function createSlides() {
  students.forEach((project) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `
              <img src="${project.image}" alt="${project.project}">
              <div class="overlay">
                  <h2>${project.name}</h2>
                  <h3>${project.project}</h3>
              </div>
          `;
    slidesContainer.appendChild(slide);
  });
  updateSlides();
}

function updateSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");

    if (index < currentIndex) {
      if (currentIndex - index <= 2) {
        if (currentIndex - index == 1) {
          slide.style.transform = `translateX(-${
            (currentIndex - index) * 15
          }%) scale(.9)`;
        } else {
          slide.style.transform = `translateX(-${
            (currentIndex - index) * 15
          }%) scale(.8)`;
        }
        slide.style.zIndex = `${10 - (currentIndex - index)}`;
        slide.style.opacity = 1;
      } else {
        //fade out left
        slide.style.transform = `translateX(-60%) scale(.7)`;
        slide.style.opacity = 0;
      }
    } else if (index == currentIndex) {
      slide.classList.add("active");
      slide.style.transform = `translateX(0%) scale(1)`;
      slide.style.opacity = "1";
      slide.style.zIndex = "10";
    } else if (index > currentIndex) {
      if (index - currentIndex <= 2) {
        if (index - currentIndex == 1) {
          slide.style.transform = `translateX(${
            (index - currentIndex) * 15
          }%) scale(.9)`;
        } else {
          slide.style.transform = `translateX(${
            (index - currentIndex) * 15
          }%) scale(.8)`;
        }
        slide.style.opacity = 1;
        slide.style.zIndex = `${10 - (index - currentIndex)}`;
      }else{ //fade in right
        slide.style.transform = `translateX(60%) scale(.7)`;
        slide.style.opacity = 0;
        slide.style.zIndex = `${10 - (index - currentIndex + 1)}`;
      }
    }
  });
}

function startSlideshow() {
  interval = setInterval(nextSlide, 4000); // Auto-slide every 5 seconds
}

function resetSlideshow() {
  clearInterval(interval);
  startSlideshow();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % students.length;
  updateSlides();
  resetSlideshow();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + students.length) % students.length;
  updateSlides();
  resetSlideshow();
}

// interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
createSlides();
// showSlide(currentIndex);
startSlideshow();

const projectContainer = document.getElementById("projects");
const categories = {};

students.forEach((student) => {
  if (!categories[student.category]) {
    categories[student.category] = [];
  }
  categories[student.category].push(student);
});

Object.keys(categories).forEach((category) => {
  const categoryElement = document.createElement("div");
  categoryElement.classList.add("category");

  const categoryName = document.createElement("h3");
  categoryName.textContent = category;
  categoryElement.appendChild(categoryName);

  const dash = document.createElement("div");
  dash.classList.add("dash");

  categoryElement.appendChild(dash);

  projectContainer.appendChild(categoryElement);

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container");

  categories[category].forEach((student) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img src="${student.image}" alt="${student.project}">
            <div class="card-content">
                <h3>${student.project}</h3>
                <p>${student.name}</p>
            </div>
        `;

    flexContainer.appendChild(card);
  });

  projectContainer.appendChild(flexContainer);
});
