import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header'

const About = (props) => {
   
        
    
    const { data } = props.props.location;
   
  

    const[quote,setQuote] = useState([]);
    let quote_array = [];
    

    useEffect(()=>{
        const fetchItems = async () =>{
          const result = await axios(
            `https://www.breakingbadapi.com/api/quotes/${data.char_id}`
            );
    
         
          
       

          result.data.map((item)=>{
           
            quote_array.push(item.quote);
          })
         
          setQuote(quote_array);

         
        }
        fetchItems();
      },[])

     

    return (
       
        <div className="about">
            <Header/>
             <h2 className="about_h2">{data.name}</h2>
            <div className="about_main_div">
                
                <img className="about_img" src={data.img} alt={data.name}/>
             
                <div className="about_content">
                
                <p><strong>Actor Name: </strong>{data.portrayed}</p>
                <p><strong>Birthday: </strong>{data.birthday}</p>
                <p><strong>Occupation: </strong>{data.occupation.map(function(item,i) {
                    
                    return <span key={item}>{item}{data.occupation[i+1]? ',': ''} </span>
                    
                })}</p>
                <p><strong>Nickname: </strong>{data.nickname}</p>
                <p><strong>Portrayed: </strong>{data.portrayed}</p>
                <p><strong>Status: </strong>{data.status}</p>
                <p><strong>Quote: </strong>{quote.map(function(item,i) {
                    
                    return <span key={item}>{item}{quote[i+1]? ', ': ''} </span>
                    
                })}</p>
               

                </div>
            </div>
        </div>
    )
            
}

export default About
