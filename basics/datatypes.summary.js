// primitive 
// it can not be alocate in memory 

// 7 types : string,number,boolearn,null,undefined,symbol,BigInt
// symbol is used to make value unique
// eg- const id = symbol('123')
//     const anotherid = symbol('123')
// const.log(id === anotherid);  answer false
//BigInt though all the values are cover in number but if some sone big value or scentific valuse is there we can use it in bigint
// eg - const bignumber = 35634363453656n ( n in last)
// string is like a word or number in " " which is specified
// number is used for numers , when a number is kept in "" it becomes string
// boolean is answer in true or false 
//null is nothing nothiong means nothing nor 0 nor anything
// undefined is vvariable is given but the value of variable is not given

// js is a dynamic lang



// referance(non premitive)
// it can be alocate in memory directly 

// array,objects,functions


// const heros = ["shaktiman","nagraj"] array

// objectys in curly bracket and array in square bracket
// {
//    name:"ishita",
//    age: 22,
// }

//function(){} this is a funstion 
//const myFunction= function(){
   // console.log("hello world")} this is a function stored in variabe

//console={.log(type of .....) to know  type

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (prenitive), geap(non premitive)
// stack you get a copy image heap you get original

let myyoutubename = "ishitaa"

let anothername= myyoutubename

//console.log(myyoutubename);
//console.log(anothername);
// its a stack you if you change value of anothername it will change on;y that my youtube will not 

let  userone = {
   email: "hfrthvghm.com"
   upi:"yghkhj"
}

let usertwo = userone

usertwo email = "gjbyjvrjvhj.com"

// so it is heap so if you ask for value iy will the change bcz it change from referance not copy like stack




