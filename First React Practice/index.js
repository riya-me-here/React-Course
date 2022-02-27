//ReactDOM.render(<h1 className="header">Hello, React</h1>, document.getElementById("root"));
//ReactDOM is a local variable and it has a render method which allows us to render/place something on the screen
// ReactDOM.render(
//   <p>Hello this is Riya, learning React</p>,
//   document.getElementById("root2")
// );
ReactDOM.render(
  <ul>
    <li>html</li>
    <li>css</li>
    <li>js</li>
    <li>React</li>
  </ul>,
  document.getElementById("root3")
);
//An imperative way to program means creating html element from js itself
const h1 = document.createElement("h1");
h1.textContent = "this is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1); //appending it as the child of the div #root

const page = (
  <div>
    <h1>hiii</h1>
    <p>guys</p>
  </div>
);
ReactDOM.render(page, document.getElementById("root"));

const webpage = (
  <nav>
    <h1>website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
ReactDOM.render(webpage, document.getElementById("root2"));
