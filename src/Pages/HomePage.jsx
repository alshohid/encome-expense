import React from 'react'
import NavLayout from '../NavLayout/NavLayout'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <NavLayout>
      <div className="bg-gray-150 container mx-auto min-h-screen p-8">
        <div className=" mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Welcome to Your Financial Portal
          </h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 grid-cols-1 sm:text-md">
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Income</h2>
              <p className="text-lg">
                "Make money while you sleep. Let your money work for you."
              </p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Expense</h2>
              <p className="text-lg">
                "Cut down on unnecessary expenses. Every penny saved is a penny
                earned."
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-md text-justify">
              Income and expenses play a crucial role in everyone's financial
              journey. Income represents the money earned through various
              sources, such as salaries, investments, or businesses. It provides
              the means to cover essential needs, pursue dreams, and achieve
              financial security. Effective budgeting and financial planning are
              essential to manage income wisely, ensuring it aligns with short
              and long-term goals. On the other hand, expenses encompass the
              money spent on necessities, luxuries, and financial obligations.
              Controlling expenses is vital for maintaining a healthy financial
              balance and avoiding debt. Understanding the balance between
              income and expenses is key to achieving financial stability and
              building a secure future.
            </p>
          </div>
          <div className="mt-4">
            <NavLink to="/income">
              {' '}
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-4">
                Income
              </button>{' '}
            </NavLink>
            <NavLink to="/expense">
              {' '}
              <button className="bg-green-500 text-white rounded-lg px-4 py-2">
                Expense
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </NavLayout>
  )
}

export default HomePage
