import { useRouter } from "next/router";
import styles from "../../styles/blogs.module.css";
import { useState, useEffect } from "react";

export default function Blog() {
    const router = useRouter();
    const id = router.query.id;

    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState({});

    useEffect(() => {
        // Fetching Blog from API
        fetch(`/api/blogs/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 200) {
                    setBlog(data.data);
                    setLoading(false);
                } else {
                    router.push("/");
                }
            });
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className={(styles.blogContainer, "container")}>
                    <h1 className={styles.blogTitle}>{blog.title}</h1>
                    <p className={styles.blogAuthor}>By {blog.author}</p>
                    <p className={styles.blogContent}>{blog.content}</p>
                </section>
            )}
        </>
    );
}
