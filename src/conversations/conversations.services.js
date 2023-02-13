const conversationControllers = require("./conversations.controllers");
const { success, error } = require("../utils/handleResponses");

const getAllConversations = (req, res) => {
  conversationControllers
    .findAllConversations()
    .then((data) => {
      success({
        res,
        data,
        status: 200,
        message: "Request succesful",
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: "An error occurred while trying to display all conversations",
      });
    });
};

const getConversationById = (req, res) => {
  const id = req.params.id;

  conversationControllers
    .findConversationById(id)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 200,
          message: "Request succesful",
        });
      } else {
        error({
          res,
          data,
          status: 404,
          message: "Conversation not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data,
        status: 400,
        message: "The request could not be completed",
      });
    });
};

const postNewConversation = (req, res) => {
  const conversationObj = req.body;
  conversationControllers
    .createNewConversation(conversationObj)
    .then((data) => {
      success({
        res,
        data,
        status: 201,
        message: "Conversation created",
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: "Failed to create conversation",
        fields: {
          profileImage: "String (Optional value)",
          name: "String",
          createdBy: "User id",
          isGroup: "Boolean (Default value: false)",
        },
      });
    });
};

const deleteConversation = (req, res) => {
  const id = req.params.id;

  conversationControllers
    .deleteConversation(id)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 204,
          message: "Conversation has been deleted",
        });
      } else {
        error({
          res,
          data,
          status: 404,
          message: "Conversation not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data,
        status: 400,
        message: "The request could not be completed",
      });
    });
};

const patchConversation = (req, res) => {
  const id = req.params.id;
  const conversationObj = req.body;
  conversationControllers
    .updateConversation(id, conversationObj)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 200,
          message: `Conversation with id: ${id} updated succesfully`,
        });
      } else {
        error({
          res,
          data,
          status: 404,
          message: "Conversation not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data,
        status: 400,
        message: "The request could not be completed",
      });
    });
};

const putConversation = (req, res) => {
  const id = req.params.id;
  const conversationObj = req.body;

  if (
    !conversationObj.firstName ||
    !conversationObj.lastName ||
    !conversationObj.email ||
    !conversationObj.password ||
    !conversationObj.phone
  ) {
    return error({
      res,
      data: err,
      status: 400,
      message: "Failed to create conversation",
      fields: {
        profileImage: "String (Optional value)",
        name: "String",
        createdBy: "User id",
        isGroup: "Boolean (Default value: false)",
      },
    });
  }

  conversationControllers
    .updateConversation(id, conversationObj)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 200,
          message: `Conversation with id: ${id} updated succesfully`,
        });
      } else {
        error({
          res,
          data,
          status: 404,
          message: "Conversation not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data,
        status: 400,
        message: "The request could not be completed",
      });
    });
};

module.exports = {
  getAllConversations,
  getConversationById,
  postNewConversation,
  deleteConversation,
  patchConversation,
  putConversation,
};
