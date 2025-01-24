import getAllBlogs from "@/datafetch/getAllBlogs";
import Link from "next/link";
import React from "react";

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-700">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`}>
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {blog.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{blog.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
