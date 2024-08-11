import JavaScript from "./containers/JavaScript";
import Portfolio from "./containers/Portfolio";

function App() {
  const isLoading = true;
  const showPortfolio = false;
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {showPortfolio ? <Portfolio /> : <JavaScript />}
      {/* <Portfolio />
      <JavaScript /> */}
    </>
  );
}

export default App;
