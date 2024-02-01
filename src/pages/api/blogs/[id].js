import { blogs } from "../../../data";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await handlerGet(req, res);
        default:
            res.status(405).end();
            break;
    }
}

async function handlerGet(req, res) {
    const { id } = req.query;

    if (!id)
        return res.status(400).json({ status: 400, message: "Missing ID" });

    const blog = blogs.find((blog) => blog.id === parseInt(id));

    if (!blog)
        return res.status(404).json({ status: 404, message: "Blog not found" });

    return res.status(200).json({ status: 200, data: blog });
}
