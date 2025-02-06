


import React, { useEffect } from 'react'
import { fetchData } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const Fetchdata = () => {

    const { loading, data, error } = useSelector((state) => state)

    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()
    })
    return (
        <>
            <h1>Fetch-Data</h1>
        </>
    )
}

export default Fetchdata