import "./styles/app.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Row from "./components/row/Row";
import BottomSection from "./components/bottomSection/BottomSection";

export default function App() {
  return (
    <>  <Header menu = {
      ['Home', 'Product', 'Company', 'Contact']
    }/>
    <Hero text = {'Header Image'} />
    <Row cards = {
      [{title: 'About', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laudantium assumenda possimus totam, quaerat suscipit aspernatur ipsam cupiditate neque similique.'},
      {title: 'Company', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laudantium assumenda possimus totam, quaerat suscipit aspernatur ipsam cupiditate neque similique.'},
      {title: 'Services', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laudantium assumenda possimus totam, quaerat suscipit aspernatur ipsam cupiditate neque similique.'}]
    } />
    <BottomSection articles = {[{title: 'Content', id: 'content', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eligendi aliquam tempora natus repudiandae, neque eos libero. Natus officia sint sequi ullam deleniti nisi dolor eligendi et ea vel, neque atque laudantium quia harum, minus ex! Officiis, doloremque dolorum! Magnam quo eos amet fugit, impedit beatae quis necessitatibus? Ea, vel.'}, {title: 'Sub Header', id: 'sub_header', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dicta commodi, odit beatae pariatur dolores recusandae impedit, porro perspiciatis vero itaque sint? Ratione eaque inventore, quasi aliquam id nihil. Aspernatur ab dicta veritatis omnis dolore impedit in iusto est. Aliquam, est! Perferendis unde tempore temporibus error voluptates ea officiis voluptatum, rerum labore consequuntur dolorum, dolore laborum numquam blanditiis cum adipisci deserunt eligendi animi doloribus quasi perspiciatis! Incidunt voluptate aperiam molestiae.'}]}/>
    </>

  );
}
