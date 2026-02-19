export function scoreM(req, res, next) {
    const { date, score } = req.body;
    if(!date || !score) return res.status(400).json({ error: "Missing required fields" });
    next()
}
