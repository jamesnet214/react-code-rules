export default function Portal(props) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#223d80"
            },
            warning: {
                main: "#912335"
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
        <ThemeProvider/>
    );
}
