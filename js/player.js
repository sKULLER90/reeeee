class Player {
    constructor(){}
  
    getcount(){
      var playerCountRef = database.ref('playercount');
      playerCountRef.on("value",function(data){
        playercount = data.val();
      })
    }
  
    updatecount(count){
      database.ref('/').update({
        playercount: count
      });
    }
  
    update(name){
      var playerIndex = "player" + playercount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }