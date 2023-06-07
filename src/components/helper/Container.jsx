const containerStyles = {
    padding: "20px 30px",
    backgroundColor: "gray",
};
export const Container = ({ children }) => {
    return <div style={containerStyles}>{children} </div>;
}