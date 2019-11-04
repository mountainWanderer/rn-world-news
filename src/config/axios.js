import axios from "axios";
import {
    Alert
} from 'react-native'
import qs from 'qs'

const ENV = 'https://newsapi.org/v2'
const apiKey = '86507ad35a644607b2da25c831d00550'

var axiosInstance = axios.create({
    baseURL: ENV,
    paramsSerializer: function(params) {

        for (var param in params) {
            if (params[param] === null || params[param] === undefined) {
                delete params[param]
            }
        }

        params['apiKey'] = apiKey

        return qs.stringify(params, {arrayFormat: 'repeat'})
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {

        let {
            status,
            code,
            message = ''
        } = error

        Alert.alert('Ooops..', message)

        return Promise.reject({
            status,
            code,
            message
        })
    }
)

export default axiosInstance
