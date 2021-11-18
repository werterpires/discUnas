module.exports = (sequelize, DataTypes) => {
  const CursoPlanoPedagogicoDisciplinaVersao = sequelize.define('CursoPlanoPedagogicoDisciplinaVersao', {
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
    tableName: "cursosPlanosPedagogicosDisciplinasVersoes"
  });

  CursoPlanoPedagogicoDisciplinaVersao.associate = (models) => {
    
    CursoPlanoPedagogicoDisciplinaVersao.belongsTo(models.DisciplinaVersao, {
      foreignKey: 'disciplinaVersaoId'
    }),
    CursoPlanoPedagogicoDisciplinaVersao.belongsTo(models.CursoPlanoPedagogico, {
      foreignKey: 'ppcId'
    })  
  }

  
  return CursoPlanoPedagogicoDisciplinaVersao;
};