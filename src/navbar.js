
export default function Navbar() {
  return (
    <header className="App-header">
    <nav>
          <img className="logo" src="/logo.png" alt="Alt"/>
          
          <ul>
            <li>
            <span>GitHub</span>
            </li>

            <li>
              <span>More</span>
            </li>

            <li className="hamburger">
              <span>
                <div className="bar"></div>
              </span>
            </li>
          </ul>
    </nav>
    </header>
  );
};