console.groupCollapsed('Teorija')

let renkames1 = document.querySelectorAll('p')
console.dir(renkames1)
console.log(renkames1)

// console.dir grąžina interaktyvų elemento savybių sąrašą
// console.log grąžina elementą

for (let i = 0 ; i < renkames1.length ; i++){
    renkames1[i].addEventListener('click', function(){
        console.log('Paspaudei ant ' + i + ' paragrafo.')
    })
}

// Renkantis sąrašą (kai naudojamas querySelectorAll('p'))
// Reikia papildomai pasirinkti elementą renkames1[elemento numeris].addEventListener

let renkames2 = document.querySelector('html');
renkames2.addEventListener('keydown', function(event){
    console.dir(event)
    console.log('Paspaudei ' + event.key + ' mygtuką.')
})

let visiH1 = document.querySelectorAll('H1');

for ( let i = 0; i < visiH1.length ; i++){
    console.dir(visiH1[i])
    visiH1[i].textContent += ' :)'
    visiH1[i].style.color = 'red'
}


for (let i = 0 ; i < visiH1.length ; i++){
    visiH1[i].addEventListener('click', function(){
        visiH1[i].style.color = 'blue'
    })
}

console.groupEnd('Teorija')
//----------------- Užduotys----------------------
//------------------- 2 --------------------------
// Iš JS'o selektinti elementus 10 naudojant skirtingų selektorių.

console.groupCollapsed('2 užduotis')

// let bodySelector = document.querySelector('body')
// console.dir(bodySelector)
// console.log(bodySelector)

// let mainSelector = document.querySelector('main')
// console.dir(mainSelector)
// console.log(mainSelector)

// let sectionSelector = document.querySelector('section')
// console.dir(sectionSelector)
// console.log(sectionSelector)

// let divSelector = document.querySelector('div')
// console.dir(divSelector)
// console.log(divSelector)

// let h1Selector = document.querySelector('h1')
// console.dir(h1Selector)
// console.log(h1Selector)

// let pSelector = document.querySelector('p')
// console.dir(pSelector)
// console.log(pSelector)

// let spanSelector = document.querySelector('span')
// console.dir(spanSelector)
// console.log(spanSelector)

// let buttonSelector = document.querySelector('button')
// console.dir(buttonSelector)
// console.log(buttonSelector)

// let imgSelector = document.querySelector('img')
// console.dir(imgSelector)
// console.log(imgSelector)

// let aSelector = document.querySelector('a')
// console.dir(aSelector)
// console.log(aSelector)

console.groupEnd('2 užduotis')

//------------------- 3 --------------------------
// Išbandyti 5 skirtingus event'ų listener'ius.
console.groupCollapsed('3 užduotis')



// Patikrinti - neveikia

let sectionSelector = document.querySelectorAll('section');
 for( let i = 0 ; i < sectionSelector.length ; i++){
    sectionSelector[i].addEventListener('click', function(){
        sectionSelector[i].style.border = '1px solid black'
    })
}



let h1Selector = document.querySelectorAll('h1');
 for( let i = 0 ; i < h1Selector.length ; i++){
    h1Selector[i].addEventListener('dblclick', function(){
        h1Selector[i].style.backgroundColor = 'purple'
    })
}


let spanSelector = document.querySelectorAll('span');
 for( let i = 0 ; i < spanSelector.length ; i++){
    spanSelector[i].addEventListener('mouseover', function(){
        spanSelector[i].style.backgroundColor = 'purple'
        spanSelector[i].style.color = 'white'
    })
}

 for( let i = 0 ; i < spanSelector.length ; i++){
    spanSelector[i].addEventListener('mouseout', function(){
        spanSelector[i].style.backgroundColor = 'blue'
        spanSelector[i].style.color = 'red'
    })
}


let buttonSelector = document.querySelectorAll('button')

console.dir(buttonSelector)
console.log(buttonSelector)

let imgSelector = document.querySelector('div >img')
imgSelector.addEventListener('mouseover', function(){
    imgSelector.style.opacity = '50%'
})
imgSelector.addEventListener('mouseout', function(){
    imgSelector.style.opacity = '100%'
})


console.dir(imgSelector)
console.log(imgSelector)


console.groupEnd('3 užduotis')

//------------------- 4 --------------------------
// Uždėti vienodą event'ą, 5'iems vienu metu selektintiems elementams.
console.groupCollapsed('4 užduotis')

console.groupEnd('4 užduotis')


//--------------DOM kūrimas JS--------------------

let DOM_is_JS = document.querySelector('#DOM_is_JS')
DOM_is_JS.innerHTML += '<p> Labas </p>';

let paragrafas = document.createElement('p');
let textas = document.createTextNode ('Text Node')
paragrafas.append(textas)
DOM_is_JS.append(paragrafas)
console.log(paragrafas)


//---------------DOM stilizavimas iš JS--------------

paragrafas.style.color = 'red'
paragrafas.className = 'tekstas' // importuojama CSS klasė.
paragrafas.setAttribute('class', 'tekstas1') // importuojama CSS klasė kitaip
paragrafas.classList.add('CSS_Klase')
paragrafas.classList.add('CSS_Klase1')
paragrafas.classList.add('CSS_Klase2')


