let masyvas=[1,2,3,4,5,6,7,8,9,10,11,12]
for(let i=0; i < masyvas.length; null){
    console.log(masyvas.shift(1))
}


let Masyvas=[1,2,3,4,5,6,7,8,9]
console.log

while(Masyvas.length){
    console.log(Masyvas.shift())
}
console.log


let varduMasyvas = ['Dovydas', 'Ona', 'Rūta', 'ana', 'Ūtė', 'kasparas', 'Apolonijus', 'baltrazamas']

let ipatingiVardai = (masyvas, ilgesnisNei, trumpesnisNei) => {
    for ( i = 0 ; i < masyvas.length ; i = i + 1 )    
    { if(masyvas[i].length > ilgesnisNei && masyvas[i].length < trumpesnisNei && masyvas[i].charAt(0) == masyvas[i].charAt(0).toLowerCase()){
        console.log(masyvas[i])
        } else {}
    }
}



let misrusMasyvas = ['Dovydas', 1, 'Rūta', 2, 33333,12,13,15,14,19,18,15,16, 'kasparas', 20, 15, 7, 44444, 'baltrazamas']

let suformuotasStringuMasyvas = []

let stringuMasyvas = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'string'){
        suformuotasStringuMasyvas.push(masyvas[i])
        } else {}
    }   console.log(suformuotasStringuMasyvas)
}


let ilgesniuStringuMasyvas = []

let ilgesniStringai = (masyvas, daugiauNei) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'string' && masyvas[i].length > daugiauNei ){
        ilgesniuStringuMasyvas.push(masyvas[i])
        } else {}
    }   console.log(ilgesniuStringuMasyvas)
}