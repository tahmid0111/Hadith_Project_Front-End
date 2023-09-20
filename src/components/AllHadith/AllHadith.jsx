import { useState, useEffect } from 'react'
import SingleHadith from './SingleHadith'

const AllHadith = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('https://random-hadith-server.vercel.app/all-hadith')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
    // console.log(datas[10])
  return (
    <>
        {/* <h1 className='text-5xl text-red-500'>{datas[0].hadith}</h1> */}

        {
            datas.map((hadith) = <SingleHadith key={hadith._id} hadith={hadith} />)
        }
    </>
  )
}

export default AllHadith
