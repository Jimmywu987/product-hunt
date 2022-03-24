import useTranslation from 'next-translate/useTranslation'
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import EachPostGrid from '../../postsComponents/eachPostGrid'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { PostDetail } from '../../../util/interfaces/postDetailInterface';


function RelatedTopicsSection({posts,displayPost,topicFilterPosts }:{posts:PostDetail[],displayPost:PostDetail,topicFilterPosts:PostDetail[]}) {
    const { t } = useTranslation('common');
    const loading = useSelector((state: IRootState) => state.loadingStatusReducer.status)
    if(loading){
        return <div className="flex justify-center items-center h-full">
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div>
    }
  return (
    <div>
        <div className="text-xl mb-3 ml-2 text-blueGray-700">
          {topicFilterPosts && topicFilterPosts.length > 0 ? t("postDetailPage.relatedPostTitle"): t("postDetailPage.otherPostTitle")}
        </div>
        <div className="w-full grid grid-cols-1 gap-6 lg:px-3">
        {
          topicFilterPosts && topicFilterPosts.length > 0 ?
          topicFilterPosts.slice(0,2).map(post=><EachPostGrid key={post.slug} post={post} />)
          :
          posts.filter((post)=>{
            return post.name !== displayPost.name}).slice(0,2).map(post=><EachPostGrid key={post.slug} post={post} />)
        }
        </div>
    </div>
  )
}

export default RelatedTopicsSection