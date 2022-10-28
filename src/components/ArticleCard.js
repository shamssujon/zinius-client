import React from "react";
import parse from 'html-react-parser';
const ArticleCard = ({ article }) => {
    const { question, answer } = article;
    const answerHTML = parse(answer);
    return (
        <div className="rounded-md border bg-white p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-4">{question}</h2>
            <div className="space-y-4 text-lg">{answerHTML}</div>
        </div>
    );
};

export default ArticleCard;
