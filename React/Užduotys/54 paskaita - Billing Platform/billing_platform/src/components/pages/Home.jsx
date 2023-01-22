import BillingContext from "../../BillingContext"
import { useContext } from "react"
import BillingTable from "../organisms/BillingTable"

const Home = () => {

    return (

        <>
        <h1>Užsakymai</h1>
        <BillingTable />
        </>


    )
}

export default Home