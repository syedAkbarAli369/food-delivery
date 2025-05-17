

import React from 'react'

const Orders = () => {
  return (
    <div className='p-3 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead className='text-left'>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm lg:text-base bg-red-100'>
            <td className='py-6 px-1'>123456789</td>
            <td className='py-6 px-1'>18.05.2025</td>
            <td className='py-6 px-1'>89.98</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx, 9min)...</td>
          </tr>
          <tr className='text-sm lg:text-base odd:bg-gray-100'>
            <td className='py-6 px-1'>123456789</td>
            <td className='py-6 px-1'>18.05.2025</td>
            <td className='py-6 px-1'>89.98</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx, 9min)...</td>
          </tr>
          <tr className='text-sm lg:text-base odd:bg-gray-100'>
            <td className='py-6 px-1'>123456789</td>
            <td className='py-6 px-1'>18.05.2025</td>
            <td className='py-6 px-1'>89.98</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx, 9min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Orders