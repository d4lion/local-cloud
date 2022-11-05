import { url } from "../../../constants/urls"
import axios from "axios"

const delFile = async (dirname, filename) => {
  axios
    .delete(`http://192.168.0.3:${url.port}/del/${dirname}/${filename}`)
    .then(() => window.location.reload())
}

export default delFile
