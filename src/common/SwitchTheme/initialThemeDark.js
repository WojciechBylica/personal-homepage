export const getInitialThemeDark = () => {
    const date = new Date();
    const hour = date.getHours();

    return (
        (hour < 6 || hour > 19) ? true : false
    );
};



