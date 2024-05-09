document.body.innerHTML = `
        <div class = "game-form">  
        <input type="text" id="myInput" onkeyup="searchBar()" placeholder="Search for tags..">
            <button onclick = "addGame()">ADD Game</button>
        </div>
    <section class ="games-list">    
    </section>`;   
    

async function getAllGames(){
    const data = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games",
      
        {method: "GET", 
        "headers": {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": "ac4da691a0msh717af6dc95e5e2dp10b7f8jsn938071a1852f"
        }
    
    }
        ); // Return a Promise
    
    const games = await data.json();

    const gameContainer = document.querySelector(".games-list");
            gameContainer.innerHTML = ""; // to erase / delete the old game from the list using delete button.

    games.forEach((game) => {
        gameContainer.innerHTML += `
            <div class ="game-container">
                <div>
                    <img class ="thumbnail" src = "${game.thumbnail}" alt = "${game.id}" />  
                </div>                   
                <div class ="specs">
                    <p class ="game-name"> ${game.title}</p>
                    <p class ="game-genre"> ${game.genre}</p>
                    <button onclick ="deleteUser(${game.id})"> Delete</button>
                   
                </div>   
                
            </div>    
        `;
        
    });

    
    console.log(games);
}
getAllGames();


function searchTags(tag){

    fetch("https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${tag}", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "ac4da691a0msh717af6dc95e5e2dp10b7f8jsn938071a1852f"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}
