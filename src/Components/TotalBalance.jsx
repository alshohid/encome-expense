import React from 'react'

const TotalBalance = ({ items }) => {
  let total = 0
  items.map((item) => {
    total += Number(item.amount)
  })
  console.log(total)
  return (
    <div className="container text-center bg-slate-300 shadow-md mx-auto">
      <div>
        <div>
          <h1 className="  sm:text-sm lg:text-xl font-bold">Total Balance</h1>
          <h2>
            {' '}
            <span className="font-semibold sm:text-lg lg:text-xl">
              {' '}
              {total} <span className="text-sm">BDT</span>{' '}
            </span>{' '}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default TotalBalance
