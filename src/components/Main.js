import avatar from "../assets/avatar.jpg";

function Main() {
  return (
    <main>
      <div className="img-container">
        <img src={avatar} alt="avatar" id="profile_img" />
        <p className="name">Mubby</p>
      </div>
      <div className="container">
        <a href="https://twitter.com/mubbyszn" id="twitter">
          Twitter
        </a>
      </div>
      <div className="container hidden">
        <p>MubbySzn</p>
      </div>
      <div className="container">
        <a href="https://training.zuri.team" id="btn_zuri">
          Zuri Training
        </a>
      </div>
      <div className="container">
        <a href="http://books.zuri.team" id="books">
          Zuri Books
        </a>
      </div>
      <div className="container">
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          id="book_python"
        >
          Python Books
        </a>
      </div>
      <div className="container">
        <a href="https://background.zuri.team" id="pitch">
          Background Check for Coders
        </a>
      </div>
      <div className="container">
        <a href="https://books.zuri.team/design-rules" id="book_design">
          Design Books
        </a>
      </div>
    </main>
  );
}

export default Main;
