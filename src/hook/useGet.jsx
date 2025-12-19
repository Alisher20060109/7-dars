import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useGet = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const getAllData = async () => {
    try{
      let res = await axios.get(`https://692458a93ad095fb8473d421.mockapi.io/${url}`)
      setData(res.data)
      setLoading(false)
    }catch(err){
      console.log("Xatolik yuz berdi:", err);
    }

  }
  useEffect(() => {
    setLoading(true)
    getAllData()
  }, [])
  return { data, loading }
}


export default useGet
