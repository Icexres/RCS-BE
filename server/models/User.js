const {datatypes} = require('sequelize');
const {sequelize} = require('.../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User',{
  id:{
    type: DataType.Integer,
    primaryKey: true,
    auoincrement: true
  },
  username:{
    type: DataType.Varchar(255),
    allowNull: false,
    unique: true
  },
  password:{
    type: DataType.varchar(255),
    allowNull: false
  },
  email:{
    type: DataType.Varchar(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notnull: true
    }
  },
  role:{
    type: DataTypes.STRING,
    defaultValue:'user'
  }
},{
  tableName: 'users',
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      if(user.password){
        const salt= await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
}
});

User.prototype.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

