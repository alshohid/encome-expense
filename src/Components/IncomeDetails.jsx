import React, { useState } from 'react'

const IncomeDetails = ({ handleAddItem }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleForm = (e) => {
    e.preventDefault()

    if (!description || !amount) return
         localStorage.setItem('number', amount)

    localStorage.setItem('name', description)
    handleAddItem({ description, amount, currentDate: Date.now() })

    localStorage.setItem('number', amount)

    localStorage.setItem('name', description)
    setDescription('')
    setAmount('')
  }

  return (
    <form onSubmit={handleForm}>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col space-y-4">
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="name"
            className="rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Description "
          ></textarea>

          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            type="number"
            placeholder="Enter Your amount"
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4  w-20 mx-auto"
            type="submit"
          >
            Deposit
          </button>
        </div>
      </div>
    </form>
  )
}

export default IncomeDetails
