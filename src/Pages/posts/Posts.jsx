import React from 'react'
import Button from '../../components/basic/Button'
import PostListItem from './PostListItem'
import Sidebar from '../../components/sidebar/Sidebar'


const Posts = () => {

  const image = new window.URL("https://images.pexels.com/photos/18003658/pexels-photo-18003658/free-photo-of-i-am-on-the-top-of-world-view-from-250m-apartment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  const posts = [
    {
      id: 1,
      postTitle: "Exploring the Outdoors",
      likeCount: 25,
      commentsCount: 12
    },
    {
      id: 2,
      postTitle: "Delicious Homemade Recipes",
      likeCount: 52,
      commentsCount: 8
    },
    {
      id: 3,
      postTitle: "New Tech Gadgets",
      likeCount: 48,
      commentsCount: 15
    },
    {
      id: 4,
      postTitle: "Book Recommendations",
      likeCount: 17,
      commentsCount: 5
    },
    {
      id: 5,
      postTitle: "Fitness Journey",
      likeCount: 36,
      commentsCount: 10
    }
  ];

  return (
    <div className='flex'>
      <div className={`left w-2/12`}>
        <Sidebar />
      </div>
      <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div class="flex items-center justify-between pb-6">
          <div>
            <h2 class="font-semibold text-gray-700">Posts</h2>
            <span class="text-xs text-gray-500">View all posts</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="ml-10 space-x-8 lg:ml-40">
              <Button name={'Download csv'} />
            </div>
          </div>
        </div>

        <div class="overflow-y-hidden rounded-lg border">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-slate-300 text-left text-xs font-semibold uppercase tracking-widest text-grey-700">
                  <th class="px-5 py-3">ID</th>
                  <th class="px-5 py-3">post title</th>
                  <th class="px-5 py-3">likes count</th>
                  <th class="px-5 py-3">comments count</th>
                  <th class="px-5 py-3">status</th>
                </tr>
              </thead>
              <tbody class="text-gray-500">
                {posts.map((post, i) => (
                  <PostListItem
                    id={post.id}
                    title={post.postTitle}
                    likeCount={post.likeCount}
                    commentsCount={post.commentsCount}
                    createdAt={post.createdAt}
                    image={image}
                  />
                ))
                }
              </tbody>
            </table>
          </div>
          <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
            <div class="mt-2 inline-flex sm:mt-0">
              <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
              <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>


      </div>
    </div >

  )
}

export default Posts