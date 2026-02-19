import { readCsv } from "../db/connect.js"

export async function getCsvC(req, res) {
    try {
        const data = await readCsv();
        return res.status(200).json(data)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
};