import React,{useState,useEffect} from 'react'
import { Container , PostForm } from '../components'
import appwriteService from '../appwriteService/config'
import { useNavigate, useParams } from 'react-router-dom';


const EditPost = () => {
    const [posts , setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
        })
        }else{
            navigate('/')
        }
    },[slug, navigate])

  return posts ? (
    <div className='py-8'>
        <Container>
            <PostForm post={posts}/>
        </Container>
    </div>
  ):null
}

export default EditPost