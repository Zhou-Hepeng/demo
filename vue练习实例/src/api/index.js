import axios from 'axios'

const getUserList = async() => {
  return await axios({
    type: 'post',
    // url,
  })
}

const info = async(data) => {
  return await axios({
    type: 'get',
    url: 'http://192.168.0.1:8080/info',
    data
  })
}


export {
  getUserList,
  info
}