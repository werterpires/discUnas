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
    semestreQuantidade:{
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: "cursosplanospedagogicos"
  });

  CursoPlanoPedagogico.associate = (models) => {
    CursoPlanoPedagogico.belongsTo(models.Curso, {
      foreignKey: 'cursoId',
    }),
    CursoPlanoPedagogico.hasMany(models.EgressoPerfil, {
      foreignKey: 'ppcId',
      as: "EgressoPerfil"
    }),
    CursoPlanoPedagogico.hasMany(models.CompetHabilidade, {
      foreignKey: 'ppcId',
      as: "CompetHabilidade"
    }),
    CursoPlanoPedagogico.hasMany(models.CursoPlanoPedagogicoDisciplinaVersao, {
      foreignKey: 'ppcId',
      as: "RelacaoDisciplinaVersaoPPC"
    })
    
  }
  
  return CursoPlanoPedagogico;
};