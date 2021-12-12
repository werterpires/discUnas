'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disciplinasVersoesCompetHabilidades', { 
      discVersaoCompetHabilidade: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      competHabilidadeId:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "competHabilidades",
          key: "competHabilidadeId",
        },
        onUpdate: "no action",
        onDelete: "cascade",
      },
      ppcDisciplinaVersaoId:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "cursosPlanosPedagogicosDisciplinasVersoes",
          key: "ppcDisciplinaVersaoId",
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
    await queryInterface.dropTable('disciplinasVersoesCompetHabilidades');
  }
};

