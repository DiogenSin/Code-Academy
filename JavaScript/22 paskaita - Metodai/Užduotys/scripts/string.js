//-----------------1 užduotis-------------------------

console.groupCollapsed('Vardo kartotuvė')

let vardoKartotuvas = document.querySelector('#vardo-kartotuvas');

vardoKartotuvas.addEventListener ('submit', function(e){ // formoje pradedame klausytis submit veiksmo atlikimo
    e.preventDefault(e); // išjungiame numatytąjį puslapio perkrovimą po mygtuko paspaudimo   
    
    let vardas = e.target.elements.vardas.value // parsitraukiame vardo input`e pateiktą info
    let skaicius = e.target.elements.skaicius.valueAsNumber

    if (skaicius % 1 == 0){

        for ( i = 0 ; i < skaicius ; i++){
            vardoKartotuvas.innerHTML += `
            <h1>${vardas}</h1>
            `
        }

    } else console.log(skaicius + ' yra skaičius su liekana')
})

console.groupEnd('Vardo kartotuvė')

//-----------------2 užduotis-------------------------

console.groupCollapsed('Vardas kvadratu')

let vardasKvadratu = document.querySelector('#vardasKvadratu');

vardasKvadratu.addEventListener ('submit', function(e){ // formoje pradedame klausytis submit veiksmo atlikimo
    e.preventDefault(e); // išjungiame numatytąjį puslapio perkrovimą po mygtuko paspaudimo   
    
    let vardas1 = e.target.elements.vardas1.value.trim() // parsitraukiame vardo input`e pateiktą info
    let vardoIlgis = vardas1.length
    console.log(vardas1 + ' turi ' + vardoIlgis + ' raides.')

        for ( i = 0 ; i < vardoIlgis ; i++){
                console.log(vardas1)
                vardasKvadratu.innerHTML += `
                <h1>${vardas1}</h1>
                `
            }
})

console.groupEnd('Vardas kvadratu')


//-----------------3 užduotis-------------------------

console.groupCollapsed('Vardas Pavarde')

let vardasPavardeForma = document.querySelector('#vardasPavarde');

vardasPavardeForma.addEventListener ('submit', function(e){ // formoje pradedame klausytis submit veiksmo atlikimo
    e.preventDefault(e); // išjungiame numatytąjį puslapio perkrovimą po mygtuko paspaudimo   
    
    let vardasPavarde = e.target.elements.vardoPavardesLaukas.value.split(' ') // parsitraukiame vardo input`e pateiktą info

    let vardoLaukas = document.createElement('h1')
    let pavardesLaukas = document.createElement('h1')
    
    console.log(vardasPavarde)
    


    if ( vardasPavarde.length == 1){
        vardoLaukas.append(vardasPavarde[0])
        vardasPavardeForma.append(vardoLaukas)
        } else {
            vardoLaukas.append(vardasPavarde[0])
            vardasPavardeForma.append(vardoLaukas)
            for ( i = 1 ; i < vardasPavarde.length ; i++){
                pavardesLaukas.append(' ', vardasPavarde[i])
                vardasPavardeForma.append(pavardesLaukas)
        }
    } 

        // for ( i = 0 ; i < vardoIlgis ; i++){
        //         console.log(vardas1)
        //         vardasKvadratu.innerHTML += `
        //         <h1>${vardas1}</h1>
        //         `
        //     }
})

console.groupEnd('Vardas Pavarde')