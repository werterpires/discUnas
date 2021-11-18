module.exports = (sequelize, DataTypes) => {
  const DisciplinaVersao = sequelize.define('DisciplinaVersao', {
    disciplinaVersaoId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    disciplinaVersaoNome:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sigla:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    codigo:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    disciplinaId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "disciplinas",
        key: "disciplinaId",
      },
      onUpdate: "no action",
      onDelete: "cascade",
    },
    creditoQuantidade:{
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    ementa:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    basicBibliografia:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    compBibliografia:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    observacao:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    emOferta:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    produzido:{
      type: DataTypes.INTEGER,
      allowNull: true,
    }
    
  },
  {
    tableName: "disciplinasVersoes"
  });

  DisciplinaVersao.associate = (models) => {
    
    DisciplinaVersao.belongsTo(models.Disciplina, {
      foreignKey: 'disciplinaId'
    }),

    DisciplinaVersao.hasMany(models.CursoPlanoPedagogicoDisciplinaVersao, {
      foreignKey: 'disciplinaVersaoId',
      as: "disciplinaVersao"
    })
    
  }
  
  return DisciplinaVersao;
};