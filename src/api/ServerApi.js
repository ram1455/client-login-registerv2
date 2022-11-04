import axios from "axios";

const ServerApi = axios.create({
    baseURL: process.env.PORT || process.env.REACT_APP_BASE_URL
})

export default ServerApi;