module.exports = (sequelize, DataTypes) => {
  const CursoPlanoPedagogicoDisciplinaVersao = sequelize.define('CursoPlanoPedagogicoDisciplinaVersao', {
    ppcDisciplinaVersaoId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    disciplinaVersaoId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "disciplinasVersoes",
        key: "disciplinaVersaoId",
      },
      onUpdate: "no action",
      onDelete: "cascade",
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
    },
    semestre:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  },
  {
    tableName: "cursosPlanosPedagogicosDisciplinasVersoes"
  });

  CursoPlanoPedagogicoDisciplinaVersao.associate = (models) => {
    
    CursoPlanoPedagogicoDisciplinaVersao.belongsTo(models.DisciplinaVersao, {
      foreignKey: 'disciplinaVersaoId',
      as: 'DisciplinaVersao'
    }),
    CursoPlanoPedagogicoDisciplinaVersao.belongsTo(models.CursoPlanoPedagogico, {
      foreignKey: 'ppcId',
      as: 'CursoPlanoPedagógico'
    }),
    CursoPlanoPedagogicoDisciplinaVersao.belongsToMany(models.EgressoPerfil, {
      foreignKey: 'egressoPerfilId',
      as: 'EgressoPerfil',
      through: 'DisciplinaVersaoEgressoPerfil'
    })
  }

  
  return CursoPlanoPedagogicoDisciplinaVersao;
};