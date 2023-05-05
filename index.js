// Imports Express and Morgan
const express = require("express"),
  app = express(),
  morgan = require("morgan");

// Uses Morgan to log requests in Terminal
app.use(morgan("common"));

//Variable for the top movies array
let myFavoriteMovies = [
  {
    title: "The Matrix",
    year: "1999",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    imageURL:
      "https://www.imdb.com/title/tt0133093/mediaviewer/rm4017280512/?ref_=tt_ov_i",
    genre: ["Action", "Sci-Fi"],
    director: {
      name: "Lana Wachowski",
      birth: "June 21, 1965",
      death: "N/A",
      bio: "Lana Wachowski and her sister Lilly Wachowski, also known as the Wachowskis, are the duo behind ground-breaking movies such as The Matrix (1999) and Cloud Atlas (2012). Born to mother Lynne, a nurse, and father Ron, a businessman of Polish descent, Wachowski grew up in Chicago and formed a tight creative relationship with her sister Lilly. As a child, she loved to climb trees, ride bike, wrestle and read comic books. She attended Whitney Young High School, a public school in Chicago, where she played on the soccer team and was vice-president of her school`s Amnesty International chapter.",
    },
    featured: true,
  },
  {
    title: "My Neighbor Totoro",
    year: "1988",
    description:
      "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    imageURL:
      "https://www.imdb.com/title/tt0096283/mediaviewer/rm4017280512/?ref_=tt_ov_i",
    genre: ["Animation", "Family", "Fantasy"],
    director: {
      name: "Hayao Miyazaki",
      birth: "January 5, 1941",
      death: "N/A",
      bio: "hayao miyazaki was born on january 5, 1941 in tokyo, japan. he is a director and writer, known for sen to chihiro no kamikakushi (2001), kaze no tani no naushika (1984) and howl no ugoku shiro (2004). he has attained international acclaim as a masterful storyteller and as a maker of anime feature films, and is widely regarded as one of the greatest animation directors.",
    },
    featured: true,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    imageURL:
      "https://www.imdb.com/title/tt0120737/mediaviewer/rm4017280512/?ref_=tt_ov_i",
    genre: ["Action", "adventure", "drama", "fantasy", "book adaptation"],
    director: {
      name: "Peter Jackson",
      birth: "1961",
      death: "",
      bio: 'Sir Peter Robert Jackson ONZ KNZM (born 31 October 1961) is a New Zealand film director, screenwriter and producer. He is best known as the director, writer and producer of the "Lord of the Rings" trilogy (2001-2003) and the "Hobbit" trilogy (2012-2014), both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
    },
    featured: true,
  },
  {
    title: "Grave of the Fireflies",
    year: "1988",
    description:
      "A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.",
    imageURL:
      "https://www.imdb.com/title/tt0095327/mediaviewer/rm4017280512/?ref_=tt_ov_i",
    genre: ["Animation", "Drama", "War"],
    director: {
      name: "Isao Takahata",
      birth: "October 29, 1935",
      death: "April 5, 2018",
      bio: "Isao Takahata was born on October 29, 1935 in Ise, Mie, Japan. He was a director and writer, known for Grave of the Fireflies (1988), The Tale of the Princess Kaguya (2013) and Only Yesterday (1991). He died on April 5, 2018 in Tokyo, Japan.",
    },
    featured: true,
  },
  {
    title: "Colorful",
    year: "2010",
    description:
      "A soul wakes up in the body of suicide victim Makoto and must find a way to fit into his existence. The soul must unravel two mysteries -- the secret of the great sin it committed in its previous life and why Makoto committed suicide.",
    imageURL:
      "https://www.imdb.com/title/tt1677561/mediaviewer/rm789636864?ref_=ttmi_mi_all_pos_120",
    genre: ["Animation", "drama", "Fantasy"],
    director: {
      name: "Keiichi Hara",
      birth: "July 24, 1959",
      death: "",
      bio: "Keiichi Hara was born on July 24, 1959 in Gunma Prefecture, Japan. He is a director and writer, known for A Summer with Coo (2007), Miss Hokusai (2015) and Kureyon Shinchan: Arashi o Yobu: Appare! Sengoku Daikassen (2002).",
    },
    featured: true,
  },
  {
    title: "3 Ninjas",
    year: "1992",
    description:
      "Brothers Samuel, Jeffrey and Michael make their annual trip to their grandfather Mori Shintaro. Mori trains the boys in martial arts and ninjutsu, skills they will need to fight a gang.",
    imageURL:
      "https://www.imdb.com/title/tt0103596/mediaviewer/rm2093490688/?ref_=tt_ov_i",
    genre: ["action", "Family", "comedy"],
    director: {
      name: "Jon Turteltaub",
      birth: "August 8, 1963",
      death: "",
      bio: "Jon Turteltaub was born on August 8, 1963 in New York City, New York, USA as Jonathan Charles Turteltaub. He is a producer and director, known for National Treasure (2004), The Meg (2018) and Cool Runnings (1993). He has been married to Amy Eldon since July 6, 2006. They have three children.",
    },
    featured: true,
  },
  {
    title: "Bad Boys",
    year: "1995",
    description:
      "Bad Boys is a series of American buddy cop action comedy films created by George Gallo. It stars Will Smith and Martin Lawrence as two detectives in the Miami Police Department, Mike Lowrey and Marcus Burnett. Joe Pantoliano and Theresa Randle also appear in all three films.",
    imageURL:
      "https://www.imdb.com/title/tt0112442/mediaviewer/rm2093490688/?ref_=tt_ov_i",
    genre: ["action", "comedy", "crime"],
    director: {
      name: "Michael Bay",
      birth: "February 17, 1965",
      death: "",
      bio: "Michael Benjamin Bay is an American film director and producer. He is best known for making big-budget, high-concept action films characterized by fast cutting, stylistic cinematography and visuals, and extensive use of special effects, including frequent depictions of explosions.",
    },
    featured: true,
  },
  {
    title: "Rush Hour",
    year: "1998",
    description:
      "When a Chinese consul's young daughter is kidnapped, Hong Kong Detective Lee must team up with Carter, a loud-mouthed LA detective. Distinctive work styles and cultural differences pose hiccups.",
    imageURL:
      "https://www.imdb.com/title/tt0120812/mediaviewer/rm2093490688/?ref_=tt_ov_i",
    genre: ["action", "comedy", "crime"],
    director: {
      name: "Brett Ratner",
      birth: "March 28, 1969",
      death: "",
      bio: "Brett Ratner is an American film director and producer. He directed the Rush Hour film series, The Family Man, Red Dragon, X-Men: The Last Stand, and Tower Heist. He is also a producer of several films, including the Horrible Bosses series, The Revenant and War Dogs.",
    },
    feature: true,
  },
  {
    title: "The Gremilins",
    year: "1984",
    description:
      "Billy's father gets him a pet from China with three very specific instructions. However, when Billy does not follow them, it unleashes a horde of monsters.",
    imageURL:
      "https://www.imdb.com/title/tt0087363/mediaviewer/rm891225089/?ref_=tt_ov_i",
    genre: ["comedy", "fantasy", "horror"],
    director: {
      name: "Joe Dante",
      birth: "November 28, 1946",
      death: "",
      bio: "Joseph James Dante Jr. is an American film director, producer, editor and actor. His films—notably Gremlins alongside its sequel, Gremlins 2: The New Batch —often mix 1950s-style B movies with cartoon comedy.",
    },
    feature: true,
  },
  {
    title: "The Goonies",
    year: "1985",
    description: "",
    imageURL: "",
    genre: ["adventure", "comedy", "family"],
    director: {
      name: "Richard Donner",
      birth: "April 24, 1930",
      death: "",
      bio: "Richard Donner was an American filmmaker whose notable works included some of the most financially-successful films during the New Hollywood era. After directing the horror film The Omen, Donner became famous for the hailed creation of the first modern superhero film, Superman, starring Christopher Reeve.",
    },
    feature: true,
  },
];

// Returns  myFavoriteMovies as Json at endpoint
app.get("/movies", (req, res) => res.json(myFavoriteMovies));

// Retuns message at endpoint
app.get("/", (req, res) => res.send("This API is amazing!"));

// Returns documentation.html at endpoint
app.use(express.static("public"));

// Logs application  errors to terminal
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Listens to port 8080
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
