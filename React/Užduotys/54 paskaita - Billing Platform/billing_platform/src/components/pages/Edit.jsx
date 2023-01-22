import BillingTable from "../organisms/BillingTable"
import BillingContext from "../../BillingContext"
import { useContext } from "react"

const Edit = () => {

    const {selectedBill, changeBill, navigate} = useContext(BillingContext)

    return (
        <>
        <form action="" id="editBill" onSubmit={changeBill}>
        <h1>Edit billing</h1>
        <input type="number" name="id" id="id" defaultValue={selectedBill ? selectedBill.id : ''} readOnly />
        <label htmlFor="">
            Žmonių skaičius
            <input type="number" step="any" defaultValue={selectedBill ? selectedBill.people : ''} name="people" id="people" />
        </label>
        <label htmlFor="">
            Kaina
            <input type="number" step="any" defaultValue={selectedBill ? selectedBill.price : '' } name="price" id="price" />
        </label>
        <div id="buttons">
        <button>Keisti</button>
        <button id="cancel" onClick={() => {navigate('/')}}>Nutraukti</button>
        </div>
        </form>
        <br />
        <br />
        <h1>Pasirinkite norimą pakeisti sąskaitą</h1>
        <BillingTable />
        </>
    )
}

export default Edit