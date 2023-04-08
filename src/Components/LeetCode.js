import React from 'react'
import { useEffect, useState } from 'react'
const LeetCode = () => {
  const [result, setResult] = useState({})
  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/user6533fJ")
      .then((response) => response.json())
      .then((data) => {
        setResult(data)
        console.log(data)
      });
    return () => {
    }
  }, [])

  return (
    <div className='leetcode pt-3 pb-3'>
      {/* https://dunks1980.com/ */}
      <h1 className='text-center'>My Leet Code Progress</h1>
      <p className='text-center'>Data is gathered from leetcode stats api</p>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-4 mb-3'>
            <div className='card'>
              <h1 className='text-center'>Easy</h1>
              <p>{(result.status === "success") ? result.easySolved + "/" + result.totalEasy : "loading..."}</p>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-3'>
            <div className='card'>
              <h1 className='text-center'>Medium</h1>
              <p>{(result.status === "success") ? result.mediumSolved + "/" + result.totalMedium : "loading..."}</p>
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='card'>
              <h1 className>Hard</h1>
              <p>{(result.status === "success") ? result.hardSolved + "/" + result.totalHard : "loading..."}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeetCode