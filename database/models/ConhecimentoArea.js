module.exports = (sequelize, DataTypes) => {
  const ConhecimentoArea = sequelize.define('ConhecimentoArea', {
    conhecimentoAreaId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    conhecimentoArea:{
      type: DataTypes.TEXT,
      allowNull: false,
    }
    
  });

   ConhecimentoArea.associate = (models) => {
    ConhecimentoArea.hasMany(models.Disciplina, {
      foreignKey: 'conhecimentoAreaId',
      as: "ConhecimentoArea"
    })
  }

  
  return ConhecimentoArea;
};