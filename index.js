function superbowlWin(games) {
  const winningGame = games.find(function(game) {
    return game.result === "W";
  });
  
  if (winningGame) {
    return winningGame.year;
  } else {
    return undefined;
  }
}