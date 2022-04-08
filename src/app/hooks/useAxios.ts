import {makeUseAxios} from "axios-hooks";
import Axios, {AxiosRequestConfig} from "axios";


const initializers: AxiosRequestConfig = {
    baseURL: 'http://preproduccion.cubatravelsclub.com/webapi/v1/', auth: {
        username: "AG23200200", password: "S5RT"
    }
}

const useAxios = makeUseAxios({
    axios: Axios.create(initializers)
})

export default useAxios