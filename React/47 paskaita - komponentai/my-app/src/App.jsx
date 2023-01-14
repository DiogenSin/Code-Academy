import Header from "./components/Header"
import Body from "./components/Body"
import Articles from "./components/articles/Articles"
import './components/styles/App.css'


const App = () => {

return (


<>

<Header elements={
[
    {title: 'title', p1: 'Some about text', p2: 'in two lines', btnTxt: 'Button'}
]
}/>
<main>
<Body elements={
[
    {title: 'Portfolio', p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora totam quidem velit quis expedita! Dignissimos accusamus suscipit doloremque voluptatem ipsa maiores fugit, explicabo voluptatum, debitis nam atque illum sint, enim expedita! Sapiente, eaque dolor!'}
]
}/>

<Articles cards={
[
    {img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2020/11/boat-hitchhiking-foredeck-credit-Tor-Johnson-630x394.jpg', title: 'Title'},
    {img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2020/11/boat-hitchhiking-foredeck-credit-Tor-Johnson-630x394.jpg', title: 'Title'},
    {img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2020/11/boat-hitchhiking-foredeck-credit-Tor-Johnson-630x394.jpg', title: 'Title'},
    {img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2020/11/boat-hitchhiking-foredeck-credit-Tor-Johnson-630x394.jpg', title: 'Title'},
    {img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2020/11/boat-hitchhiking-foredeck-credit-Tor-Johnson-630x394.jpg', title: 'Title'},
    {img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2020/11/boat-hitchhiking-foredeck-credit-Tor-Johnson-630x394.jpg', title: 'Title'}
]
}/>
Title</main>
</>



)


}

export default App