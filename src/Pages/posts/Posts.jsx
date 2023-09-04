import React, { useEffect, useState } from 'react'
import CsvDownloadButton from 'react-json-to-csv'
import PostListItem from './PostListItem'
import Sidebar from '../../components/sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/features/post/postActions'
import noImage from '../../assets/noImage.svg'


const Posts = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [filename, setFilename] = useState(null)



  const { posts, currentPage, numberOfPages } = useSelector(state => state.post)


  useEffect(() => {
    dispatch(getPosts(page))
    console.log(page)
  }, [page])

  useEffect(() => {
    const getDate = (dateString) => {
      const dateObj = new Date(dateString);
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12:false };
      const date = dateObj.toLocaleString('en-US', options);
      return date
    }

    const firstDate = posts && getDate(posts[0].createdAt)
    const LastDate = posts && getDate(posts[posts.length - 1].createdAt)
    console.log(firstDate, LastDate);
    const name = `posts from ${firstDate} to ${LastDate}.csv`
    setFilename(name)
  }, [posts])


  const handlePageInc = () => {
    if (numberOfPages && numberOfPages > currentPage) {
      setPage((prev) => prev + 1)
    }
    console.log(page)
  }

  const handlePageDec = () => {
    if (currentPage && currentPage > 1) {
      setPage((prev) => prev - 1)
    }
    console.log(page)
  }


  return (
    <div className='flex'>
      <div className={`left w-2/12`}>
        <Sidebar />
      </div>

      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 overflow-y-scroll h-[85vh] w-10/12  ">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Posts</h2>
            <span className="text-xs text-gray-500">View all posts</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-10 space-x-8 lg:ml-40">
              <CsvDownloadButton
                className="inline-block rounded-xl bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                data={posts}
                filename={filename}
              />
            </div>
          </div>
        </div>

        <div className="overflow-y-hidden w-full rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-300 text-left text-xs font-semibold uppercase tracking-widest text-grey-700">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">post title</th>
                  <th className="px-5 py-3">likes count</th>
                  <th className="px-5 py-3">comments count</th>
                  <th className="px-5 py-3">created At</th>
                </tr>
              </thead>
              <tbody className="text-gray-500 ">
                {posts?.map((post) => (
                  <PostListItem
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    likeCount={post.like_count}
                    commentsCount={post.comment_count}
                    createdAt={post.createdAt}
                    image={post.selectedFile ? post.selectedFile : noImage}
                  />
                ))
                }
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm"> Showing {currentPage} of {numberOfPages} pages </span>
            <div className="mt-2 inline-flex sm:mt-0">
              <button
                className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100"
                onClick={handlePageDec}
              >
                Prev
              </button>
              <button
                className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100"
                onClick={handlePageInc}
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div >

  )
}

export default Posts