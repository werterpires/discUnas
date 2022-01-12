module.exports = (sequelize, DataTypes) => {
  const DisciplinaVersaoEgressoPerfil = sequelize.define('DisciplinaVersaoEgressoPerfil', {
    discVersaoEgressoPerfilId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    egressoPerfilId:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "egressosPerfis",
        key: "perfilId",
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
    tableName: "disciplinasversoesegressosperfis"
  });

  DisciplinaVersaoEgressoPerfil.associate = (models) => {
    DisciplinaVersaoEgressoPerfil.belongsTo(models.EgressoPerfil, {
      foreignKey: 'egressoPerfilId',
      as: 'EgressoPerfil'
    }),
    
    DisciplinaVersaoEgressoPerfil.belongsTo(models.CursoPlanoPedagogicoDisciplinaVersao, {
      foreignKey: 'ppcDisciplinaVersaoId',
      as: 'CursoPlanoPedagogicoDisciplinaVersao'
    })
    

  }
  
  return DisciplinaVersaoEgressoPerfil;
};