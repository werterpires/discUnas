module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    idCurso: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    nomeCurso:{
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
      onUpdate: "cascade",
      onDelete: "cascade",
    }
    
   });

   Curso.associate=(models)=>{
     Curso.hasOne(models.CursoPlanoPedagogico, {
       foreingKey:'ppcAtual',
     })
     Curso.hasMany(models.CursoPlanoPedagogico, {
      foreingKey:'cursoId',
      as: 'curso'
    })

   }

  
  return Curso;
};