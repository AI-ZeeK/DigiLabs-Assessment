import App from "../models/Model.js";
export const getRoute = (req, res) => { };
export const postRoute = async (req, res) => {
    const { text, image } = req.body;
    try {
        if (!text || !image) {
            return res.status(401).json({ message: "Inputs not Complete" });
        }
        const user = await App.create({
            text,
            image,
        });
        return res.status(201).json({ user, message: "Created" });
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: `Not Allowed`, error: error.message });
    }
};
