const axios = require("axios");

const createUser = async (name, email) => {
    const response = await axios.post("http://localhost:3000/users", {
        name: name,
        email: email
    });
    return response.data;
};

module.exports = createUser;