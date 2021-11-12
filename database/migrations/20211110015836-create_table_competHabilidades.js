'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('competHabilidades', { 
      competHabilidadeId: {
         primaryKey: true,
         type: Sequelize.INTEGER.UNSIGNED,
         allowNull: false,
         autoIncrement: true,
       },
       competHabilidadeNumero:{
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       competHabilidade:{
         type: Sequelize.TEXT,
         allowNull: true,
       },
       ppcId:{
         type: Sequelize.INTEGER.UNSIGNED,
         allowNull: false,
         references: {
           model: "cursosPlanosPedagogicos",
           key: "ppcId",
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
    await queryInterface.dropTable('competHabilidades');
  }
};
