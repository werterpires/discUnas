module.exports = (sequelize, DataTypes) => {
  const DisciplinaVersaoCompetHabilidade = sequelize.define('DisciplinaVersaoCompetHabilidade', {
    discVersaoCompetHabilidadeId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    competHabilidadeId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "competHabilidades",
        key: "competHabilidadeId",
      },
      onUpdate: "no action",
      onDelete: "cascade",
    },
    ppcDisciplinaVersaoId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "cursosPlanosPedagogicosDisciplinasVersoes",
        key: "ppcDisciplinaVersaoId",
      },
      onUpdate: "no action",
      onDelete: "cascade",
    },         
    
    
  },
  {
    tableName: "disciplinasversoescompethabilidades"
  });

  DisciplinaVersaoCompetHabilidade.associate = (models) => {
    DisciplinaVersaoCompetHabilidade.belongsTo(models.CompetHabilidade, {
      foreignKey: 'competHabilidadeId',
      as: 'CompetHabilidade'
    }),
    
    DisciplinaVersaoCompetHabilidade.belongsTo(models.CursoPlanoPedagogicoDisciplinaVersao, {
      foreignKey: 'ppcDisciplinaVersaoId',
      as: 'CursoPlanoPedagogicoDisciplinaVersao'
    })
    

  }
  
  return DisciplinaVersaoCompetHabilidade;
};