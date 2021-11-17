import { GET } from './api';



export const getAllDatas = () => {
    return (dispatch) => {
        const datas = GET()
        datas.then(response => {
            console.log(response)
            dispatch({
                type: 'STORE_DATAS',
                datas: response.data
            })
        })

    }
}

export const addData= (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch({
            type: 'ADD_DATA',
            datas: payload
        })
    }
}

export const updateData= (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_DATA',
            datas: payload
        })
    }
}

export const deleteData= (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_DATA',
            datas: payload
        })
    }
}