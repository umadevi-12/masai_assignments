function fun(score){
    let count = 0;
    
    let adjustedscore = score.map(score =>{
    if(score < 40){
        score  += 20;
    }
    if(score > 90){
        score = 90
    }
    if(score >= 50){
        count++
    }
    console.log(score)
    return score;
    });
    console.log(adjustedscore);
    console.log(count)  
}
fun([35, 91, 20, 88, 50, 39, 45, 60, 93, 70]);
