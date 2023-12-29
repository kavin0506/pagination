import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pagination from "./Pagination";
import axios from 'axios'

function MovieSection(){

    const[api,setapi]=useState([])
    const[currentPage,setcurrentPage]=useState(1)
    const[totalpage,setTotalpage]=useState(6)


    
  

    useEffect(()=>{
        axios.get(' https://api.tvmaze.com/shows/1/episodes')
        .then((res)=>{
            setapi(res.data)
        })
        })


        const lastPage=currentPage*totalpage;
        const firstPage=lastPage-totalpage;
        const currentpost= api.slice(firstPage,lastPage)
    return(
        <div>

<Container>
                <h2>Movie Details</h2>
                <div className="flex">
                    {
                        currentpost.map((event,index)=>{
                            return  (
                               <div key={index}>
                               <Card style={{ width: '20rem',height:'320px' }}>
                                   <Card.Img variant="top" src={event.image.medium} />
                                       <Card.Body>
                                           <Card.Text><span>MovieName:</span> {event.name}</Card.Text>
                                           <Card.Text><span>Rating:</span>{event.rating.average}</Card.Text>
                                           <Button variant="info">Movie Info</Button>
                                       </Card.Body>
                                   </Card>
                               </div>
                               
                           )
                        })
                  
                    }
                </div>
                
            </Container>
            <Pagination totalPost={api.length} setcurrentPage={setcurrentPage} api={api} totalpage={totalpage} currentPage={currentPage}/>
        </div>
    )
}


export default MovieSection;