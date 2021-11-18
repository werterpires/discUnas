'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disciplinasVersoes', { 
      disciplinaVersaoId: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      disciplinaVersaoNome:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      sigla:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      codigo:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      disciplinaId:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "disciplinas",
          key: "disciplinaId",
        },
        onUpdate: "no action",
        onDelete: "cascade",
      },
      creditoQuantidade:{
      type: Sequelize.INTEGER,
      allowNull: false,
      },
      ementa:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      basicBibliografia:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      compBibliografia:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      observacao:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      emOferta:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      produzido:{
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('disciplinasVersoes');
  }
};
