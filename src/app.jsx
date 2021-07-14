import './app.css';
import VideoList from './components/main/videoList';
import SearchHeader from './components/common/searchHeader';
import { useEffect, useState } from 'react'; 

function App() {
  //인기영상 리스트
  const [popularVideoList, setpopularVideoList] = useState([]);
  //테스트2
  const [test, settest] = useState([]);
  //채널썸네일 받아오기
  const [popularVideoListChennel, setPopularVideoListChennel] = useState([]);
  //searchKeyword
  const [searchKeyword, setsearchKeyword] = useState([]);
   
  //컴포넌트가 마운트 되었을때만 호출
  useEffect(()=>{
    const popularVideoListCallApi = ()=>{
      return fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&key=AIzaSyA3Kvbuuk1SRy7seZ2egvHwkm-eU1BXvFY&maxResults=25')
      .then(itemList => itemList.json())
      .then(itemList => {
        setpopularVideoList(itemList.items)
      })
      .catch(error => console.log(error))
    }

    popularVideoListCallApi();
  },[])
  console.log(popularVideoList)

  const handleSearchSubmit = (keyword) => {

    return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyA3Kvbuuk1SRy7seZ2egvHwkm-eU1BXvFY`)
    .then(itemList => itemList.json())
    .then(itemList => {
      const videos = itemList.items
      settest(videos)
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <SearchHeader onSearchSubmit={handleSearchSubmit} />
      <VideoList videos={popularVideoList} videos={popularVideoList} />
    </div>
  );
}

export default App;
