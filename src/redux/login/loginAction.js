import {USER_SET_EMAIL,USER_SET_PASSWORD} from '../actionType'
import ServerApi from '../../api/ServerApi'
import Swal from 'sweetalert2'
import profileAction from '../profile/profileAction'

const setEmail = (email) => {
    return {
        type : USER_SET_EMAIL,
        payload :{
            email
        }
    };
};

const setPassword = (password) => {
    return {
        type : USER_SET_PASSWORD,
        payload : {
            password
        }
    };
};

const login = (email, password, navigate) => async (dispatch) => {
    try {
        const loginData = {
            email,
            password,
        };
    
        const postLogin = await ServerApi({
            method : "POST",
            url : "/register/login",
            data : loginData
        });
        
        let token = postLogin.data.token;
        localStorage.setItem('token', token);
        
        if (postLogin.data.message === "login sukses") {
            Swal.fire({
                title : 'login berhasil',
                icon :'success',
                timer : 1500
            })

            const getDetailUser = await ServerApi({
                method : "GET",
                url : "/register/me",
                headers : {
                    Authorization : "Bearer " + token
                }
            })

            dispatch(profileAction.setProfileData(getDetailUser.data.user));
            localStorage.setItem('user', JSON.stringify(getDetailUser.data.user));

            navigate('/profile');
            window.location.reload();
        } else if (postLogin.data === 'password salah') {
            Swal.fire({
                title : 'password salah',
                icon : 'error',
                timer : 1500
            })
        }

    } catch (error) {
        console.log(error);
    }

} 

const loginAction = {
    setEmail,
    setPassword,
    login
};

export default loginAction;