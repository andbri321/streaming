import { TOKEN_POST } from '../api';

const FETCH_TOKEN_STARTED = 'token/fetchStarted';
const FETCH_TOKEN_SUCCESS = 'token/fetchSuccess';
const FETCH_TOKEN_ERROR = 'token/fetchError';

const fetchTokenStarted = () => ({
    type: FETCH_TOKEN_STARTED
})

const fetchTokenSuccess = (data) => ({
    type: FETCH_TOKEN_SUCCESS,
    payload: data
})

const fetchTokenError = (error) => ({
    type: FETCH_TOKEN_ERROR,
    payload: error
})

const initialState = {
    loading: false,
    error: null,
    data:null,
}

export default function token(state=initialState,action){
    switch(action.type){
        case FETCH_TOKEN_STARTED:
            return {
                ...state,
                loading: true,
                data: null,
                error: null
            };
        case FETCH_TOKEN_SUCCESS:
          return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_TOKEN_ERROR:
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

export const fetchToken = (token) => async (dispatch) =>{
    try{
        dispatch(fetchTokenStarted());
        const { url, options } = TOKEN_POST(token);
        const response = await fetch(url, options);
        const data = await response.json();
        if(response.ok === false) throw new Error(data.error);
        dispatch(fetchTokenSuccess(data));
        localStorage.setItem('token',data.token);
    } catch (error) {
        dispatch(fetchTokenError(error.message));
    }
}