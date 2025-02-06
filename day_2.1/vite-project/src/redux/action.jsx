export const FETCH_REQUEST_SUCCESS='FETCH_REQUEST_SUCCESS'

export const FETCH_REQUEST_FAILURE='FETCH_REQUEST_FAILURE'

export const FETCH_REQUEST_PENDING='FETCH_REQUST_PENDING'


export const fetchDatapending=()=>{
    return {
        type:FETCH_REQUEST_PENDING
    }
}

export const fetchDataSuccess=(data)=>{
    return {
        type:FETCH_REQUEST_SUCCESS,
        payload:data
    }
}

export const fetchDataFailure=(error)=>{
    return {
        type:FETCH_REQUEST_FAILURE,
        payload:error
    }
}

export const fetchData=()=>{
    return async (dispatch)=>{
        dispatch(fetchDatapending())
        try {
            const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(fetchDataSuccess(response.data))
        } catch (error) {
            dispatch(fetchDataFailure(error))
        }
    }

}