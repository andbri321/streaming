import { PEXELS_GET } from '../api';

const FETCH_PEXELS_STARTED = 'pexels/fetchStarted';
const FETCH_PEXELS_SUCCESS = 'pexels/fetchSuccess';
const FETCH_PEXELS_ERROR = 'pexels/fetchError';

const fetchPexelsStarted = () => ({
    type: FETCH_PEXELS_STARTED
})

const fetchPexelsSuccess = (data) => ({
    type: FETCH_PEXELS_SUCCESS,
    payload: data
})

const fetchPexelsError = (error) => ({
    type: FETCH_PEXELS_ERROR,
    payload: error
})

const initialState = {
    loading: false,
    error: null,
    data:null,
}

export default function pexels(state=initialState,action){
    switch(action.type){
        case FETCH_PEXELS_STARTED:
            return {
                ...state,
                loading: true,
                data: null,
                error: null
            };
        case FETCH_PEXELS_SUCCESS:
          return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_PEXELS_ERROR:
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

export const fetchPexels = (page, per_page,search) => async (dispatch) =>{
    try{
        if(search===''){
            search = 'dog'
        }
        const token = localStorage.getItem('token');
        dispatch(fetchPexelsStarted());
        const { url, options } = PEXELS_GET(token, page, per_page,search);
        const response = await fetch(url, options);
        const data = await response.json();
        if(response.ok === false) throw new Error(data.message);
        dispatch(fetchPexelsSuccess(data));
    } catch (error) {
        dispatch(fetchPexelsError(error.message));
    }
}