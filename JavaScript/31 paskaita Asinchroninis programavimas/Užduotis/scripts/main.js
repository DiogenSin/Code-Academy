


//---------------Storage--------------------

let stocks = {
    fruits : ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    holder: ['Cone', 'Cup', 'Stick'],
    toppings: ['Chocolate', 'Sprinkles', 'Peanuts'],
    liquid: ['Water', 'Ice']
 }

 //--------------Process------------------
 // Client order => Getting ingrediets => Production => Serving    <<< General process
 
 /* Process in detail

 1 - Place order (2s)
2 - Cut the fruits (2s)
3 - Add water and ice (1s)
4 - Start the machine (1s)
5 - Pick a container (2s)
6 - Select toppings (3s)
7 - Serve ice cream (2s)

*/

 let order = (fruit_name, call_production) => {

    setTimeout(function(){
        console.log(`${stocks.fruits[fruit_name]} was selected`)

    call_production()
    }, 2000);
 }

 let production = () => {

    setTimeout(() => {
       console.log('Production has started')

       setTimeout(() => {
        console.log('The fruit has been chopped')

        setTimeout(() => {
           console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

           setTimeout(() => {
                console.log('Machine started')

                setTimeout(() => {
                   console.log(`Ice cream placed on ${stocks.holder[1]}`)

                    setTimeout(() => {
                       console.log(`${stocks.toppings[0]} as toppings`)
                       
                       setTimeout(() => {
                        console.log('Ice cream served')
                        console.log('------------------------')
                       }, 2000);

                    }, 3000);

                }, 2000);

           }, 1000); 
        }, 1000);

     }, 2000);

    }, 0000);
 }


let is_shop_open = true

let order1 = (time, work) =>{
    return new Promise ((resolve, reject) => {

        if (is_shop_open){
            
            setTimeout(() => {
                resolve(work())
            }, time);
        } else { reject(console.log('Our shop is closed')) }
    })
}

order1(2000, () => console.log(`${stocks.fruits[0]} was selected`))
    
    .then (() => {
        return order1(0000, () => console.log('Production is started'))
    })
    
    .then (() => {
        return order1(2000, () => console.log('The fruit has been chopped'))
    })
    .then (() => {
        return order1(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
    })
    .then (() => {
        return order1(1000, () => console.log('Machine started'))
    })
    .then (() => {
        return order1(2000, () => console.log(`Ice cream placed on ${stocks.holder[1]}`))
    })
    .then (() => {
        return order1(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
    })
    .then (() => {
        return order1(2000, () => console.log('Ice cream served'))
    })

    .catch(()=>{
        console.log("Customer left")
      })



    function toppings_choice (){
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
      
            resolve( console.log("which topping would you love?") )
      
          },3000)
        })
      }

      async function kitchen(){

        console.log("A")
        console.log("B")
        console.log("C")
        
        await toppings_choice()
        
        console.log("D")
        console.log("E")
      
      }
      
      // Trigger the function
      
      async function kitchen(){
            try{
            await time(2000)
            console.log(`${stocks.Fruits[0]} was selected`)
        
            await time(0000)
            console.log("production has started")
        
            await time(2000)
            console.log("fruit has been chopped")
        
            await time(1000)
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
        
            await time(1000)
            console.log("start the machine")
        
            await time(2000)
            console.log(`ice cream placed on ${stocks.holder[1]}`)
        
            await time(3000)
            console.log(`${stocks.toppings[0]} as toppings`)
        
            await time(2000)
            console.log("Serve Ice Cream")
            }
        
            catch(error){
             console.log("customer left")
            }
        finally{
            console.log("Day ended, shop closed")
          }
     }
     kitchen();
        console.log("doing the dishes")
        console.log("cleaning the tables")
        console.log("taking orders")

        function time(ms) {
        
           return new Promise( (resolve, reject) => {
        
              if(is_shop_open){
                 setTimeout(resolve,ms);
              }
        
              else{
                 reject(console.log("Shop is closed"))
              }
            });
        }