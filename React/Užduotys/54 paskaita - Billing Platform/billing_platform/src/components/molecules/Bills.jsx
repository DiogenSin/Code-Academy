import BillingContext from "../../BillingContext"
import { useContext } from "react"

const Bills = () => {
    
    const {data, selectBill} = useContext(BillingContext)

    return (
        <>
            {
            data ?
            data.map(bill => {
                return(
                    <tr key={bill.id} onClick={() => selectBill(bill)}>
                        <td>#{bill.id}</td>
                        <td>{bill.people}</td>
                        <td>{bill.price} Eur</td>
                    </tr>
                )

            })
            :
                    <tr>
                        <td>Kraunama</td>
                    </tr>
            }
        </>
    )
}

export default Bills