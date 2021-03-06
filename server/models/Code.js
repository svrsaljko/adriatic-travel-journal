const Sequelize = require("sequelize");
const db = require("../configuration/database");

const Code = db.define("code", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  code: {
    type: Sequelize.STRING
  },
  activated: {
    type: Sequelize.BOOLEAN
  },
  FK_userId: {
    type: Sequelize.INTEGER
  },
  location: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.STRING
  },
  winner: {
    type: Sequelize.BOOLEAN
  },
  place: {
    type: Sequelize.INTEGER
  }
});

module.exports = Code;
