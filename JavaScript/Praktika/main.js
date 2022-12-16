class Table{
    constructor(props){
        this.props = props
        return this.render()
    }
    render = () => {
        this.table = document.createElement('table')
        this.table.setAttribute('style', 'border: 1px solid black')
        this.props.rows.forEach(row => {
            this.row = document.createElement('tr')
            this.table.append(this.row)
        });

        console.log(this.props.rows)
        console.log(this.table)

    } 
}

let table = new Table({

    columns:[
        'col1',
        'col2',
        'col3'
    ],
    rows:[
        'row1',
        'row2',
        'row3',
        'row4',
    ]

})

document.querySelector('body').append(this.table)