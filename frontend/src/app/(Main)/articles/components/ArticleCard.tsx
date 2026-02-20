import { useMemo } from "react";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";

const ArticleCard = ({ article }: any) => {
  const previewText = useMemo(() => {
    const html = generateHTML(article.content, [StarterKit]);
    return html.replace(/<[^>]*>?/gm, "");
  }, [article.content]);
  return (
    <article className="group flex flex-col cursor-pointer">
      <div className="aspect-video w-full mb-4 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 bg-linear-to-br from-indigo-100 to-slate-200 flex items-center justify-center text-slate-400">
          <span className="text-sm font-medium italic">Article Cover</span>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          {article.category || "General"}
        </span>
        <span className="text-slate-300">•</span>
        <span className="text-sm text-slate-500">{article.createdAt}</span>
      </div>
      <Link href={`/articles/${article.id}`}>
        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">
          {article.title || "Untitled Article"}
        </h2>
      </Link>

      <p className="text-slate-600 leading-relaxed line-clamp-3 mb-4">
        {previewText}
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-[10px] font-bold">
          {article.author[0]}
        </div>
        <span className="text-sm font-medium text-slate-700">
          By {article.author}
        </span>
      </div>
    </article>
  );
};

export default ArticleCard;
