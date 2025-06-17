const Button = ({ display, onClick, className, showArrow }) => {
    return(
        <button className={className} onClick={onClick}>{display}{showArrow}</button>
    )
}

export default Button;