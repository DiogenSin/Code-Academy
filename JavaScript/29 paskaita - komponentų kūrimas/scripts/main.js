

//           KOMPONENTAI

//          Ul / Ol
{
class List {
    constructor(props){
        this.props = props
        return this.render()
    }

    render = () => {
        this.htmlElement = document.createElement(this.props.type)
        Object.keys(this.props.attributes).forEach(attribute => {            // key paverčia objektą į masyvą
            this.htmlElement.setAttribute(attribute, this.props.attributes[attribute])
        })

        this.props.listItems.forEach(listItem => {
            this.li = document.createElement('li')
            this.liTextNode = document.createTextNode(listItem.text)
            this.li.append(this.liTextNode)
            Object.keys(listItem.attributes).forEach(attribute => {
                this.li.setAttribute(attribute, listItem.attributes[attribute])
            })
            this.htmlElement.append(this.li)
        })


        return this.htmlElement
    }
}

let list = new List({
    type: 'ul',
    attributes: {
        class: 'darkRhemeList',
        id: 'superUnorderedList'
    },
    listItems: [
        {
            text: 'list item text1',
            attributes: {
                class: 'listItem',
                style: 'color: yellow'
            }
        },{
            text: 'list item text2',
            attributes: {
                class: 'listItem',
                style: 'color: green'
            }
        },{
            text: 'list item text3',
            attributes: {
                class: 'listItem',
                style: 'color: red'
            }
        },
    ]
})

document.querySelector('body').append(list)

}

//          Select
{
class Select{
    constructor(props){
        this.props = props
        return this.render()
    }

    render = () => {
        this.SelectwithOptions = document.createElement(this.props.type) // sukuriamas select elementas
        Object.keys(this.props.attributes).forEach(attribute =>{
            this.SelectwithOptions.setAttribute(attribute, this.props.attributes[attribute])
        })

        this.props.options.forEach(option => {
            this.opt = document.createElement('option')
            this.optText = document.createTextNode(option.text)
            this.opt.append(this.optText)
            Object.keys(option.attributes).forEach(attribute => {
                this.opt.setAttribute(attribute, option.attributes[attribute])
            })
            this.SelectwithOptions.append(this.opt)
            console.log(this.props.options)
        })

        return this.SelectwithOptions
    }

}

let select = new Select({
    type: 'select',
    attributes: {name: 'name1', id: 'id1'},
    options: [{
        text: 'pasirinkimas1',
        attributes: {
            value: 'option1', 
            style: 'font-weight:bold'}
    },{
        text: 'pasirinkimas2',
        attributes: {
            value: 'option2', 
            style: 'font-weight: 100'}
    },{
        text: 'pasirinkimas3',
        attributes: {
            value: 'option3', 
            style: 'font-weight:bold; color: blue'}
    },{
        text: 'pasirinkimas4',
        attributes: {
            value: 'option4', 
            style: 'font-weight: 500; red'}
    },{
        text: 'iš bėdos',
        attributes: {
            value: 'option4', 
            style: 'font-weight: 500; red'}
    }]
})

document.querySelector('body').append(select) 
}



//          Table
{
class Table{ // 1 sukuriama klasė
    constructor(props){
        this.props = props
        return this.render()
    }

// 3 žingsnis - naudojantis pateiktu klasės/turinio aprašymu kuriamas lentelės elementas

    render = () => {
        this.lentele = document.createElement('table') // 3.1 sukuriamas tenteles elementas        
        Object.keys(this.props.tableAttributes).forEach(attribute => {
            this.lentele.setAttribute(attribute, this.props.tableAttributes[attribute])
        })

// 4 žingsnis - kuriamas table header
        this.tableHeader = document.createElement('thead') // 4.1 sukuriamas table head
        this.lentele.append(this.tableHeader)
// 5 žingsnis - kuriamas table body elementas
        this.tableBody = document.createElement('tbody') // 5.1 sukuriamas tbody
        this.lentele.append(this.tableBody)

        console.log(this.lentele)
// 6 Žingsnis - kuriamos eilutės (tr) su turiniu, atributais ir tai kiek jų yra nurodyta klasėje
        
        
            this.props.tableData.forEach(eilute => {
            this.eilute = document.createElement('tr')

            this.tableBody.append(this.eilute)

            Object.keys(eilute).forEach(duomuo =>{
                this.duomuo = document.createElement('td')
                this.duomenys = document.createTextNode(this.props.tableData.duomuo)
                this.duomuo.append(this.vardas)
                this.eilute.append(this.duomuo)
            })
        })


    } 
} 

{
let table = new Table({
    
    tableAttributes: {
        id: 'varduTable',
        style: 'height: 50%; width: 50%; background-color: green'
    },

    vardoAttributes:  {
        id: 'vardas',
        style: 'color: blue'
    },
    pavardesAttributes: {
        id: 'pavarde',
        style: 'color: yellow'
    },
    tableData: [{
        vardas: 'Dovydas',
        pavarde: 'Jakas',
        amzius: '26',
        vaikai: 'false',
        vedes: 'false'
    },{
        vardas: 'Dovydas',
        pavarde: 'Jakas',
        amzius: '26',
        vaikai: 'false',
        vedes: 'false'
    },
    {
        vardas: 'Dovydas',
        pavarde: 'Jakas',
        amzius: '26',
        vaikai: 'false',
        vedes: 'false'
    },
    {
        vardas: 'Dovydas',
        pavarde: 'Jakas',
        amzius: '26',
        vaikai: 'false',
        vedes: 'false'
    }]
})

document.querySelector('body').append(table)
}
}
// ******************************* Moduliai**********************************

/*

Kitų JS failų importavimas ir naudojimas

    importuojama naudojantis "import" ką ir iš kur:
    Pvz.: import Heading from './heading.js'

    type='module' - nurodyti atributą type su reikšme 'module' JS failo prijungimo scripte (HTML`e)

    "isKur" faile reikia nurodyti ką jis eksportuoja.
    Pvz.: export default something(){}

*/



//************************Duomenų saugojimas vartotojo dalyje******************************

// // Cookie

document.cookie = `vardas=kazkoks; expires=${new Date('2022 12 17')}`
document.cookie = `kitas=kazkoks; expires=${new Date('2022 12 17')}`
document.cookie = `kitoks=kazkoks; expires=${new Date('2022 12 17')}`

// // Session storage

document.querySelector('body').addEventListener('click', () => {
    sessionStorage.setItem('vardas', 'Dovydas')
    sessionStorage.setItem('pavarde', 'Jakas')
    sessionStorage.setItem('metai', 26)
    
})


// // Local storage

document.querySelector('body').addEventListener('click', () => {
    localStorage.setItem('vardas', 'Dovydas')
    localStorage.setItem('pavarde', 'Jakas')
    localStorage.setItem('metai', 26)
    let data = {
        planeta: 'Žemė',
        zemynas: 'Europa',
        salis: 'Lietuva'
    }


    // localStorage.clear() // išvalo visą storage
    console.log(localStorage.getItem('pavarde'))
    console.log(JSON.stringify(data))


    // JSON.stringify(object) - paverčia objektą į stringą
    // JSON.parse(stringifiedObject) - paverčia stringą į objektą.
    localStorage.setItem('gyvenamojiVieta', JSON.stringify(data))
})
