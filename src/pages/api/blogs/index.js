import { rateLimit } from "express-rate-limit";
import { blogs } from "../../../data";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await handlerGet(req, res);

        case "POST":
            return await handlerPost(req, res);

        default:
            res.status(405).end();
            break;
    }
}

async function handlerGet(req, res) {
    const { tag } = req.query;

    if (tag) {
        const filtered = blogs.filter((blog) => blog.tags.includes(tag));
        return res.status(200).json(filtered);
    }

    return res.status(200).json(blogs);
}

async function handlerPost(req, res) {
    const { title, content, author, date, tags } = req.body;

    if (!title || !content || !author || !date || !tags) {
        return res.status(400).json({ message: "Required field(s) missing" });
    }

    const newBlog = {
        id: blogs.length + 1,
        title,
        content,
        author,
        date,
        tags,
    };

    blogs.push(newBlog);

    return res.status(201).json(newBlog);
}

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 1,
    message: "You have exceeded your limit requests per minute ",
    headers: true,
    handler: async (req, res) => {
        res.status(429).json({
            status: 429,
            message: "message",
        });
    },
});

// rate limit api requests
export const config = {
    api: {
        bodyParser: {
            sizeLimit: "1mb",
        },
    },
};
