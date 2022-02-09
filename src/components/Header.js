import './Header.css';

function Header() {
  return(
    <div class="nav-container">
      <ul>
        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/">Portfolio</a></li>
        <li class="nav-item"><a class="nav-link" href="/">Jobs</a></li>
        <li class="nav-item"><a class="nav-link" href="/">About</a></li>
        <li class="nav-item"><a class="nav-link" href="/">Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;