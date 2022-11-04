import { SET_LOADING, USER_PROFILE_DATA } from '../actionType'
import ServerApi from '../../api/ServerApi'

const setProfileData = (user) => {
    return {
        type : USER_PROFILE_DATA,
        payload : {
            user
        }
    }
}

const setLoading = () => {
    return {
        type : SET_LOADING
    }
}

const getProfile = () => async (dispatch) => {
    try {
        let token = localStorage.getItem('token');

        const getProfileData = await ServerApi({
            method: "GET",
            url : "/register/me",
            headers : { 
                authorization : "Bearer " + token
            }
        })

        dispatch(setProfileData(getProfileData.data));
    } catch (e) {
        console.log(e);
    }
}

const profileAction = {
    setProfileData,
    setLoading,
    getProfile
}

export default profileAction;