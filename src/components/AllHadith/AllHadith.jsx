import React from 'react'
import { useState, useEffect } from 'react'
import SingleHadith from './SingleHadith'

const AllHadith = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('https://random-hadith-server.vercel.app/all-hadith')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
  return (
    <>
      <div>
        {
            datas.map((hadith) = <SingleHadith key={hadith._id} hadith={hadith} />)
        }
      </div>
    </>
  )
}

export default AllHadith
