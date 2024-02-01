import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/blogs.module.css";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetching Blogs from API
        fetch("/api/blogs", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <section className={styles.blogsContainer}>
            {blogs.map((blog) => (
                <article className={styles.blogCard} key={blog.id}>
                    <Link
                        href={`/blog/${blog.id}`}
                        className={styles.blogTitle}
                    >
                        {blog.title}
                    </Link>
                    <p className={styles.blogAuthor}>By {blog.author}</p>
                </article>
            ))}
        </section>
    );
}
