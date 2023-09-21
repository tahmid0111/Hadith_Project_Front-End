import React from 'react'

const SingleHadith = ({hadith}) => {
    // const {_id, hadith, narrator } = props.hadith;
    console.log(hadith)
  return (
    <>
      <div className='h-96'>
        <h1 className='text-2xl'>{hadith?.hadith}</h1>
      </div>
    </>
  )
}

export default SingleHadith
