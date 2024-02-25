module.exports = (sequelize, DataTypes) => {
 
 
 
    const basketball = sequelize.define("basketball", {
title: {
    type: DataTypes.STRING,
    allowNull: false
}, 
midTitle: {
    type: DataTypes.STRING,
    allowNull: false
},
odds: {
    type: DataTypes.STRING,
    allowNull:false
}


})   

return basketball;
}

