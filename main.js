const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://media.gettyimages.com/illustrations/trex-artwork-illustration-id460716257?k=20&m=460716257&s=612x612&w=0&h=jW-7tzxRl4RSXyrh3CMj4-NfnyE6jOSopb2_1PVTyyc="
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://media.gettyimages.com/illustrations/brontosaurus-illustration-id165517482?k=20&m=165517482&s=612x612&w=0&h=kL54jZNBR2U_MOKjs6YwSBrwOS0w8HWUHthCo7fKwHE="
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://media.gettyimages.com/illustrations/artwork-of-a-triceratops-illustration-id724233051?k=20&m=724233051&s=612x612&w=0&h=dnGplWfP_WorFDAqvLjxnwfHgUQ9jCnZv1QrAkVDIUY="
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Barney",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://media.gettyimages.com/photos/barney-the-purple-dinosaur-in-scene-fr-pbs-tv-series-barney-friends-picture-id50437561?k=20&m=50437561&s=612x612&w=0&h=FLSL2SJBqHdNNWwCfUm1iXt-sa16jGKEQZ4VkMyeg3U="
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://media.gettyimages.com/illustrations/pteranodon-flying-through-a-forest-illustration-illustration-id1148108302?k=20&m=1148108302&s=612x612&w=0&h=9YC5sLehOhhjJ8Prihgc1rW7FCItpTuxLIUWAWJM2q8="
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://media.gettyimages.com/illustrations/artwork-of-parasaurolophus-illustration-id122374009?k=20&m=122374009&s=612x612&w=0&h=ZAWwxwTU1Pz1v6xvDuDI7o0-U0sHlEnn5VAIcJP5dH8="
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLk2ny1Ca5FfN6UKxRy3tIl_dNq6x6HbyeA&usqp=CAU"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://media.gettyimages.com/illustrations/artwork-of-pteranodon-sternbergi-illustration-id122374011?k=20&m=122374011&s=612x612&w=0&h=uD6E-jApxqaTzpJXxitAFgK4MmKU73pcX7nCOW4JvUA="
    }
  ];


const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  
const petsOnDom = (pets) => {
  let domString = "";

  for (const pet of pets)
  {
  domString += 
  `<div class="card text-center">
  <div class="card-header">
    ${pet.name}  
  </div>
<div class="card-body">
  <img src= ${pet.imageUrl} alt="animal picture">
  <p>${pet.color}</p>
  <p class="card-text">${pet.specialSkill}</p>
</div>
<div class="card-footer ${pet.type}"> ${pet.type}<br>
</div>
<button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
</div>
</div>`;
  }
  renderToDom("#app", domString);

  }
  petsOnDom(pets);

const filter = (pets, petType) => {
  const petArray = [];

  for (const member of pets){
    if (member.type === petType){
      petArray.push(member);
    }
  }
    return petArray;
}


const showAllDogs = document.querySelector("#dogButton");
const showAllDinos = document.querySelector("#dinoButton");
const showAllCats = document.querySelector("#catButton");
const allButton = document.querySelector("#allButton");

showAllDogs.addEventListener('click', () => 
{
  const dogs = filter (pets, 'dog');
  petsOnDom(dogs);
});

showAllDinos.addEventListener('click', () => 
{
    const dinos = filter (pets, 'dino');
    petsOnDom(dinos);
});

  
showAllCats.addEventListener('click', () => 
{
    const cats = filter (pets, 'cat');
    petsOnDom(cats);
});

allButton.addEventListener('click', () => 
{
    petsOnDom(pets);
});

const form = document.querySelector('form');
const newPets = (e) => {
  e.preventDefault();

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    type: document.querySelector("#type").value,
    specialSkill: document.querySelector("#specialSkill").value,
    imageUrl: document.querySelector("#imageUrl").value
  }

  pets.push(newPetObj);
  petsOnDom(pets);
  form.reset();
}

form.addEventListener('submit', newPets);


const app = document.querySelector("#app");
// 2. Add an event listener to capture clicks

app.addEventListener('click', (e) => { 
  console.log("button clicked");
  
// 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11
    
    const [, id] = e.target.id.split("--");

// 4. add logic to remove from array
    // .findIndex is an array method that looks at specified data and returns the index of the first item that matches the condition
    const index = pets.findIndex(e => e.id === Number(id));

    // .splice modifies the original array
    pets.splice(index, 1);
    

// 5. Repaint the DOM with the updated array
    petsOnDom(pets);
  }
});

const startApp = () => {
  petsOnDom(pets);
  //events(); // ALWAYS LAST
  console.log("start app");
}

startApp();
