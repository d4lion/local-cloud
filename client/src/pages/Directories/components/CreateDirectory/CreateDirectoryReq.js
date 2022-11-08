import axios from "axios"
import { url } from "../../../../constants/urls"

const SendCreateReq = (dirName) => {
  axios
    .put(`http://${url.url}:${url.port}/create/dir/${dirName}`)
    .then(window.location.reload())
}

export default SendCreateReq
