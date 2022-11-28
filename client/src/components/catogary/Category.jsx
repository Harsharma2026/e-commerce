import React from 'react'

const Category = ({catName, catImage}) => {
    console.log(catName);
  return (
    <div className='m-10'>
        <img
            src={catImage}
            className="h-full place-self-center w-[300px]"
            alt="..."
        />
        <div className="text-lg text-center">
              {catName}
        </div>
    </div>
  )
}

export default Category
