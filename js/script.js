let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById("host-name").innerHTML = "Sumeet";
document.getElementById("collaborator-name").innerHTML = "Zach"
document.getElementById("collaborator-2-name").innerHTML = "No collaborator";



// Question 2
// You can also create their own CSS classes in style.css file and use that. 

document.getElementById("instruction_button").addEventListener("click" || "keydown", () => {
    let elements = document.querySelectorAll(".question");
    if (elements[0].style.display === "none") {
        console.log("THIS IS CLICKED - IF STATEMENT");
        elements.forEach(el => el.style.display = "block");
        document.getElementById("instruction_button").innerHTML = "Hide Instructions";
    } else {
        console.log("THIS IS CLICKED - ELSE STATEMENT");
        elements.forEach(el => el.style.display = "none");
        document.getElementById("instruction_button").innerHTML = "Show Instructions";
    }
})


// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.

document.getElementById("first_name").addEventListener("change", () => {
    if (document.getElementById("first_name").value === "John" || document.getElementById("first_name").value === "john") {
        document.getElementById("last_name").value = "Doe";
    }
})

// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.

document.getElementById("user_name").addEventListener("change", () => {
    if (pokemonList.includes(document.getElementById("user_name").value)) {
        document.getElementById("username-alert").innerHTML = "Username already exists!!!";
        document.getElementById("username-alert").style.color = "red";
    } else {
        document.getElementById("username-alert").innerHTML = "Unique username created";
        document.getElementById("username-alert").style.color = "green";
    }
})


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.




//Question 6





//Question 7 





//Question 8

let colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", function() {
    document.body.style.backgroundColor = colorPicker.value;
});



//Question 9 

