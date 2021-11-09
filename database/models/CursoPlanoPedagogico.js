module.exports = (sequelize, DataTypes) => {
  const CursoPlanoPedagogico = sequelize.define('CursoPlanoPedagogico', {
    ppcId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    votoAno:{
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    inicioData:{
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    fimData:{
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    horaCredito:{
      type: DataTypes.TIME,
      allowNull: true,
    },
    cursoId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "cursos",
        key: "cursoId",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    },
    
  },
  {
    tableName: "cursosPlanosPedagogicos"
  });

  CursoPlanoPedagogico.associate = (model) => {
    CursoPlanoPedagogico.belongsTo(model.Curso, {
      foreignKey: 'cursoId',
      as: 'Curso'
    })
  }

  
  return CursoPlanoPedagogico;
};