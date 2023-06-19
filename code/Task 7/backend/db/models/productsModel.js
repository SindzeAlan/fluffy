import { DataTypes } from "sequelize";
import { db } from "../db.js";
import { marketPlaceModel } from "./marketPlaceModel.js";


export const productModel = db.define('product',{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    market_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: marketPlaceModel,
            key: 'id'
        }
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    price: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    details: {
        type:DataTypes.TEXT,
        allowNull:false
    },
    category: {
        type:DataTypes.STRING,
        allowNull:false
    },
    link: {
        type:DataTypes.STRING,
        allowNull:false
    },
});