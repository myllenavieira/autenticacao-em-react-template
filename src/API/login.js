import axios from "axios";

const login = (body) => {
    const url= `https://us-central1-labenu-apis.cloudfunctions.net/labeX/myllena-vieira/login`

    axios.post(url, body).then((res)=> localStorage.setItem("token", res.data.token)).catch((res)=> console.log(res))
}
export default login;