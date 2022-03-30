function print(a){
    
    if (a < 0) {
        return 0;
    }
    console.log(a + (a-1));
    a --;
    return a;
}

function printResult(){
    print(4);
    return 0;
}

printResult();