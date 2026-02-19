import { addToJson } from "../db/connect.js";

export async function scoreC(req, res) {
    try {
        const { date, score } = req.body;
        await addToJson({ date, score });
        return res.status(200).json({ message: "success" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    };
};