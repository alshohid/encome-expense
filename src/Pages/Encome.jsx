import React, { useState } from 'react'
import NavLayout from '../NavLayout/NavLayout'
import IncomeDetails from '../Components/IncomeDetails'
import ShowingProduct from '../Components/ShowingProduct'
import TotalBalance from '../Components/TotalBalance'

const Encome = () => {
  const [items, setItems] = useState([])
  const handleAddItem = (item) => {
    setItems((items) => [...items, item])
  }

  return (
    <NavLayout>
      <TotalBalance items={items} />
      <IncomeDetails handleAddItem={handleAddItem} />
      <ShowingProduct items={items} />
    </NavLayout>
  )
}

export default Encome
