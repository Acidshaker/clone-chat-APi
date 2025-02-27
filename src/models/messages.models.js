const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Participants = require("./participants.models");

const Messages = db.define("messages", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  participantId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Participants,
      key: "id",
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Messages;
