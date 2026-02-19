import fs from "fs/promises";

export async function readJson() {
    try {
        const data = await fs.readFile("src/db/terrorData.json", "utf-8");
        return JSON.parse(data)
    } catch (error) {
        console.error(error.message)
        throw error.message
    }
}

export async function addToJson(data) {
    try {
        const file = await readJson();
        file.push(data);
        await fs.writeFile("src/db/terrorData.json", JSON.stringify(file));
    } catch (error) {
        console.error(error.message)
        throw error.message
    }
}

export async function readCsv() {
    try {
        const file = await fs.readFile("src/db/terrorData.csv", "utf-8")
        const rows = file.split("\n")
        const heders = rows[0].split(",");
        const data = rows.slice(1).map(row => {
            const values = row.split(",");
            const object = {};
            heders.forEach((heder, index) => object[heder] = values[index])
            return object
        });
        return data;
    } catch (error) {
        console.error(error.message)
        throw error.message
    }
}