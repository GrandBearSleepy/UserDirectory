import axios from 'axios';

const query = 'https://randomuser.me/api/?results=200&nat=us'


export default {
    getUsers: function () {
        return axios.get(query);
    }
}