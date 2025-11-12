const BASE_URL = `https://dummyjson.com`;

const renderPosts = (posts) =>{
  const postListEl = document.querySelector(".js-post-list")
  const html = posts.map((post) =>{

  }).join("");
  postListEl.innerHTML = html;
};

const setLoading = (status = true) => {
  const loadingEl = document.querySelector(".js-loading");
  loadingEl.innerHTML = status ? `<span class="text-3xl block text-center">Loading...</span>: "";</span>`;
};

const fetchPosts = async () => {
  try{
    //Add loading
    setLoading()
    const response = await fetch(`${BASE_URL}/posts`);
    if(!response.ok){
      throw new Error("Failed to fetch/posts")
    }
    const {posts} = await response.json();
    renderPosts(posts);
  } catch (error){
    console.log(error);
    
  } finally {
    //Remove loading
    setLoading(false)
  }
}

fetchPosts(); 