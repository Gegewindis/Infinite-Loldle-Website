import Header from "../components/Header.jsx"

function NotFoundPage() {

    const styles = {
        display: "flex",
        justifyContent: "center",
        marginTop: "50vh"
    }

  return(
    <>
        <Header/>
        <div style={styles}><h1>Page Not found: error 404!</h1></div>
    </>
  );
}

export default NotFoundPage