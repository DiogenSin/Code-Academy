//------------1--------------
//1) Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.

let body = document.querySelector('body')

let formContainer = document.createElement('section')
formContainer.setAttribute('id', 'formContainer')
body.append(formContainer)
{// forma ir jos laukai
let form = document.createElement('form')
form.setAttribute('id', 'form')
formContainer.append(form)

let fullNameLabel = document.createElement('label') // sukuriamas input lauko label
fullNameLabel.setAttribute('for', 'fullName')
let text = document.createTextNode('Jūsų pilnas vardas:')
fullNameLabel.append(text)
form.append(fullNameLabel)

let fullNameInput = document.createElement('input') // sukuriamas input laukas
fullNameInput.setAttribute('type', 'text')
fullNameInput.setAttribute('id', 'fullName')
fullNameInput.setAttribute('name', 'fullName')
fullNameInput.setAttribute('placeholder', 'John Wick')
form.append(fullNameInput)
}

{// lentelė ir jos laukai


let button = document.createElement('button')
let buttonText = document.createTextNode('Pateikti')
button.append(buttonText)
button.setAttribute('type', 'submit')
button.setAttribute('id', 'button')
form.append(button)


}

{// Vardo pateikimas

let form = document.querySelector('#form')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.dir(event)
    let givenFullName = event.target.elements.fullName.value.trim()
    let fullNameArray = givenFullName.split(' ')
    let firstName = fullNameArray[0]
    let lastName = fullNameArray[1]
    console.log(firstName + ' ir ' + lastName)

    class FullName{// klasę kurti ne event`o viduje
        constructor (firstName, lastName){
            this.vardas = firstName;
            this.pavarde = lastName
        }
    }
    
    let fullName = new FullName(firstName, lastName)


    let nameTable = document.createElement('table')
    nameTable.setAttribute('id', 'table')

    let nameTableBody = document.createElement('tbody')

    let nameTableHeader1 = document.createElement('th')
    let th1 = document.createTextNode('Vardas')
    nameTableHeader1.append(th1)

    let nameTableHeader2 = document.createElement('th')
    let th2 = document.createTextNode('Pavardė')
    nameTableHeader2.append(th2)

    let nameTableRow = document.createElement('tr')

    let nameTableColumn1 = document.createElement('td')
    let td1 = document.createTextNode(fullName[0].vardas)
    nameTableColumn1.append(td1)

    let nameTableColumn2 = document.createElement('td')
    let td2 = document.createTextNode(fullName[0].pavarde)
    nameTableColumn2.append(td2)

    nameTableBody.append(nameTableHeader1, nameTableHeader2)
    nameTableRow.append(nameTableColumn1, nameTableColumn2)
    nameTableBody.append(nameTableRow)
    nameTable.append(nameTableBody)
    form.append(nameTable)

})

}

//------------------------------------------------------------
// susikurti klasę, kuri grąžins antraštės h1-h6 klasę su tekstu ir atributais.

class Heading {
    constructor(props){
        // this.dydis = props[1],
        // this.tekstas = props[2],
        // this.atributai = props[3]

        // [this.dydis, this.tekstas, this.atributai] = props;
        this.props = props
        return this.render()

    }

    render(){
        this.htmlElement = document.createElement(`h${this.props.dydis}`)
        this.textElement = document.createTextNode(this.props.tekstas)
        this.htmlElement.append(this.textElement)

        if(this.props.atributai){
            Object.keys(this.props.atributai).forEach(raktas => {
                this.htmlElement.setAttribute(raktas, this.props.atributai[raktas])
            })
        } else {}

        return this.htmlElement
    }
}

let antraste1 = new Heading({
    dydis: '1', 
    tekstas: 'Kaimietiškai',
    atributai: 
    // {
    //     class: 'klasesVardas',
    //     id: 'kazkoksID',
    //     style: 'color:red'
    // }
    [['class','klasesVardas kitosKlasesVardas'],
    ['id','kazkoksID'],
    ['style','color:red']]
})

document.querySelector('body').append(antraste1)
document.querySelector('body').append(new Heading({dydis: '2', tekstas: 'Kaimietiškai'}))
document.querySelector('body').append(new Heading({dydis: '3', tekstas: 'Kaimietiškai'}))
document.querySelector('body').append(new Heading({dydis: '4', tekstas: 'Kaimietiškai'}))
document.querySelector('body').append(new Heading({dydis: '5', tekstas: 'Kaimietiškai'}))
document.querySelector('body').append(new Heading({dydis: '6', tekstas: 'Kaimietiškai'}))

// {//vienas būdas kurti elementus - atributai masyvuose, kurie yra kituose masyvuose

//     class Heading {
//         constructor(props){
//             // this.dydis = props[1],
//             // this.tekstas = props[2],
//             // this.atributai = props[3]
    
//             // [this.dydis, this.tekstas, this.atributai] = props;
//             this.props = props
//             return this.render()
    
//         }
    
//         render(){
//             this.htmlElement = document.createElement(`h${this.props.dydis}`)
//             this.textElement = document.createTextNode(this.props.tekstas)
//             this.htmlElement.append(this.textElement)
    
//             if(this.props.atributai){
//                 this.props.atributai.forEach(atributas => {this.htmlElement.setAttribute(atributas[0], atributas[1])})
//             } else {}
    
//             return this.htmlElement
//         }
//     }
    
//     let antraste1 = new Heading({
//         dydis: '1', 
//         tekstas: 'Kaimietiškai',
//         atributai: 
//         // {
//         //     class: 'klasesVardas',
//         //     id: 'kazkoksID',
//         //     style: 'color:red'
//         // }
//         [['class','klasesVardas kitosKlasesVardas'],
//         ['id','kazkoksID'],
//         ['style','color:red']]
//     })
    
//     document.querySelector('body').append(antraste1)
//     document.querySelector('body').append(new Heading({dydis: '2', tekstas: 'Kaimietiškai'}))
//     document.querySelector('body').append(new Heading({dydis: '3', tekstas: 'Kaimietiškai'}))
//     document.querySelector('body').append(new Heading({dydis: '4', tekstas: 'Kaimietiškai'}))
//     document.querySelector('body').append(new Heading({dydis: '5', tekstas: 'Kaimietiškai'}))
//     document.querySelector('body').append(new Heading({dydis: '6', tekstas: 'Kaimietiškai'}))


// }