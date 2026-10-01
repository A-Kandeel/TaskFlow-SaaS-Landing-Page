function Button({ children, variant = "primary", onClick }) {
    return (
        <button
        className={`button button-${variant}`}
        onClick={onClick}
        >
        {children} <i className="fa fa-light fa-arrow-right"></i>
        </button>
    );
}

export default Button;