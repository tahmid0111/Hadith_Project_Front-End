import React from 'react'

const SingleHadith = (props) => {
    const {_id, hadith, narrator } = props.hadith;
  return (
    <>
      <h1 className='text-2xl'>{hadith}</h1>
    </>
  )
}

export default SingleHadith
