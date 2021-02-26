function superbowlWin(array) {
    let winYear = array.find(game => game.result == "W")
    if(winYear){
        return winYear.year
    }
    return winYear
}
