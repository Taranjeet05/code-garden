import React from 'react'

const Tags = () => {
  return (
    <div className='bg-white rounded-lg p-7'>
        <h2>Your Tags</h2>
        <div>
            <div>
                <h3>Animals</h3>
                <div className='bg-gray-500 h-20 w-50'>
                    <p className='text-white'>No Animals tags yet</p>
                </div>
            </div>
            <div>
                <h3>Fruits</h3>
                <div className='bg-gray-500 h-20 w-50'>
                    <p className='text-white'>No Fruits tags yet</p>
                </div>
            </div>
            <div>
                <h3>Countries</h3>
                <div className='bg-gray-500 h-20 w-50'>
                    <p className='text-name'>No Countries</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tags