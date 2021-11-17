
const initialState = {
    datas: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_DATAS':
            return {
                ...state,
                datas: action.datas,
            }
        case 'ADD_DATA':
            return {
                ...state,
                datas: [...state.datas, action.datas],
            }
        case 'UPDATE_DATA':
            return {
                ...state,
                datas: state.datas.map(data => (data.id === action.datas.id) ? action.datas : data )
            }
        case 'DELETE_DATA':
            return {
                ...state,
                datas: state.datas.filter(({id}) => id !== action.datas)
            }
        default:
            return state
    }
}

