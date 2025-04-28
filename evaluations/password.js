function solve(N,str){
    let letters = 0;
    let digit = 0;
    for(let i=0;i<N;i++){
        if(str[i] >= 'a' && str[i] <= 'z'){
            letters++;
        }else if(str[i]  >= '0' && str[i] <= '9'){
            digit++;

        }
    }
        if(letters > N/2 && digit > 0){
            console.log("Strong")
        }
        else{
            console.log("Weak")
        }

    
}
solve(6, "a1b2cd"); // Output: Strong
solve(4, "123a");   // Output: Weak
