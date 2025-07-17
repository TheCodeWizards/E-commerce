import React from 'react'

const Feature = () => {
    const features = [
        { icon: 'fa-solid fa-truck-fast', text: 'Free Shipping', subText: 'On orders over $100' },
        { icon: 'fa-solid fa-lock', text: 'Secure Payment', subText: '100% protected payments' },
        { icon: 'fa-solid fa-arrow-rotate-left', text: 'Easy Returns', subText: '30 day return policy' },
        { icon: 'fa-solid fa-clock', text: '24/7 Support', subText: 'Dedicated customer service' },
    ]
    return (
        <div className=' bg-gray-100  px-4 py-10 '>
            <div className='max-w-6xl flex flex-wrap mx-auto justify-between items-center  gap-6 '>

            {
                features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-4'>
                        <i className={`${feature.icon} text-4xl text-gray-600`}></i>
                        <div>
                            <p className='text-gray-900 text-base font-medium'>{feature.text}</p>
                            <p className='text-sm mt-1 text-gray-500'>{feature.subText}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Feature