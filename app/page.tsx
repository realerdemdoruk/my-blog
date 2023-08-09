"use client";
import { allPosts, Post } from "@/.contentlayer/generated";
import { compareDesc, format } from "date-fns";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate))
  );

  const TypingAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Blogs",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "B",
          100,
        ]}
        wrapper="span"
        preRenderFirstString={true}
        speed={50}
        style={{ fontSize: "1em", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  };

  return (
    <main className="z-10 mx-auto max-w-3xl flex flex-col w-full px-4 py-10">
      <h1 className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
        {/* Blogs */}
        <TypingAnimation />
      </h1>
      {/* Blog Posts */}
      <div className="mt-10 flex flex-col space-y-3">
        {posts.map((post: Post) => (
          <Link
            href={post.url}
            key={post.url}
            className="flex flex-col space-y-1"
          >
            <h3 className="text-lg uppercase">{post.title}</h3>
            <span className="text-sm text-gray-500">
              {format(new Date(post.publishDate), "MMMM dd, yyyy")}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
