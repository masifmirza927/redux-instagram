import React, { useEffect, useRef, useState } from 'react'
import SideWidget from "../components/SideWidget/SideWidget";
import PostCard from '../components/PostCard/PostCard';
import httpClient from '../httpClient';
import LoadingBar from 'react-top-loading-bar'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [updatePosts, setUpdatePosts] = useState(false);
  const image = "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg";
  const loadingRef = useRef(null);

  useEffect(() => {
    loadingRef.current.continuousStart();
    httpClient.get('/post/all').then((response) => {
      if (response.data.status == "success") {
        setPosts(response.data.posts);
      }

    }).catch(error => console.log(error.message))
      .finally(() => { 
        setUpdatePosts(false)
        loadingRef.current.complete();
      })
  }, [updatePosts]);


  return (
    <div className='row'>
      <LoadingBar ref={loadingRef} />
      <div className='col-md-4'>
        <SideWidget image={image} setPosts={setPosts}  setUpdatePosts={setUpdatePosts} />
      </div>
      <div className='col-md-8 example' style={{ height: '100vh', overflowY: 'auto' }}>
        {
          posts.map(post => <PostCard key={post._id} post={post} />)
        }
      </div>
    </div>
  )
}

export default Home