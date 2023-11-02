import axios from "axios"
const param = {
    headers:{
        Authorization: "bearer " + process.env.REACT_APP_MG_API,
    },
};

export const fetchdatafromapi = async(url) => {
    try{
        const {data} = await axios.get(
            process.env.REACT_APP_MG_DEV_URL + url,
            param
            );
        return data;
    }catch(error){
        console.log(error);
        return error;
    }
}