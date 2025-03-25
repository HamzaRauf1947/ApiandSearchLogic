import React from 'react'

function Pagination({totalPost,postPerPage,currentPage,setCurrentPage}) {
    let pages = [];
    for (let i=1; i<Math.ceil(totalPost/postPerPage); i++){
        pages.push(i)
    }
    // console.log("aaa",page);
    
  return (
    <div className="flex items-center justify-center gap-2 py-6 flex-wrap">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={()=>setCurrentPage(page)}
                    className={`px-4 py-2 rounded-md cursor-pointer ${
                        currentPage === page
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                    {page}
                </button>
            ))}
        </div>
  )
}

export default Pagination
