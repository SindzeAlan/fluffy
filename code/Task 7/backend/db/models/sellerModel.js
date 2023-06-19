import { db } from "../db.js";
import { DataTypes } from "sequelize";

export const sellerModel = db.define('seller',{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    phone: {
        type:DataTypes.STRING,
        allowNull:false
    },
    seller_password: {
        type:DataTypes.STRING,
        allowNull:false
    },
    username: {
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    tableName: 'sellers'
});