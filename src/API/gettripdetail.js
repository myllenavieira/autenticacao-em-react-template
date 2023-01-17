import axios from "axios";

const gettripdetail = (aluno, id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`
    const headers = {
        auth: localStorage.getItem("token")
    }
    axios.get(url, headers).then((res)=>console.log(res)).catch((res)=>console.log(res))
}
export default gettripdetail;