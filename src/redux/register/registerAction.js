import Swal from 'sweetalert2'
import ServerApi from '../../api/ServerApi'
import {USER_SET_EMAIL,USER_SET_NAME,USER_SET_PASSWORD,USER_RESET_REGISTER_FORM} from '../actionType'

const resetForm = () => {
    return {
        type : USER_RESET_REGISTER_FORM
    }
}

const setEmail = (email) => {
    return {
        type : USER_SET_EMAIL,
        payload : {
            email
        }
    }
}
const setPassword = (password) => {
    return {
        type : USER_SET_PASSWORD,
        payload : {
            password
        }
    }
}

const setName = (name) => {
    return {
        type : USER_SET_NAME,
        payload : {
            name
        }
    }
}

const register = (email,password, name,navigate) => async (dispatch) => {
    try {

        const registerData = {
            email,password, name
        }

        // eslint-disable-next-line
        const postRegister = await ServerApi({
            method  : 'POST',
            mode    : 'cors',
            url     : '/register/',
            data    : registerData
        })

        if (postRegister.status === 200) {
            Swal.fire({
                title: 'registrasi berhasil',
                icon:'success',
                timer: 3000,
            })
            navigate('/');
        }

    } catch (error) {
        console.log(error);
    }
}

const registerAction = {
    setEmail,
    setPassword,
    setName,
    resetForm,
    register
}

export default registerAction