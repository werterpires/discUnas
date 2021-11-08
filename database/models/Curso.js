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
    }
    
   });

  
  return Curso;
};