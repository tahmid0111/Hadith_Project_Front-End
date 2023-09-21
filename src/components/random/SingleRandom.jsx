import React from 'react'

const SingleRandom = ({hadith}) => {
    // const {_id, hadith } = props.hadith;
  return (
    <>
      <h1 className="text-5xl text-red-500">Hadith: <span className='text-red-200'>{hadith?.hadith}</span></h1>
    </>
  )
}

export default SingleRandom
