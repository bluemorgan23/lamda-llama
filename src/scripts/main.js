// The llamaNamer function defines an internal function and
//  your job is to rewrite this code so that the internal function
//   gets returned.

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = Math.floor(Math.random() * 7);

    return namer = function () {
        const suffix = " the Llama";
        const name = possibleNames[randomizer];
        return name + suffix;
    }   
}

nameMaker = llamaNamer();
console.log(nameMaker());

//Moved the return name + suffix statement inside the namer function expression
//instead of declaring namer as a const, I set it up to be returned when calling llamaNamer