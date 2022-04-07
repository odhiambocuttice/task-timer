interface HeaderProps {
    extraClasses: string
}

const PageHeading: React.FC<HeaderProps> = ({ children, extraClasses }) => {
    const classes = "text-4xl text-white font-semibold " + extraClasses

    return <h1 className={classes}>{children}</h1>
}

export default PageHeading