class Human {
    age = 20;
    #cls = 10;

  

    get classFun (){
        return this.#cls;
    }

    set classFun2(val){
        this.#cls = val;
    }



}


const  human = new Human();
human.classFun2 = 30;


console.log(human.classFun);
