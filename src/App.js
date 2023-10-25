import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        {/* <AllTheBooks genere="Fantasy" /> */}
        <BookList books={fantasy} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
