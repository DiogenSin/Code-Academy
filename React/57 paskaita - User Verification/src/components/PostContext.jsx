import { createContext, useState } from "react";

const PostContext = createContext()

const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([
        {
            heading: 'Pavadinimas0',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga est fugiat maiores eos ratione consequatur!',
            id: 0,
            userId: 1
        },
        {
            heading: 'Pavadinimas1',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga est fugiat maiores eos ratione consequatur!',
            id: 1,
            userId: 2
        },
        {
            heading: 'Pavadinimas2',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga est fugiat maiores eos ratione consequatur!',
            id: 2,
            userId: 2
        },
        {
            heading: 'Pavadinimas3',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga est fugiat maiores eos ratione consequatur!',
            id: 3,
            userId: 1
        }
    ])
}