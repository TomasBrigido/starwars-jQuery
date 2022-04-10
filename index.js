$(document).ready(function(){

    $(".button").on("click", function(){
        //jQuery code.. 

        // link --> https://akabab.github.io/starwars-api/api/id/1.json

        var random = Math.ceil(Math.random()*88);

        $.get(`https://akabab.github.io/starwars-api/api/id/${random}.json`,function (data){
            
        console.log(data);

            const name = data["name"];
            const homeworld = data["homeworld"];
            const img = data["image"];
            
            $("#name").text(name);
            $("#imagen").html(`<img class="imagen-personaje" src="${img}"></img>`);
            $("#homeworld").text(homeworld);
        })


    })

})