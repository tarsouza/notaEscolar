
function getScore(score){

    if (score >= 90 && score <= 100){
        console.log('score A')
    } else if ( score >= 80 && score <= 89){
        console.log('score B')
    } else if ( score >= 70 && score <= 79){
        console.log('score C')
    } else if ( score >=60 && score <= 69){
        console.log('score D')
    } else if ( score < 59 && score >= 0){
        console.log('score F')  
    } else{
        console.log('Nota inválida')  
    }

}

getScore(1)
getScore(50)
getScore(-51)
getScore(151)
getScore(80)
getScore(99)