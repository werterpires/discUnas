'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cursosPlanosPedagogicos', { 
      idPPC: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      votoAno:{
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      inicioDAta:{
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      fimData:{
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      horaCredito:{
        type: Sequelize.TIME,
        allowNull: true,
      },
      cursoId:{
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('cursosPlanosPedagogicos');
  }
};
