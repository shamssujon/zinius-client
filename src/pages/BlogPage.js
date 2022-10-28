import React from "react";
import { useLoaderData } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

const BlogPage = () => {
    const blogData = useLoaderData();
    return (
        <section className="py-10">
            <div className="container max-w-4xl">
                <h2 className="mb-8 text-center text-4xl font-bold dark:text-slate-50">Blog</h2>
                <div className="grid gap-8">
                    {blogData.map((article) => (
                        <ArticleCard key={article.id} article={article}></ArticleCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
