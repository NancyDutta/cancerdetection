class UserDto {
    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.mobile = user.mobile;
        this.email = user.email;
    }
}

module.exports = UserDto;
