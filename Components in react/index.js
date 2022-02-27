import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
} //these are children components
ReactDOM.render(<Page />, document.getElementById("root"));
