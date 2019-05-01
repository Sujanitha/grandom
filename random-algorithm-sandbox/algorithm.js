function randomizer(N) {
    let array = []
    returnArray = []
    for (let i = 0; i < N; i++) {
        array.push(i);
    }
    do {
        let nextIndex = Math.floor(Math.random() * N);
        returnArray.push(array[nextIndex]);
        array.splice(nextIndex,1);
        N--;
    } while(N > 4);
    
    return returnArray.concat(array);
}

console.log(randomizer(32).length);
