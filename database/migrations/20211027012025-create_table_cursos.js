'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cursos', { 
      cursoId: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      cursoNome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      ativo:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ppcAtual:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        
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
    await queryInterface.dropTable('cursos');
  }
};
