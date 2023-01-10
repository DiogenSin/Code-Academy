import "./app.css";

export default function App() {
  return (
    <>
        <header>
          <a href="#index.html"><img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/image9.png" alt="" /></a>
          <nav>
            <ul>
              <li><a href="#index.html">Home</a></li>
              <li><a href="#index.html">Product</a></li>
              <li><a href="#index.html">Company</a></li>
              <li><a href="#index.html">Contact</a></li>
            </ul>
          </nav>
        </header>
        <div id="hero">
          <h1>Header Image</h1>
        </div>
        <div id="flex_row">
          <div className="flex_card">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laudantium assumenda possimus totam, quaerat suscipit aspernatur ipsam cupiditate neque similique.</p>
          </div>
          <div className="flex_card">
            <h2>Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laudantium assumenda possimus totam, quaerat suscipit aspernatur ipsam cupiditate neque similique.</p>
          </div>
          <div className="flex_card">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laudantium assumenda possimus totam, quaerat suscipit aspernatur ipsam cupiditate neque similique.</p>
          </div>
        </div>
        <section id="grid">
          <div id="content">
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eligendi aliquam tempora natus repudiandae, neque eos libero. Natus officia sint sequi ullam deleniti nisi dolor eligendi et ea vel, neque atque laudantium quia harum, minus ex! Officiis, doloremque dolorum! Magnam quo eos amet fugit, impedit beatae quis necessitatibus? Ea, vel.</p>
          </div>
          <div id="sub_header">
            <h2>Sub Header</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dicta commodi, odit beatae pariatur dolores recusandae impedit, porro perspiciatis vero itaque sint? Ratione eaque inventore, quasi aliquam id nihil. Aspernatur ab dicta veritatis omnis dolore impedit in iusto est. Aliquam, est! Perferendis unde tempore temporibus error voluptates ea officiis voluptatum, rerum labore consequuntur dolorum, dolore laborum numquam blanditiis cum adipisci deserunt eligendi animi doloribus quasi perspiciatis! Incidunt voluptate aperiam molestiae.</p>
          </div>
          <div id="navigation">
            <h2>Navigation</h2>
            <ul>
              <li><a href="#index.html">Home</a></li>
              <li><a href="#index.html">Product</a></li>
              <li><a href="#index.html">Company</a></li>
              <li><a href="#index.html">Contact</a></li>
            </ul>
          </div>
        </section>
    </>

  );
}
