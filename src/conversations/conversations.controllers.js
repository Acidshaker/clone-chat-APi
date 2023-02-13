const Conversations = require("../models/conversations.models");
const Users = require("../models/users.models");
const { uuid } = require("uuidv4");

const findAllConversations = async () => {
  const data = await Conversations.findAll({
    attributes: {
      exclude: ["createdBy"],
    },
    include: {
      model: Users,
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
    },
  });

  return data;
};

const findConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id: id,
    },
    attributes: {
      exclude: ["createdBy"],
    },
    include: {
      model: Users,
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
    },
  });
  return data;
};

const createNewConversation = async (conversationObj) => {
  const newConversation = {
    id: uuid(),
    profileImage: conversationObj.profileImage,
    name: conversationObj.name,
    createdBy: conversationObj.createdBy,
    isGroup: conversationObj.isGroup,
  };

  const data = await Conversations.create(newConversation);

  return data;
};

const updateConversation = async (id, conversationObj) => {
  const data = await Conversations.update(conversationObj, {
    where: {
      id: id,
    },
  });
  return data[0];
};

const deleteConversation = async (id) => {
  const data = await Conversations.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllConversations,
  findConversationById,
  createNewConversation,
  updateConversation,
  deleteConversation,
};
