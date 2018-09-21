let palindrome = function(palabra){
    let inversa = "";
    for(let i=0;palabra.length;i++){
        inversa = palabra[i] + inversa; 
    }
    if(inversa==palabra){
        console.log("La palabra es palindroma");
    }
    else{
        console.log("La palabra no es palindroma");
    }

};