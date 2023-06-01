import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './components/App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post 
              author="Guilherme Salkovski" 
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse enim earum soluta similique commodi maiores inventore autem? Ducimus voluptatibus placeat aliquam eum quaerat at voluptatum, fuga ut ipsa accusamus."
            />
            
            <Post
              author="Thiago Felipe"
              content="Outro post bem divertido"
            />
        </main>
      </div>
    </div>
  )
}

