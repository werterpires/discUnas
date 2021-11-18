'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disciplinas', { 
      disciplinaId: {
         primaryKey: true,
         type: Sequelize.INTEGER.UNSIGNED,
         allowNull: false,
         autoIncrement: true,
       },
       disciplinaNome:{
         type: Sequelize.TEXT,
         allowNull: false,
       },
       conhecimentoAreaId:{
         type: Sequelize.INTEGER.UNSIGNED,
         allowNull: false,
         references: {
           model: "conhecimentoAreas",
           key: "conhecimentoAreaId",
         },
         onUpdate: "no action",
         onDelete: "cascade",
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
    await queryInterface.dropTable('disciplinas');
  }
};
