import Link, { LinkProps } from 'next/link'

interface CustomLinkProps extends LinkProps {
   text: string
}

export function CustomLink({ text, ...props }: CustomLinkProps) {
  return (
    <Link {...props} className="text-b3 font-body text-green-500 hover:text-green-300 transition disabled:text-gray-700 underline">
      {text}
    </Link>
  )
}
