module.exports = (sequelize, DataTypes) => {
  const CompetHabilidade = sequelize.define('CompetHabilidade', {
    competHabilidadeId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    competHabilidadeNumero:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    competHabilidade:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ppcId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "cursosPlanosPedagogicos",
        key: "ppcId",
      },
      onUpdate: "no action",
      onDelete: "cascade",
    }
    
    
  });

  CompetHabilidade.associate = (models) => {
    CompetHabilidade.belongsTo(models.CursoPlanoPedagogico, {
      foreignKey: 'ppcId',
    })
  
  }

  
  return CompetHabilidade;
};