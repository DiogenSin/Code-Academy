//-----------------KLASĖS---------------------------

/*

Klasė yra objektų šablonas

syntax:

class pavadinimas{
    constructor(par1, par2){
        this.par1 = par1;
        this.par2 = par2;
    }
    methods
}

*/


// Masyvas be klasių
let asmenysBeKlasiu = [
    {
    vardas: 'Dovydas',
    amzius: 26,
    turiVaiku: true


},{
    vardas: 'Rokas',
    amzius: 28,
    turiVaiku: false
}
]

// Masyvas su klasėmis
{
class Asmuo{ // klasės prasideda iš didžiųjų raidžių
    constructor(a, b, c){
        this.vardas = a.split(' ')[0];
        this.pavarde = a.split(' ')[1];
        this.amzius = b;
        this.turiVaiku = c;
    }
    pasisveikinaSu (vardas){
        return this.vardas + ' pasisveikina su ' + vardas;
    }
}



let asmenysSuKlasemis = [
    new Asmuo('Rokas Banaitis', 26, false),
    new Asmuo('Petras Jurgulis', 29, false),
    new Asmuo('Rugile Andriukaitytė', 22, false)
]

console.log(asmenysSuKlasemis)
console.log(asmenysSuKlasemis[0].pasisveikinaSu('Jonas'))
}

class Ledai{
    constructor(pavadinimas, skonis, kaina){
        this.pavadinimas = pavadinimas,
        this.skonis = skonis,
        this.kaina = kaina
    }
    kainosKeitimas(keitimasProcentais){
        return this.kaina + this.kaina*keitimasProcentais/100
    }
}

const leduMasyvas = [
    new Ledai('Dadu', 'Karamelinis', 1.2),
    new Ledai('Tirpuko', 'Avietiniai', 1), 
    new Ledai('Nykštukas', 'Vanilinis', 1.5) 
]

console.log(leduMasyvas)

// atspausdinti visų ledų pavadinimus, skonius ir kainas

console.groupCollapsed('Ledu pavadinimai')

    leduMasyvas.forEach(ledas => console.log(ledas.pavadinimas))

console.groupEnd('Ledu pavadinimai')


console.groupCollapsed('Ledu skoniai')

    leduMasyvas.forEach(ledas => console.log(ledas.skonis))

console.groupEnd('Ledu skoniai')


console.groupCollapsed('Ledu kainos')

    leduMasyvas.forEach(ledas => console.log(ledas.kaina))

console.groupEnd('Ledu kainos')

// užduotis pakeisti ledų kainas

console.groupCollapsed('Ledu kainos su nuolaida')

    leduMasyvas.forEach(ledas => console.log(ledas.kainosKeitimas(-20).toFixed(2)))

console.groupEnd('Ledu kainos su nuolaida')

// užduotis padidinti ledų kainas

console.groupCollapsed('Padidintos ledų kainos')

    leduMasyvas.forEach(ledas => console.log(ledas.kainosKeitimas(20).toFixed(2)))

console.groupEnd('Padidintos ledų kainos')