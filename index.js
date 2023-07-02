//asynchronous ops

// console.log('i')
// setTimeout(()=>{
//     console.log('love')
// })
// console.log('icecream')


let stocks={
    fruits:["mango","apple","banana","strawberry"],
    liquid:["ice","water"],
    holder:['cone','cup','stick'],
    toppings:["chocolate","sprinkles","nuts"]
}

// let order=(fruitName,call_production)=>{
//     setTimeout(function(){

    
//     console.log(`${stocks.fruits[fruitName]} was selected`)
//     // console.log("order placed call production")
//    call_production()
// },2000)
// }

//CALLBACK HELL

// let production=()=>{
//     //console.log("production has started")
//  setTimeout(()=>{
//     console.log("production has started")
//     setTimeout(()=>{
//         console.log("the fruit has been chopped")
//         setTimeout(()=>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//             setTimeout(()=>{
//                 console.log('start the machine.')
//                 setTimeout(()=>{
//                     console.log(`icecream placed on ${stocks.holder[1]}`)
//                     setTimeout(()=>{
//                         console.log(`${stocks.toppings[1]} is added`)
//                         setTimeout(()=>{
//                             console.log("serve icecream.")
//                         },2000)
//                     },3000)
//                 },2000)
//             },1000)
//         },1000)
//     },2000)
// },0000)
// }

// order(0,production)

//* PROMISES ARE USED TO ESCAPE FROM CALLBACK HELL.
//promises were invented to solve the problem of callback hell and better handle our task.


let is_shop_open= true

// let order=(time,work)=>{  //step1: order is made.
//      return new Promise( (resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)
            
//         }
//         else{
//             reject(console.log('our shop is closed!'))
//         }
//      })                     //step2: we make a promise. saying we're gonns serve you icecream
// }

// order(2000,()=>console.log(`${stocks.fruits[1]} is chosen`))

// .then(()=>{
//      return order(2000,()=>{
//         console.log("the fruit's been cut.")
//     })
// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log(`${stocks.liquid[1]} and ${stocks.liquid[0]} added`)
//     })
// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log('machine started')
//     })
// })

// .then(()=>{
//     return order(2000,()=>{
//         console.log(`${stocks.holder[1]} is selected`)
//     })
// })

// .then(()=>{
//     return order(3000,()=>{
//         console.log(`added ${stocks.toppings[2]} topping`)
//     })
// })

// .then(()=>{
//     return order(2000,()=>{
//         console.log("icecream is served.")
//     })
// })
// .catch(()=>{
//     console.log("customer left")
// })

// .finally(()=>{
//     console.log("day ended shop is closed..")
// })




