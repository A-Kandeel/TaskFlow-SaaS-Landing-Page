function Button({ children, variant = "primary", onClick }) {
    return (
        <button
        className={`button button-${variant}`}
        onClick={onClick}
        >
        {children} <i className="fas fa-arrow-right"  aria-hidden="true"></i>
        </button>
    );
}

export default Button;