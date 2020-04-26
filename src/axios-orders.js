import axios from 'axios';
const instance=axios.create({
    baseURL:'https://burger-building-project.firebaseio.com/'
});
export default instance;