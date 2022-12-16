// OOP pincipai

/*

Inkapsuliacija - objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti tik naudojant objekto viešus metodus.

Abstrakcija - objektas yra nepriklausomumas nuo išorinių sudedamųjų dalių.

Paveldėjimas - viena klasė gali būti kitos klasės patikslinimas/tęsimas/konkretizacija

Polimorfizmas - galimybė dirbti su objektu nežinant jo tikslaus tipo ir struktūros.


*/
class Gyvunas {
    #pavadinimas;
    #kojuKiekis;
    constructor(pavadinimas, kojuKiekis) {
        this.#pavadinimas = pavadinimas
        this.#kojuKiekis = kojuKiekis
    }
    getPavadinimas(){
        return this.#pavadinimas;
    }
    setPavadinimas(){
        this.#pavadinimas = naujasPavadinimas
    }


    getKojuKiekis(){
        return this.#kojuKiekis
    }
    setkojuKiekis(){
        this.#kojuKiekis = naujaskojuKiekis
    }

    valgo(){
        return 'Kažką valgo...'
    }
}

class Kate extends Gyvunas {
    constructor(kojuKiekis){ // konstruktorius automatiškai perima parametrų reikšmes iš ankščiau esančios klasės (pavadinimas nerašomas nes yra definintas klasės extenderyje)
        super('Katė', kojuKiekis)
    }

    #balsoVariantai = ['Miaaau...', 'Psshhhht...', 'Muuuurrrrr...', 'Raaarrrww...']

    #balsoVariantas(){
        return this.#balsoVariantai[Math.floor(Math.random()*this.#balsoVariantai.length)]
    }

    sneka(){
        return this.#balsoVariantas()
    }

    valgo(){
        return 'Valgo peles...'
    }
}

class Voras extends Gyvunas{
    constructor(kojuKiekis){
        super('Voras', kojuKiekis)
    }

    gasdina(){
        return 'Buuu Muahaha'
    }
    valgo(){
        return 'Valgo muses...'
    }
}

let gyvunas = [
    new Gyvunas('Šuo', 4),
    new Kate(4),
    new Voras(8)
]