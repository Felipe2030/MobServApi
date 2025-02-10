import { DataTypes } from "sequelize";
import sequelize from "../config/dbConection.js";

const User = sequelize.define("users", {
    id_profiles: { type: DataTypes.INTEGER },
    documento: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    active:   { type: DataTypes.BOOLEAN, defaultValue: true }
});

// sequelize.sync().then(() => { 
//     console.log('User table created successfully!'); 
//     User.create({ id_profiles: 1, documento: "353.092.958-10", password: "$2b$10$W2yc7m7kzNA6jPA3S1N5Y.Vjg1FM96ZC7HWSiQCqZVyeI08oVMA7G", active: true }).then(() => { console.log("User name created successfully!"); })
// }).catch((error) => { console.error('Unable to create table : ', error); });

export default User