const selectStyles = {
    container: provided => ({
        ...provided,
        width: "100%",
        maxWidth: "400px",
        marginBottom: "32px"
    }),
    control: (provided, state) => ({
        ...provided,
        background: "var(--light-blue-color)",
        borderRadius: "2px",
        height: "48px",
        borderColor: state.isFocused ? "var(--accent-color)" : "transparent",
        boxShadow: "none",
        "&:hover": {
            borderColor: "var(--accent-color)"
        }
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isFocused ? "var(--accent-color)" : "transparent",
        fontWeight: state.isSelected ? "bold" : "normal",
        padding: "16px",
        "&:hover": {
            background: "var(--accent-color)"
        },
    }),
    placeholder: provided => ({
        ...provided,
        color: "#707480",
        fontSize: "14px"
    }),
    indicatorSeparator: provided => ({
        ...provided,
        display: "none"
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: state.isFocused ? "#C2C2C2" : "white"
    }),
    singleValue: provided => ({
        ...provided,
        color: "white",
        fontSize: "14px"
    }),
    menuList: provided => ({
        ...provided,
        fontSize: "14px"
    }),
    noOptionsMessage: provided => ({
        ...provided,
        color: "white"
    }),
    menu: provided => ({
        ...provided,
        background: "var(--light-blue-color)"
    })
};

export default selectStyles;
