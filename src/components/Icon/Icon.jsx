import icons from "./sprite.svg"

const Icon = ({ id, color }) =>
{
    return (
            <svg style={{ fill: color }} max-height={100}>
            <use href={icons +`#${id}`} />
        </svg>
    )
}

export default Icon;