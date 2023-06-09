import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
   text: string
}

export function CustomLink({ text, ...props }: CustomLinkProps) {
   return (
      <Link {...props} className="text-b3 font-body text-green-500 underline">
         {text}
      </Link>
   )
}