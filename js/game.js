class Game{
    
constructor(){


}


getstate(){

    var gamestateref=database.ref('gamestate');
    gamestateref.on("value",function(data){
        gamestate=data.val();
    })
}

update(state){
datatase.ref('/').update({
    'gamestate':state
})
}

start(){
    if(gamestate===0){
player= new Player();
player.getcount();
form = new Form();
form.display();


    }
}

}