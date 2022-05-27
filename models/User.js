const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// ADD BCRYPT

class User extends Model {
//  // set up method to run on instance data (per user) to check password
//  checkPassword(loginPw) {
//    return bcrypt.compareSync(loginPw, this.password);
//  }
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			// if allow Null is set to false, we can run our data through validatiors before creating the table data
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4]
			}
		}
	},
  { // UNCOMMENT AFTER ADD BCRYPT
  //  hooks: {
  //    // set up beforeCreate lifecycle "hook" functionality
  //    async beforeCreate(newUserData) {
  //      newUserData.password = await bcrypt.hash(newUserData.password, 10);
  //      return newUserData;
  //    },
//
  //    async beforeUpdate(updatedUserData) {
  //      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
  //      return updatedUserData;
  //    }
  //  },


    // TABLE CONFIGURATION OPTIONS GO HERE ((https://sequelize.org/v5/manual/models-definition.html#configuration)) 

		// Pass in our imported sequelize connection (the direct connection to our database)
		sequelize,
		// don't automatically create createdAt/updatedAt timestamp fields
		timestamps: false,
		// Don't pluralize name of database table
		freezeTableName: true,
		// Use underscores instead of camelcase
		underscored: true,
		// Make it so our modelname stays lowercase in the database
		modelName: 'user'
  }
);

module.exports = User;