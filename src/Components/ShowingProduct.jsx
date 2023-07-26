const ShowingProduct = ({ items }) => {
  return (
    <div className="container mx-auto h-screen">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-slate-200 text-center">
            <tr>
              <th>Sl.No</th>
              <th>Description</th>
              <th>Date & Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {items.map((item, index) => {
              let currentTime = item.currentDate
              let currentDate = new Date(currentTime).toLocaleDateString()
              let current = new Date(currentTime).toLocaleTimeString()

              return (
                <tr key={index}>
                  <th> {index + 1}</th>
                  <td>{item.description} </td>
                  <td>
                    {currentDate}{' '}
                    <span className="text-sm font-bold">{current} </span>{' '}
                  </td>
                  <td>
                    {' '}
                    <span className="font-bold">{item.amount}</span>{' '}
                    <span className="text-xs ">BDT</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowingProduct
