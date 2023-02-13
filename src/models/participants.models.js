const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = require("./users.models");
const Conversations = require("./conversations.models");

const Participants = db.define("participants", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  conversationId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Conversations,
      key: "id",
    },
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Participants;
