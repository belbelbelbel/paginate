import './App.css';
import React, { useEffect,useState} from 'react';
import axios from 'axios';
import Poster from './Components/Poster';
import Pagination from './Components/Pagination';
function App() {
  const [posts,setposts] = useState([])
  const [loading,setloading] = useState(false)
  const [currentpage,setcurrentpage]= useState(1)
  const [postperpage] = useState(10)
  useEffect(() => {
    const fetchpost = async () => {
      setloading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setposts(res.data)
      setloading(false)
      
  }
  fetchpost()
  }, [])
  // get current post
  const indexoflastpage = currentpage * postperpage
  const indexoffirstpage = indexoflastpage - postperpage
  const indexofcurrent = posts.slice(indexoffirstpage,indexoflastpage)
  function paginate(postnumber) {
    setcurrentpage(postnumber)
  }
  
  return (
    <div className="App">
      <h1>MY BLOGS</h1>
      <Poster  loading={loading}  posts={indexofcurrent}/>
      <Pagination  postperpage={postperpage} totalpage={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
