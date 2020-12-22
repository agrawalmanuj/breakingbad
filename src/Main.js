import React, {useState,useEffect} from 'react';
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';



const Main = () => {
  
  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const[query,setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(()=>{
    const fetchItems = async () =>{
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        );

     
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  },[query])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  
  return (
   
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={currentPosts}/>
    </div>
    
    
  );
}

export default Main;
