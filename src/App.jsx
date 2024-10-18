import { Home } from './features/home'
import { Post } from './features/Post'


export function App() {

  return (
    <>
       <Home />
       <Post title="Post 1" description="Description 1" />
        <Post title="Post 2" description="Description 2" />
    </>
  )
}
