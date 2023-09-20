import React from 'react'

const SingleHadith = ({hadith}) => {
    // const {_id, hadith, narrator } = props.hadith;
    console.log(hadith)
  return (
    <>
      <h1 className='text-2xl'>{hadith?.hadith}</h1>
    </>
  )
}

export default SingleHadith
