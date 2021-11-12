module.exports = (sequelize, DataTypes) => {
  const EgressoPerfil = sequelize.define('EgressoPerfil', {
    perfilId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    perfilNumero:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    perfil:{
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
    
    
  },{
    tableName: "egressosPerfis"
  });

  EgressoPerfil.associate = (models) => {
    EgressoPerfil.belongsTo(models.CursoPlanoPedagogico, {
      foreignKey: 'ppcId',
    })
  
  }

  
  return EgressoPerfil;
};