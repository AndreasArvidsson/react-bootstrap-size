import { useEffect, useState, useRef } from "react";

const ReactBootstrapSize = () => {
    const [value, setValue] = useState(getSize());
    const ref = useRef();
    ref.current = value;

    useEffect(() => {
        const handleResize = () => {
            const newValue = getSize();
            if (ref.current !== newValue) {
                setValue(newValue);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return value;
};

export default ReactBootstrapSize;

const getSize = () => {
    if (window.innerWidth < 576) {
        return "XS";
    }
    if (window.innerWidth < 768) {
        return "SM";
    }
    if (window.innerWidth < 992) {
        return "MD";
    }
    if (window.innerWidth < 1200) {
        return "LG";
    }
    if (window.innerWidth < 1400) {
        return "XL";
    }
    return "XXL";
};