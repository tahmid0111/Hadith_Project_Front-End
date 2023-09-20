import { useState, useEffect } from 'react'
import SingleRandom from './SingleRandom'

const Random = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('https://random-hadith-server.vercel.app/random-hadith')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
  return (
    <>
      <h1 className="text-5xl">This is Random Hadith Generator</h1>
        <div>
          <SingleRandom hadith={datas} />
        </div>
    </>
  )
}

export default Random
