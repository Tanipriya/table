import React from 'react'


const AllData = ({stocks}) => {
    console.log("_chcek", stocks)
    console.log("first", stocks.Sales)



  return (
    <>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>
            {stock.Address !== undefined ? (
              <div>
                <strong>Address:</strong> {stock.Address}
              </div>
            ) : (
              <div>No Address available</div>
            )}
          </li>
        ))}
      </ul>

      {stocks.Products !== undefined && stocks.Products.length > 0 ? (
              <div>
                <strong>Sales:</strong>
                <ul>
                  {stocks.Products.map((sale, saleIndex) => (
                    <li key={saleIndex.sno}>
                     <h1> {sale.barcode}</h1>
                     
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>No Sales data available</div>
            )}
    </>
  )
}

export default AllData