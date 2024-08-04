
let dramas = [
    {
        Title: "Game of Thrones",
        Rating: "9.2",
        Poster: "https://m.media-amazon.com/images/I/51A7EGmxK-L._AC_UF1000,1000_QL80_.jpg",
        Cast: "Emilia Clarke, Peter Dinklage, Kit Harington, Lena Headey, Sophie Turner.",
        Genre: "Fantasy Action",
        Description: " Daenerys Targaryen rises to power in Essos with her dragons, while the Night King and his army of White Walkers threaten all of humanity from beyond the Wall. The series culminates in a final battle for the throne,a new ruler for the realm."
    },
    {
        Title: 'House of the Dragon',
        Rating: '8.4',
        Poster: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/06/house-of-the-dragon-poster.jpg',
        Cast: 'Paddy Considine, Matt Smith, Emma D\'Arcy, Rhys Ifans',
        Genre: 'Action Fantasy',
        Description: "The story focuses on the Targaryen civil war, known as the Dance of the Dragons, which erupts over the succession to the Iron Throne. With intense political intrigue, dragon battles, and familial conflict, the series delves into the complex history that shapes the Targaryen legacy."
    },
    {
        Title: "The Vampire Diaries",
        Rating: "7.7",
        Poster: "https://imgc.allpostersimages.com/img/posters/the-vampire-diaries_u-L-F54Q7M0.jpg?artPerspective=n",
        Cast: "Nina Dobrev,Paul Wesley,Ian Somerhalder.",
        Genre: "Fantasy Love",
        Description: "Elena Gilbert, a high school girl in Mystic Falls, who becomes entangled in the supernatural world after falling in love with vampire brothers Stefan and Damon Salvatore. The series explores their complicated love triangle, along with the town's dark history of witches, werewolves, and other mystical beings."
    },
    {
        Title: "Vikings",
        Rating: "8.5",
        Poster: "https://i.ebayimg.com/images/g/WMUAAOSwr2FjEEqN/s-l1200.jpg",
        Cast: "Travis Fimmel, Katheryn Winnick, Moe Dunford, Josefin Asplund.",
        Genre: "Action",
        Description: "Ragnar Lothbrok, a legendary Norse hero, and his journey from farmer to king. The series depicts the brutal and adventurous lives of the Viking warriors, their exploration and raids across Europe, and their quest for glory."
    },
    {
        Title: "Stranger Things",
        Rating: "8.7",
        Poster: "https://cdn.europosters.eu/image/750/posters/stranger-things-summer-of-85-i76122.jpg",
        Cast: "Millie Bobby Brown, Gaten Matarazzo, Caleb McLaughlin, Natalia Dyer.",
        Genre: "Fantasy Sci-fic",
        Description: "When a young boy, Will Byers, goes missing,in the small town of Hawkins(Indiana), his friends uncover a secret government experiment and encounter a mysterious girl with supernatural abilities."
    },
    {
        Title: "Dark",
        Rating: "8.7",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        Cast: "Louis Hofmann, Karoline Eichhorn, Lisa Vicari, Maja Schone, Jordis Triebel.",
        Genre: "Sci-fic Thriller",
        Description: "The series delves into the complex relationships among four estranged families, revealing a time travel conspiracy spanning several generations. As the town's secrets unravel, characters confront their intertwined fates and the cyclical nature of time, leading to apocalyptic consequences."
    },
    {
        Title: "Peaky Blinders",
        Rating: "8.8",
        Poster: "https://i.ebayimg.com/images/g/1IUAAOSwLgxfMH4f/s-l1200.jpg",
        Cast: " Cillian Murphy, Paul Anderson, Sophie Rundle, Helen McCrory.",
        Genre: "Action",
        Description: '"Peaky Blinders" follows the Shelby crime family in post-World War I Birmingham, England. Led by the ambitious and cunning Thomas Shelby, the gang rises to power through illegal betting, smuggling, and robbery. The series explores their ruthless expansion, the constant threat from rival gangs.'
    },
    {
        Title: "Money Heist",
        Rating: "8.2",
        Poster: "https://m.media-amazon.com/images/I/91iNuP5OJ7S._AC_UF894,1000_QL80_.jpg",
        Cast: " Jaime Lorente, Esther Acebo, Enrique Arce.",
        Genre: "Thriller ",
        Description: '"Money Heist" (La Casa de Papel) is a Spanish heist crime drama that follows a group of robbers, led by the mastermind known as The Professor. The team undertakes meticulously planned heists, first targeting the Royal Mint of Spain and later the Bank of Spain, aiming to print and steal billions of euros.'
    },
    {
        Title: 'The Umbrella Academy',
        Rating: '7.9',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOTdlODM0MTAtMzRiZi00MTQxLWE0MGUtNTNjOGZjNjAzN2E0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        Cast: 'Aidan Gallagher, Elliot Page, Tom Hopper, David Castañeda ',
        Genre: 'Sci-fic Action',
        Description: 'In a world where an eccentric family of adopted superheroes reunites, they must overcome personal conflicts and strange new threats to prevent an impending apocalypse. Their journey reveals hidden truths and tests their unity in the face of chaos.'

    },
    {
        Title: "Squid Game",
        Rating: "8.0",
        Poster: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
        Cast: "Lee Jung-jae, Park Hae-soo, Dylan Besseau, Yasushi Iwaki.",
        Genre: "Thriller ",
        Description: 'Desperate for financial relief, hundreds of indebted players enter a deadly competition based on children’s games. As the stakes rise and alliances form, they face brutal challenges that blur the lines between survival and morality.'
    },
    {
        Title: "The End of fun**in world",
        Rating: "8.0",
        Poster: "https://resizing.flixster.com/pFsT__kfCDNZYpkK81a3y5_-exA=/206x305/v2/https://flxt.tmsimg.com/assets/p14695238_b_v13_aa.jpg",
        Cast: "Jessica Barden, Alex Lawther, Steve Oram.",
        Genre: "Thriller",
        Description: "Two misfit teenagers, one who believes he's a psychopath and the other running away from her troubles, embark on a chaotic road trip. Their unlikely bond leads them through a series of darkly comedic and emotionally intense experiences."
    },
    {
        Title: "The Rain in España",
        Rating: "7.2",
        Poster: 'https://i.pinimg.com/originals/b9/7c/d3/b97cd3151f2a5a1b9dbac796a7e5a00c.jpg',
        Cast: 'Heaven Peralejo, Marco Gallo, Bea Binene',
        Genre: 'Love',
        Description: "In the midst of a sweeping drought, a Spanish town faces economic and environmental collapse. A local inventor’s quirky invention promises to bring rain, sparking hope and sparking a community-wide quest for survival and redemption."

    },
    {
        Title: "Goblin",
        Rating: "8.6",
        Poster: "https://image.tmdb.org/t/p/original/t7aUi8jbsIUSCNqA1akAbKjBWjU.jpg",
        Cast: "Gong Yoo, Kim Go-eun, Lee Dong-wook.",
        Genre: "Fantasy Love",
        Description: "A centuries-old goblin cursed to remain immortal seeks a way to end his lonely existence. His journey intertwines with a young woman who can see ghosts, leading to a deep, transformative love that offers a chance at redemption."
    },
    {
        Title: "True beauty ",
        Rating: "8.0",
        Poster: "https://res.cloudinary.com/jerrick/image/upload/v1677319203/63f9dc2324d9f2001c76cf8e.jpg",
        Cast: "Moon Ga-young, Cha Eun-woo, Hwang In-Youp, Park Yoo-na, Jang Hye-jin.",
        Genre: "Love",
        Description: "A high school girl, who hides her insecurities behind flawless makeup, struggles to maintain her perfect facade while navigating the challenges of teenage life. Her secret is at risk of being exposed when she meets someone who sees through her disguise."
    },
    {
        Title: "Put your head on my shoulders",
        Rating: "8.4",
        Poster: "https://puui.wetvinfo.com/vcover_vt_pic/0/inlpm3b3j6xbedt1577443330/0",
        Cast: "Zheng Ying Chen, Zhou Jun Wei, Jie Bing, Zhou Zi Xin.",
        Genre: "Love",
        Description: "A shy and introverted university student’s life changes when she meets a charming but emotionally distant man who’s struggling with his own issues. Their unexpected romance evolves through shared moments and emotional support, challenging their personal fears."
    },
    {
        Title: 'All of Us Are Dead',
        Rating: '7.5',
        Poster: 'https://image.tmdb.org/t/p/original/8jUlLqqPVkO7tRtZsGYjWteJJeR.jpg',
        Cast: 'Park Ji-hu, Yoon Chan-young, Cho Yi-hyun, Park Solomon, Kim Bo-Yoon.',
        Genre: 'Thriller Action',
        Description: "During a zombie outbreak at a high school, students must navigate their way through a devastated school while facing the horrors of the undead and the complexity of human relationships. Survival becomes a test of both physical endurance and emotional resilience."

    }

    // {
    //     Title:
    //     Rating:
    //     Poster:
    //     Cast:
    //     Genre:
    // }

];

// search function 
function searchseries() {
    let seriesname = document.getElementById("searchbox").value;

    if (seriesname !== "") {

        let result = dramas.filter(function (serial) {
            return serial.Title.toUpperCase().includes(seriesname.toUpperCase());
        })
        result.length > 0 ? displayseries(result) : displayseries(dramas)
    }
    else {
        displayseries(dramas);
    }
}

// display function in body 
function displayseries(data) {
    // let seriesDiv= document.getElementById("dramacollections")
    let htmlcontent = ``;

    //load DOM
    for (let i = 0; i < data.length; i++) {
        // Generate unique IDs for each series
        let seriesId = `series_${i}`
        let overlayId = `overlay_${i}`
        let descriptionId = `description_${i}`;
        let spanId = `span_${i}`;
        let fullDescId = `full_desc_${i}`;
        let closeId = `close_${i}`

        htmlcontent = htmlcontent +
            `<div class="series" id='${seriesId}'>
        <div class="overlay" id='${overlayId}'>
            <div class="details">
                <h1>${data[i].Title}</h1>
                <h4>IMDB: ${data[i].Rating}</h4>
                <p>${data[i].Cast}</p>
                <p class='description' id='${descriptionId}'>Description <span class='span' id='${spanId}'> &#8250;</span></p>
            </div>
            <div class="full_desc" id='${fullDescId}'>
                ${data[i].Description}
            </div>
            <p class="close" id='${closeId}'>close</p>
            
        </div>

            <img class="poster" src="${data[i].Poster}" alt="poster">
        </div>` ;
    }
    // console.log(htmlcontent);
    document.getElementById("dramacollections").innerHTML = htmlcontent;

    // Adding event listeners to the DOM elements
    for (let i = 0; i < data.length; i++) {
        let descriptionId = `description_${i}`;
        let spanId = `span_${i}`;
        let fullDescId = `full_desc_${i}`;

        let description = document.getElementById(descriptionId);
        let span = document.getElementById(spanId);
        let full_desc = document.getElementById(fullDescId);

        description.addEventListener('click', function () {
            if (full_desc.style.display === 'block') {
                full_desc.style.display = 'none';
                span.classList.remove('rotate');
                description.style.color = 'rgb(228, 146, 228)';
            } else {
                full_desc.style.display = 'block';
                span.classList.add('rotate');
                description.style.color = 'white';
            }
        });
    }
    // overlay opacity function 
    for (let i = 0; i < data.length; i++) {
        let seriesId = `series_${i}`;
        let overlayId = `overlay_${i}`;
        let closeId = `close_${i}`;

        let series = document.getElementById(seriesId);
        let overlay = document.getElementById(overlayId);
        let close = document.getElementById(closeId);

        series.addEventListener('click', function () {

            overlay.style.opacity = '1';
            overlay.style.border = '1px solid rgb(192, 14, 192)'

        });

        close.addEventListener('click',(event)=>{
            event.stopPropagation();

            overlay.style.opacity = '0';

            console.log('close working');

        });
        // close.addEventListener('click', function () {

        //     overlay.style.opacity = '0';
        //     console.log('im printed')

        // });

    };

};

displayseries(dramas);

// filters 
function filterDramas(event) {
    let genre = event.target.textContent;

    let fil_result = dramas.filter(function (each) {
        return each.Genre.toUpperCase().includes(genre.toUpperCase());
    })
    if (fil_result.length > 0) {
        displayseries(fil_result);
    }
    else if (genre = 'All') {
        displayseries(dramas);
    }
    else {
        displayseries(dramas);
    }
}

//footer year
let f_line = document.getElementById('year');
function f_year() {
    let currentDate = new Date();
    f_line.innerHTML = currentDate.getFullYear();
};
f_year();
