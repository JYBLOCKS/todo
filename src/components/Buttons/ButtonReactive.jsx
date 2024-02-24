
export const ButtonReactive = ({className, onClick, type, text}) => {
    return(<button className={className} onClick={onClick} type={type}>
        {text}
    </button>)
}