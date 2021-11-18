'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cursosPlanosPedagogicosDisciplinasVersoes', { 
      ppcDisciplinaVersaoId: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      disciplinaVersaoId:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "disciplinasVersoes",
          key: "disciplinaVersaoId",
        },
        onUpdate: "no action",
        onDelete: "cascade",
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
      semestre:{
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
    await queryInterface.dropTable('cursosPlanosPedagogicosDisciplinasVersoes');
  }
};
