import { useState } from "react"

export const REQ_TYPES = Object.freeze({
    GET:'get',
    POST:"post",
    PUT:"put",
    DELETE:"delete"
})

export const useAxios = (initialState) => {
    const [data, setData] =useState(initialState)
    const [loading, setLoading] =useState(false)
    const [error, setError] =useState()

    const doRequest = ({reqType, endpoint, payload, config}) => {
        setLoading(true);
       return API[reqType](endpoint, payload, config)
        .then(res => {
            setData(res.data)
            return res.data;
        })
        .catch(err => {
            setError(err);
            throw err;
        })
        .finally(()=> setLoading(false));
    }
    return [doRequest, data, loading, error];
}

// const [getProducts, products, productsLoading, err]