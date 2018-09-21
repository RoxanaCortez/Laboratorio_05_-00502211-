let ascendente = function(arreglo){
    let bandera = falso;
    let temp;
    while(!bandera){
        bandera=true;
        for(let i=0;i<arreglo.legth;i++){
            if(arreglo[i-1]>arreglo[i]){
                temp = arreglo[i-1];
                arreglo[i-1]=arreglo[i];
                arreglo[i]=temp; 
                bandera=falso;
            }
        }
    }
}