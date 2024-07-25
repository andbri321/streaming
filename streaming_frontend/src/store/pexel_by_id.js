import { PEXEL_BY_ID_GET } from '../api';

const FETCH_PEXEL_BY_ID_STARTED = 'pexel_by_id/fetchStarted';
const FETCH_PEXEL_BY_ID_SUCCESS = 'pexel_by_id/fetchSuccess';
const FETCH_PEXEL_BY_ID_ERROR = 'pexel_by_id/fetchError';

const fetchPexelByIdStarted = () => ({
    type: FETCH_PEXEL_BY_ID_STARTED
})

const fetchPexelByIdSuccess = (data) => ({
    type: FETCH_PEXEL_BY_ID_SUCCESS,
    payload: data
})

const fetchPexelByIdError = (error) => ({
    type: FETCH_PEXEL_BY_ID_ERROR,
    payload: error
})

const initialState = {
    loading: false,
    error: null,
    data:null,
}

export default function user(state=initialState,action){
    switch(action.type){
        case FETCH_PEXEL_BY_ID_STARTED:
            return {
                ...state,
                loading: true,
                data: null,
                error: null
            };
        case FETCH_PEXEL_BY_ID_SUCCESS:
          return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_PEXEL_BY_ID_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: null
            };
        default:
            return state;
    }
}

export const fetchPexelById = (id) => async (dispatch) =>{
    try{
        const token = localStorage.getItem('token');
        dispatch(fetchPexelByIdStarted());
        const { url, options } = PEXEL_BY_ID_GET(token,id);
        const response = await fetch(url, options);
        const data = await response.json();
        if(response.ok === false) throw new Error(data.message);
        dispatch(fetchPexelByIdSuccess(data));
    } catch (error) {
        dispatch(fetchPexelByIdError(error.message));
    }
}