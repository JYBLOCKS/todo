export const UlComponent = ({children, props}) => {
    return <ul {...props}>
        {children}
    </ul>
}