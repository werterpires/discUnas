'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('conhecimentoAreas', { 
      conhecimentoAreaId: {
         primaryKey: true,
         type: Sequelize.INTEGER.UNSIGNED,
         allowNull: false,
         autoIncrement: true,
       },
       conhecimentoArea:{
         type: Sequelize.TEXT,
         allowNull: false,
       },
       createdAt: {
         type: 'TIMESTAMP',
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
         allowNull: false,
       },
       updatedAt: {
         type: 'TIMESTAMP',
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
         allowNull: false,
       }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('conhecimentoAreas');
  }
};
