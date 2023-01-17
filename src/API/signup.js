import axios from "axios";

const signup = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/myllena-vieira/signup`;
    const body = {
        email: "vieirasilvamyllena@gmail.com",
        password: "bananinha"
    }
    axios.post(url, body)
    .then((res)=> console.log(res))
    .catch((res)=> console.log(res))
}

export default signup;