module.exports = (sequelize, DataTypes) => {
  const CursoPlanoPedagogico = sequelize.define('CursoPlanoPedagogico', {
    idPPC: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    votoAno:{
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    inicioDAta:{
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
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cursos",
        key: "idCurso",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    },
    
  },
  {
    tableName: "cursosPlanospedagogicos"
  });

   CursoPlanoPedagogico.associate=(models)=>{
    CursoPlanoPedagogico.belongsTo(models.Curso, {
      foreingKey:'ppcAtual'
    });
    CursoPlanoPedagogico.belongsTo(models.Curso, {
      foreingKey:'cursoId'
    })
   }

  
  return CursoPlanoPedagogico;
};