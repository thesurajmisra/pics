import axios from "axios";

export default axios.create(
    {
        baseURL:'https://api.unsplash.com',
        headers:{
            Authorization : 'Client-ID H3sMXbqCJw1PFREvQDVxHAQYCXVbMj5UGAtlZWoT6zg'
         }
    }
)