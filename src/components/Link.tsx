import NextLink from "next/link"

interface Props {
    href: string
    children: React.ReactNode
}

const Link = ({ href, children }: Props) => {
    return (
        <NextLink href={href}>
            <a className="underline underline-offset-1 text-cyan-500">{children}</a>
        </NextLink>
    )
}

export default Link