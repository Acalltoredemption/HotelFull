export const showMessage = (req, res) => {
    res.status(200).send(`here is your message: ${req.params.message}`);
};

