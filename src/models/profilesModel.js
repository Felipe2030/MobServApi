import { DataTypes } from "sequelize";
import sequelize from "../config/dbConection.js";

const Profile = sequelize.define("profiles", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
});

// sequelize.sync().then(() => { 
//     console.log('Profile table created successfully!'); 
//     Profile.create({ name: "Admin" }).then(() => { console.log("Profile name created successfully!"); })
//     Profile.create({ name: "Cliente" }).then(() => { console.log("Profile name created successfully!"); })
//     Profile.create({ name: "Prestador" }).then(() => { console.log("Profile name created successfully!"); })
// }).catch((error) => { console.error('Unable to create table : ', error); });

export default Profile