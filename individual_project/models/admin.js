const { use } = require("../routes");

class Admin  {
    constructor(id, username, password){
        this.id= id;
        this.username= username,
        this.password= password
    }
}

module.exports = Admin