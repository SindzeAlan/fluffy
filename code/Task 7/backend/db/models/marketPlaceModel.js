import { DataTypes } from "sequelize";
import { sellerModel } from "./sellerModel.js";
import { db } from "../db.js";

export const marketPlaceModel = db.define('marketplace',{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    seller_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: sellerModel,
            key: 'id'
        }
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    location: {
        type:DataTypes.STRING,
        allowNull:false
    },
});
