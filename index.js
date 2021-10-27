//Dependencies
const RandomString = require("randomstring")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

var results = ""

//Main
if(!Self_Args.length){
    console.log(`node index.js <amount> <output>
Example: node index.js 100 ./output_test.txt`)
    process.exit()
}

if(!Self_Args[0]){
    console.log("Invalid amount.")
    process.exit()
}

if(isNaN(Self_Args[0])){
    console.log("amount is not a Int.")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid output.")
    process.exit()
}

for( i = 0; i <= Self_Args[0]; i++ ){
    const fragment_1 = RandomString.generate({
        length: 3,
        charset: "oiv"
    })

    const fragment_2 = RandomString.generate({
        length: 4,
        charset: "mdsc"
    })

    const fragment_3 = RandomString.generate({
        length: 3,
        charset: "gwd"
    })

    if(!results.length){
        results = `${fragment_1}-${fragment_2}-${fragment_3}`
    }else{
        results += `\n${fragment_1}-${fragment_2}-${fragment_3}`
    }
}

Fs.writeFileSync(Self_Args[1], results, "utf8")
console.log("Done.")
