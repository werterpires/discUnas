module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    cursoId: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    cursoNome:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    ativo:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ppcAtual:{
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "cursosPlanosPedagogicos",
        key: "idPPC",
      },
      onUpdate: "no action",
      onDelete: "no action",
    }
    
   });

   Curso.associate = (model) => {
    Curso.hasMany(model.CursoPlanoPedagogico, {
      foreignKey: 'cursoId',
      as: 'ppcs'
    })
  }

  
  return Curso;
};