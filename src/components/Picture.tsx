import Image from "next/image";

interface ImageProps {
    extraClasses: string
    src: string
    alt: string

}

const Picture: React.FC<ImageProps> = ({ extraClasses, alt, src }) => {
    const desc = alt || "Picture of the Site"
    const classes = "object-cover " + extraClasses

    return (
        <Image
            src={src}
            alt={desc}
            priority
            layout='fill'
            className={classes}
        />
    )
}

export default Picture