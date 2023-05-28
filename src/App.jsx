import { Post } from "./Post"
import { Header } from "./components/header"
import './global.css'

export function App() {
  return (
  //  <h1>Hello Ignite!</h1>
  <div>
    < Header />
    <Post 
      author="Guilherme Salkovski" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse enim earum soluta similique commodi maiores inventore autem? Ducimus voluptatibus placeat aliquam eum quaerat at voluptatum, fuga ut ipsa accusamus."
    />
    
    <Post
      author="Thiago Felipe"
      content="Outro post bem divertido"
    />
  </div>
  )
}

