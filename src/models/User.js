import { Sequelize, Model } from "sequelize";

// Model de usuarios
class User extends Model {
    static init(sequelize){
        super.init({
            name: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
        }, 
        {
            sequelize
        })
    }
}
 
export default User