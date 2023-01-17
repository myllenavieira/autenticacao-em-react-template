import axios from "axios";

const gettrips = (setData) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/myllena-vieira/trips`

    axios.get(url).then((res)=> setData(res.data.trips)).catch((res)=>console.log(res))
}
export default gettrips;