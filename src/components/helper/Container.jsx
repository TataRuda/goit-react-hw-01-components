const containerStyles = {
    padding: "30px 40px",
    margin: "0 auto",
    backgroundColor: "#D6E3E4",
      
};
export const Container = ({ children }) => {
    return <div style={containerStyles}>{children} </div>;
}