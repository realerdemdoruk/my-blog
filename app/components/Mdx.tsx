import { useMDXComponent } from "next-contentlayer/hooks";
import RoundedImage from "./RoundedImage";
import CustomLink from "./CustomLink";
import { CopyButton } from "./CopyButton";

// @ts-ignore
export const Pre = ({ children, raw, ...props }) => {
  const lang = props["data-language"] || "shell";
  return (
    <pre {...props}>
      <CopyButton text={raw} />
      {children}
    </pre>
  );
};

const components = {
  Image: RoundedImage,
  a: CustomLink,
  pre: Pre,
  h2: (props: any) => (
    <h2
      className="text-2xl font-bold duration-1000 ease-in-out transition-all dark:text-slate-300"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h2
      className="text-2xl font-bold
      duration-1000 ease-in-out transition-all dark:text-slate-400"
      {...props}
    />
  ),
};

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div
      className="prose prose-pink dark:text-white
    duration-1000 ease-in-out transition-all"
    >
      {/* @ts-ignore */}
      <Component components={components} />
    </div>
  );
}
