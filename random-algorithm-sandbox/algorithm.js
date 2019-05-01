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

//In development;
// function randomizer2(N) {
//     let array = []
//     let returnArray = [[],[],[],[],[],[],[],[]];
//     for (let i = 0; i < N; i++) {
//         array.push(i);
//     }
// }

// class Stack {
//     constructor(N){
//         this.length = N;
//         this.elementIndex = 0;
//         this.array = new Array(N);
//     }

//     push(element) {
//         this.array[this.elementIndex++] = element;
//     }

//     pop() {
//         let temp = this.array[this.elementIndex];
//         this.array[this.elementIndex--] = null;
//         return temp;
//     }

//     sort() {

//     }
// }
