import { Sequelize,DataTypes } from 'sequelize';

export const db = new Sequelize('checkam', 'root', 'i-am-Atomic777', {
    host: 'localhost',
    dialect:'mysql'
  });

