function decodeMessage(string){
    let max =1;
    let count = 1;
    for(let i=1;i<=string.length;i++){
        if(string[i] === string[i-1]){
            count++;
        }else{
            count = 1;
        }
        if(count>max){
            max = count;
        }
    }

    console.log(max)
}
decodeMessage("ATTCGGGA")