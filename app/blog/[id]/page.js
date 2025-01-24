import getSingleBlog from "@/datafetch/getSingleBlog";
import React from "react";

export default async function SingleBlogPage({ params }) {
  const { id } = params;
  const blog = await getSingleBlog(id);
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">{blog.title}</h2>
      <p className="text-gray-600 line-clamp-3">{blog.body}</p>
    </div>
  );
}
