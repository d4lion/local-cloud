import { url } from "../../../constants/urls"

const delFile = async (dirname, filename) => {
  await fetch(`http://192.168.0.3:${url.port}/del/${dirname}/${filename}`, {
    method: "DELETE",
  }).then(() => window.location.reload())
}

export default delFile
