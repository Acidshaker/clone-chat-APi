const conversationServices = require("./conversations.services");

const router = require("express").Router();

router.get("/conversations", conversationServices.getAllConversations);

router.post("/conversations", conversationServices.postNewConversation);

router.get("/conversations/:id", conversationServices.getConversationById);

router.patch("/conversations/:id", conversationServices.patchConversation);

router.put("/conversations/:id", conversationServices.putConversation);

router.delete("/conversations/:id", conversationServices.deleteConversation);

module.exports = router;
