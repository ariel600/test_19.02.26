export async function getTable() {
    try {
        const data = await fetch("http://localhost:3000/getcsv", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const obj = await data.json();
        return obj
    } catch (error) {
        console.error(error.message)
        return ({ error: error.message })
    }
};