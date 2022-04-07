interface Props {
    children: React.ReactNode
    type: "success" | "warning" | "danger"
    key?: number
    extraClasses?: string
}
const Alert = ({ children, type, key, extraClasses }: Props) => {
    let color
    switch (type) {
        case "success":
            color = "bg-blue-500"
            break
        case "warning":
            color = "bg-yellow-300 text-yellow-800"
            break
        default:
            color = "bg-red-500"
    }
    const classes = `text-zinc-900 text-center p-2 rounded-xl mt-4 ${color} ${extraClasses}`

    return (
        <div key={key} className={classes}>
            {children}
        </div>
    )
}

export default Alert