import Bills from "../molecules/Bills"

const BillingTable = () => {


    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th># of people</th>
                        <th>Price</th>
                    </tr>
                    <Bills/>
                </tbody>
            </table>
        </>
    )
}

export default BillingTable