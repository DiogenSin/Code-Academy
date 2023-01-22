import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const BillingContext = createContext()

const BillingProvider = ({children}) => {

const [data, setData] = useState(null)
const [selectedBill, setSelectedBill] = useState(null)

const getData = async () => {
    const receivedData = await fetch('http://localhost:3000/bills')
    .then (res => res.json())
    setData(receivedData)
}

const addNew = (e) => {
    e.preventDefault()
    console.log(e)

    let newBillingList = [...data]
    let newId = newBillingList.length +1
    let newPeople = e.target.people.valueAsNumber
    let newPrice = e.target.price.valueAsNumber
    newBillingList.push({id:newId, people:newPeople, price:newPrice})
    setData(newBillingList)
    
    fetch('http://localhost:3000/bills', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: newId,
            people: newPeople,
            price: newPrice,
        })
    })
    
}

const selectBill = (e) => {
    let newSelectedBill = e
    setSelectedBill(newSelectedBill)
}

const changeBill = (e) => {
    e.preventDefault()
    console.log(e)
    let changedData = [...data]
    let index = e.target.id.value
    let location = changedData.findIndex(bill => bill.id == index)
    changedData[location].id = e.target.id.value
    changedData[location].people = e.target.people.value
    changedData[location].price = e.target.price.value
    setData(changedData)

    fetch(`http://localhost:3000/bills/${e.target.id.value}`, {
        method: "PUT",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          id: e.target.id.value,
          people: e.target.people.value,
          price: e.target.price.value
        })
  })

}   

useEffect(() => {
    getData()
  }, [])

    return (

        <BillingContext.Provider
            value={{
                data, 
                useEffect, 
                addNew, 
                selectBill, 
                selectedBill,
                changeBill
            }}>
            {children}
        </BillingContext.Provider>

    )
}

export default BillingContext
export {BillingProvider}
