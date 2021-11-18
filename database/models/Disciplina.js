module.exports = (sequelize, DataTypes) => {
  const Disciplina = sequelize.define('Disciplina', {
    disciplinaId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    disciplinaNome:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    conhecimentoAreaId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "conhecimentoAreas",
        key: "conhecimentoAreaId",
      },
      onUpdate: "no action",
      onDelete: "cascade",
    }
    
  });
  
  Disciplina.associate = (models) => {
    Disciplina.belongsTo(models.ConhecimentoArea, {
      foreignKey: 'conhecimentoAreaId',
    }),
    Disciplina.hasMany(models.DisciplinaVersao, {
      foreignKey: 'disciplinaId',
      as: "DisciplinaVersao"
    })
  
  }

  
  return Disciplina;
};