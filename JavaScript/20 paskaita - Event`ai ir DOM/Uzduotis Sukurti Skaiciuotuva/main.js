// Pasirenkamas elementas

let skaiciuotuvoElementas = document.querySelector('#skaiciuotuvo_Elementas')

//---------------------------- 1 Sukuriama formos antraštė ir paragrafas-----------------------------------------

console.group('Skaičiuotuvo antraštė ir paragrafas')

let antraste = document.createElement('h1') // Sukuriamas H1 elementas
let antrastesTekstas = document.createTextNode('Skaičiuotuvas') //Sukuriamas tekstas

let paragrafas = document.createElement('p') // Sukuriamas p elementas
let paragrafoTekstas = document.createTextNode('Į žemiau nurodytus laukus įveskite skaičius, su kuriais norite atlikti matematinius veiksmus. Tuomet pasirinkę norimą matematinį veiksmą paspauskite "Skaičiuoti".') // Sukuriamas tekstas

antraste.append(antrastesTekstas) // prie H1 elemento priskiriamas tekstas
paragrafas.append(paragrafoTekstas) // prie p elemento priskiriamas tekstas
skaiciuotuvoElementas.append(antraste) // prie elemento, kuriame bus forma, priskiriama jos antraštė
skaiciuotuvoElementas.append(paragrafas) // prie elemento, kuriame bus forma, priskiriamas jos paragrafas

console.groupEnd('Skaičiuotuvo antraštė ir paragrafas')

//-------------------------2 Sukuriama forma ir pirmasis (skaučiaus input) laukas---------------------------------

console.group('Skaičiuotuvo formos sukūrimas ir pirmasis laukas')

let forma = document.createElement('form') // sukuriamas formos elementas
forma.setAttribute('id', 'forma') // formai priskiriamas id atributas

let skaicius1Label = document.createElement('label') // sukuriamas label pirmojo skaičiaus laukui
let skaicius1LabelTekstas = document.createTextNode('1. Įveskite primąjį skaičių') // sukuriamas label tekstas
skaicius1Label.setAttribute('for', 'pirmasSkaicius') // label elementui priskiriamas for atributas

let skaicius1 = document.createElement('input') // sukuriamas input laukas pirmąjam skaičiui
skaicius1.setAttribute('type', 'number') // input laukui priskiriamas type atributas
skaicius1.setAttribute('id', 'pirmasSkaicius') // input laukui priskiriamas name atributas
skaicius1.setAttribute('placeholder', 'Skaičius') // input laukui priskiriamas placeholder atributas


skaicius1Label.append(skaicius1LabelTekstas) // label elementui prijungiamas label tekstas
forma.append(skaicius1Label) // formai prijungiamas pirmojo skaičiaus label
forma.append(skaicius1) // formai prijuniamas pirmojo skaičiaus laukas
skaiciuotuvoElementas.append(forma) // formos elementui prijungiama forma

console.groupEnd('Skaičiuotuvo formos laukas')


//---------------------------- 3 Sukuriamas pirmasis (skaučiaus input) laukas--------------------------------------

console.group('Skaičiuotuvo formos antrasis laukas')

let veiksmoLabel = document.createElement('label') // sukuriamas label matematinio veiksmo pasirinkimo laukui
let veiksmoLabelTekstas = document.createTextNode('2. Pasirinkite veiksmą:') // sukuriamas label tekstas
veiksmoLabel.setAttribute('for', 'veiksmas') // label elementui priskiriamas for atributas

let veiksmoPasirinkimai = document.createElement('select') // sukuriamas matematinio veiksmo pasirinkimų laukas
veiksmoPasirinkimai.setAttribute('id', 'veiksmas') // priskiriamas matematinio veiksmo pasirinkimo lauko id

let sudetis = document.createElement('option') // sukuriamas sudeties veiksmo pasirinkimas
sudetis.setAttribute('value', '+') // pasirinkimui priskiriama sudeties reikšmė
let sudetiesTekstas = document.createTextNode('Sudėtis') // sukuriamas sudėties pasirinkimo tekstas
sudetis.append(sudetiesTekstas) // sukurtas pasirinkimo tekstas pridedamas prie pasirinkimo

let atimtis = document.createElement('option') // sukuriamas atimties veiksmo pasirinkimas
atimtis.setAttribute('value', '-') // pasirinkimui priskiriama atimties reikšmė
let atimtiesTekstas = document.createTextNode('Atimtis') // sukuriamas atimties pasirinkimo tekstas
atimtis.append(atimtiesTekstas) // sukurtas pasirinkimo tekstas pridedamas prie pasirinkimo

let daugyba = document.createElement('option') // sukuriamas daugybos veiksmo pasirinkimas
daugyba.setAttribute('value', '*') // pasirinkimui priskiriama daugybos reikšmė
let daugybosTekstas = document.createTextNode('Daugyba') // sukuriamas daugybos pasirinkimo tekstas
daugyba.append(daugybosTekstas) // sukurtas pasirinkimo tekstas pridedamas prie pasirinkimo

let dalyba = document.createElement('option') // sukuriamas dalybos veiksmo pasirinkimas
dalyba.setAttribute('value', '/') // pasirinkimui priskiriama dalybos reikšmė
let dalybosTekstas = document.createTextNode('Dalyba') // sukuriamas dalybos pasirinkimo tekstas
dalyba.append(dalybosTekstas) // sukurtas pasirinkimo tekstas pridedamas prie pasirinkimo

veiksmoLabel.append(veiksmoLabelTekstas) // sukurtam veiksmo pasirinko label priskiriamas tekstas

veiksmoPasirinkimai.append(sudetis) // matematinio veiksmo pasirinkimo laukui priskiriami matematinių veiksmų pasirinkimai (+, -, *, /)
veiksmoPasirinkimai.append(atimtis)
veiksmoPasirinkimai.append(daugyba)
veiksmoPasirinkimai.append(dalyba)

forma.append(veiksmoLabel) // formai priskiriamas matematinių veiksmų pasirinkimo lauko label
forma.append(veiksmoPasirinkimai) // formai priskiriamas matematinių veiksmų pasirinkimo laukas su visais pasirinkimais

console.groupEnd('Skaičiuotuvo formos antrasis laukas')

//------------------------ 4 Sukuriamas trečiasis (skaučiaus input) laukas-------------------------------

console.group('Skaičiuotuvo formos trečiasis laukas')

let skaicius2Label = document.createElement('label') // sukuriamas label pirmojo skaičiaus laukui
let skaicius2LabelTekstas = document.createTextNode('3. Įveskite antrąjį skaičių') // sukuriamas label tekstas
skaicius2Label.setAttribute('for', 'antrasSkaicius') // label elementui priskiriamas for atributas

let skaicius2 = document.createElement('input') // sukuriamas input laukas pirmąjam skaičiui
skaicius2.setAttribute('type', 'number') // input laukui priskiriamas type atributas
skaicius2.setAttribute('id', 'antrasSkaicius') // input laukui priskiriamas name atributas
skaicius2.setAttribute('placeholder', 'Skaičius') // input laukui priskiriamas placeholder atributas

skaicius2Label.append(skaicius2LabelTekstas) // label elementui prijungiamas label tekstas
forma.append(skaicius2Label) // formai prijungiamas pirmojo skaičiaus label
forma.append(skaicius2) // formai prijuniamas pirmojo skaičiaus laukas
skaiciuotuvoElementas.append(forma) // formos elementui prijungiama forma

console.groupEnd('Skaičiuotuvo formos trečiasis laukas')

//------------------------ 5 Sukuriamas duomenų pateikimo mygtukas-------------------------------

console.group('Skaičiuotuvo mygtukas')

let mygtukas = document.createElement('button') // sukuriamas mygtukas
mygtukas.setAttribute('type', 'submit') // mygtukui priskiriamas jo tipas submit
let mygtukoTekstas = document.createTextNode('Skaičiuoti') // sukuriamas mygtuko tekstas
mygtukas.append(mygtukoTekstas) // sukurtas mygtuko tekstas priskiriamas mygtukui

forma.append(mygtukas) // mygtukas priskiriamas formai

console.groupEnd('Skaičiuotuvo mygtukas')

//------------------------ 6 Sukuriamas rezultato laukas-------------------------------

console.group('Rezultato laukas')

let rezultatoLabel = document.createElement('label') // sukuriamas label rezultato laukui
let rezultatoLabelTekstas = document.createTextNode('Rezultatas:') // sukuriamas label tekstas
rezultatoLabel.setAttribute('for', 'rezultatas') // label elementui priskiriamas for atributas
rezultatoLabel.setAttribute('hidden', '') // label elementui priskiriamas for atributas

let rezultatas = document.createElement('input') // sukuriamas input laukas rezultatui
rezultatas.setAttribute('type', 'number') // input laukui priskiriamas type atributas
rezultatas.setAttribute('id', 'rezultatas') // input laukui priskiriamas name atributas
rezultatas.setAttribute('readonly', '') // input laukui priskiriamas readonly atributas
rezultatas.setAttribute('placeholder', '---')

rezultatoLabel.append(rezultatoLabelTekstas) // label elementui prijungiamas label tekstas
forma.append(rezultatoLabel) // formai prijungiamas rezultato label
forma.append(rezultatas) // formai prijuniamas rezultato laukas
skaiciuotuvoElementas.append(forma) // formos elementui prijungiama forma

console.groupEnd('Rezultato laukas')

//------------------------ 7 Pateiktų duomenų siuntimas į JS`ą-------------------------------

let skaiciuotuvas = document.querySelector('#forma')
console.dir(skaiciuotuvas)

skaiciuotuvas.addEventListener('submit', function(event){
    event.preventDefault(); // neleidžia puslapiui persikrauti paspaudus mygtuką
    console.dir(event);
    let pasirinktas1Skaicius = event.target.elements.pirmasSkaicius.valueAsNumber // gražina pirmąjį skaičių
    let pasirinktasVeiksmas = event.target.elements.veiksmas.value // gražina pasirinkto veiksmo simbolį
    let pasirinktas2Skaicius = event.target.elements.antrasSkaicius.valueAsNumber // grąžina antrąjį skaičių

    console.log('Pasirinktas veiksmas: ' + pasirinktas1Skaicius + ' ' + pasirinktasVeiksmas + ' ' + pasirinktas2Skaicius) // patikrinama ar įvesti duomenys teisingi

    let rezultatas =  "" // sukuriamas tuščias domuo būsimam rezultatui įterpti

    switch(pasirinktasVeiksmas){ // pagal pasirinktą matematinį veiksmą atliekamas skaičiavimas
        case "+": 
        rezultatas = pasirinktas1Skaicius + pasirinktas2Skaicius;
        break;

        case "-": rezultatas = (pasirinktas1Skaicius - pasirinktas2Skaicius);
        break;

        case "*": rezultatas = (pasirinktas1Skaicius * pasirinktas2Skaicius);
        break;

        case "/": 
        if (pasirinktas2Skaicius != 0){ // S1lyga neleidžianti dalybos iš nulio
            rezultatas = (pasirinktas1Skaicius / pasirinktas2Skaicius);
        } else {
            event.target.elements.antrasSkaicius.style.border = "2px solid red"
            window.alert('Dalyba iš nulio negalima!')
        }

        break;
    }
    console.log('Rezultatas ir duomenų tipas: ' + rezultatas + ' ' + typeof(rezultatas)) // patikrinamas rezultatas ir duomenų tipas

    event.target.elements.rezultatas.valueAsNumber = rezultatas
    event.target.elements.rezultatas.style.textAlign = 'center'
    event.target.elements.rezultatas.style.backgroundColor = '#47b38f'
    event.target.elements.rezultatas.style.borderColor = '#0579ad'
    event.target.elements.rezultatas.style.fontWeight = 'bold'



})

