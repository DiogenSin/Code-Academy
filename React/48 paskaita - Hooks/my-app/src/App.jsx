import { useEffect } from "react"
import { useState } from "react"
import './index.css';

const App = () => {
  
  const [paspaustas, setPaspaustas] = useState(false)
  
  const handlerPaspaustas = () => {
    console.log('Paspausta')
    setPaspaustas(!paspaustas)
  }
  
  return (
    <> 

    <header>
      <img src="https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png" alt="" />
      <nav>
        <p>12</p>
        <p>Vardas</p>
        <img src="https://pbs.twimg.com/profile_images/838851762928791553/Rp1bgpHz_400x400.jpg" alt="" />
      </nav>
    </header>
    <main>
      <h1>Straipsniai</h1>
      <div id="articles">
        <article onClick={handlerPaspaustas} className={paspaustas ? 'tamsus': ''}>
          <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="" />
          <h2>Article title</h2>
          <div className="articleText">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi libero nobis pariatur labore, modi nulla eligendi reiciendis officiis distinctio!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque consequatur odio earum voluptatem voluptates enim ea eligendi optio odit dolor obcaecati, nulla ipsum voluptatum debitis, corrupti reiciendis perspiciatis numquam nihil accusantium et deleniti. Ex consequuntur libero tempora debitis soluta quis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta in, a repellat possimus nam voluptatem ducimus.</p>
          </div>
        </article>
        <article onClick={handlerPaspaustas} className={paspaustas ? 'tamsus': ''}>
          <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="" />
          <h2>Article title</h2>
          <div className="articleText">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi libero nobis pariatur labore, modi nulla eligendi reiciendis officiis distinctio!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque consequatur odio earum voluptatem voluptates enim ea eligendi optio odit dolor obcaecati, nulla ipsum voluptatum debitis, corrupti reiciendis perspiciatis numquam nihil accusantium et deleniti. Ex consequuntur libero tempora debitis soluta quis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta in, a repellat possimus nam voluptatem ducimus.</p>
          </div>
        </article>
        <article onClick={handlerPaspaustas} className={paspaustas ? 'tamsus': ''}>
          <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="" />
          <h2>Article title</h2>
          <div className="articleText">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi libero nobis pariatur labore, modi nulla eligendi reiciendis officiis distinctio!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque consequatur odio earum voluptatem voluptates enim ea eligendi optio odit dolor obcaecati, nulla ipsum voluptatum debitis, corrupti reiciendis perspiciatis numquam nihil accusantium et deleniti. Ex consequuntur libero tempora debitis soluta quis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta in, a repellat possimus nam voluptatem ducimus.</p>
          </div>
        </article>
      </div>
    </main>


  </>
    
    )

}

export default App;
