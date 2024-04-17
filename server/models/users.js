module.exports = (sequelize, DataTypes) => {

    const usersAccount = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.NUM,
            allowNull: false
        }
    })

    return usersAccount
}