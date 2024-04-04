import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/base16/darcula.css";
const MarkDownPreview = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight]}
      className={cn("space-y-6", className)}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 {...props} className="text-3xl font-bold" />;
        },
        h2: ({ node, ...props }) => {
          return <h2 {...props} className="text-2xl font-bold" />;
        },
        h3: ({ node, ...props }) => {
          return <h3 {...props} className="text-xl font-bold" />;
        },
      }}
    >
      {content}
    </Markdown>
  );
};
export default MarkDownPreview;
