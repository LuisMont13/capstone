module.exports = (sequelize, DataTypes) => {

    const usersAccount = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return usersAccount
}