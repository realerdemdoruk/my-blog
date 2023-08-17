"use client";
import { allPosts } from "@/.contentlayer/generated";
import Mdx from "@/app/components/Mdx";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { Balancer } from "react-wrap-balancer";
import { TypeAnimation } from "react-type-animation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const TypingAnimation = ({ title = "" }) => {
    return (
      <TypeAnimation
        sequence={[title, 2000, " ", 100]}
        wrapper="span"
        preRenderFirstString={true}
        speed={50}
        style={{ fontSize: "1em", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  };

  return (
    <article className="z-10  mx-auto max-w-3xl flex flex-col w-full px-4 py-10">
      <h1
        className="text-2xl font-bold mb-2 dark:text-slate-300
      duration-1000 ease-in-out transition-all"
      >
<<<<<<< HEAD
        <Balancer>
          <TypingAnimation title={post.title} />
        </Balancer>
=======
        <TypingAnimation title={post.title} />
>>>>>>> 69accf66d5bada1f08eaa5ac4227dc622a140551
      </h1>

      <Mdx code={post.body.code} />
    </article>
  );
}
