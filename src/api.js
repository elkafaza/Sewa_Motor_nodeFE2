import axios from 'axios';

useEffect(() => {
  axios.get(`${import.meta.env.VITE_API_URL}/api/motor`)
    .then((res) => {
      console.log(res.data);
    });
}, []);

