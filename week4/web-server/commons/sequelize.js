import { DataTypes, Sequelize } from "sequelize";

 const sequelize = new Sequelize("movies", "root", "rd123456rd", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true,
  },
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully");
} catch (err) {
  console.log("Unable to connect to the database", err);
}

const Movies = sequelize.define("Movie", {
  movie_name: DataTypes.STRING,
  movie_year: DataTypes.INTEGER,
  movie_genre: DataTypes.STRING,
  movie_income: DataTypes.INTEGER,
},{
  tableName:'Movies'
});

const Rents = sequelize.define("Rent", {
  movie_person: DataTypes.STRING,
  movie_name: DataTypes.STRING,
  movie_genre: DataTypes.STRING
},{
  tableName:'Rents'
});
await sequelize.sync({ alter: true });

export default { Movies, Rents };
