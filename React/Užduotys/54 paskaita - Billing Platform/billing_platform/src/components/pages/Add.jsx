import BillingContext from "../../BillingContext"
import { useContext } from "react"

const Add = () => {

    const {addNew} = useContext(BillingContext)

    return (
        <>
        <form action="" id="newBill" onSubmit={addNew}>
        <h1>Pridėti sąskaitą</h1>
        <label htmlFor="">
            Žmonių skaičius
            <input type="number" name="" id="people" />
        </label>
        <label htmlFor="">
            Kaina
            <input type="number" id="price"/>
        </label>
        <button>Pridėti</button>
        </form>
        </>
    )
}

export default Add