import React from 'react'
import useData from '../Hooks/Data'

const Pagination = ({ page, setPage }) => {
    const { data } = useData();
    const length = Math.ceil(data.length / 8);

    if (!data || data.length === 0) return null;

    return (
        <div className='flex flex-col items-center justify-center gap-4 mt-14'>

            {/* Prev / Next buttons */}
            <div className='flex gap-4 items-center'>
                <button
                    onClick={() => setPage((prev) => prev - 1)}
                    disabled={page === 1}
                    className={`px-4 py-1.5 text-white rounded-md duration-100 ${page !== 1 ? 'bg-red-500 cursor-pointer' : 'bg-red-400 cursor-not-allowed'
                        }`}
                >
                    Prev
                </button>

                <p className='font-semibold text-red-500'><span className='font-bold text-xl'>{page}</span> / <span className='text-red-400'>{length}</span></p>

                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={page === length}
                    className={`px-4 py-1.5 text-white rounded-md  duration-100 ${page !== length ? 'bg-red-500 cursor-pointer' : 'bg-red-400 cursor-not-allowed'
                        }`}
                >
                    Next
                </button>
            </div>

            {/* Page Numbers */}
            {/* <div className='flex flex-wrap gap-2 justify-center'>
                {
                    Array.from({ length }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`w-9 h-9 rounded-full text-sm font-semibold border-2 ${page === i + 1 ? 'bg-red-500 text-white border-red-500' : 'bg-white text-red-500 border-red-300 hover:bg-red-100'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))
                }
            </div> */}
        </div>
    );
}

export default Pagination;
