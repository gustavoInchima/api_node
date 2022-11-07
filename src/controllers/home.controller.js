const getMessages = (req, res) => {
    const messsage = {"messsage": "Hi, this is home"};
    res.json(messsage);
};

const getMessage = (req, res) => {
    // body function
    const messsage = {"messsage": "get a method"};
    res.json(messsage);
};

const addMessage = (req, res) => {
    const { title, message } = req.body;
    const result = {"title" : `new title: ${title}`, "message": `new message: ${message}`};
    res.json(result);
};

const updateMessage = (req, res) => {
    // body function
    const messsage = {"messsage": "update method"};
    res.json(messsage);
};

const deleteMessage = (req, res) => {
    // body function
    const messsage = {"messsage": "delete message"};
    res.json(messsage);
};

export const methods = {
    getMessages,
    getMessage,
    addMessage,
    updateMessage,
    deleteMessage
};