function superbowlWin(array) {
    let winYear = array.find(game => game.result == "W")
   return winYear? winYear.year

}
