import React from 'react'

const SingleRandom = ({hadith}) => {
    // const {_id, hadith } = props.hadith;
  return (
    <>
      <h1 className="text-5xl">Hadith: {hadith?.hadith}</h1>
    </>
  )
}

export default SingleRandom
