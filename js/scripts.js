$(document).ready(function() {
  $("img#deck").click(function() {
    $("#hidden").toggle();
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    var suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        $("#cards_list").append("<li>" + rank + " of " + suit + "</li>");
      });
    });
  });
});
