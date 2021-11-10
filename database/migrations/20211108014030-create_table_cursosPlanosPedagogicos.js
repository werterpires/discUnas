'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cursosPlanosPedagogicos', { 
      ppcId: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      votoAno:{
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      inicioData:{
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
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "cursos",
          key: "cursoId",
        },
        onUpdate: "no action",
        onDelete: "no action",
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
