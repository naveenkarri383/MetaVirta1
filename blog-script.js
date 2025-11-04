document.addEventListener('DOMContentLoaded', () => {

  // --- 1. DEFAULT POSTS ---
  const defaultPosts = [
    {
      title: "Understanding Microstructure",
      content: "Microstructure determines the mechanical properties of materials, including strength, toughness, and ductility..."
    },
    {
      title: "A Guide to Phase Diagrams",
      content: "Phase diagrams are the roadmaps for material scientists. Learn how to read the Fe-C diagram..."
    },
    {
      title: "Failure Analysis: A Case Study",
      content: "When a component fails, investigators look for clues. We analyze a classic case of brittle fracture..."
    },
    {
      title: "Intro to Extractive Metallurgy",
      content: "How do we get from raw ore to pure metal? An overview of pyrometallurgy and hydrometallurgy..."
    }
  ];

  // --- 2. DOM ELEMENT REFERENCES ---
  const blogGrid = document.getElementById('blog-grid');
  const searchInput = document.getElementById('blog-search');

  // Modal elements
  const modal = document.getElementById('post-creator-modal');
  const openModalBtn = document.getElementById('open-post-modal-btn');
  const closeModalBtn = document.getElementById('cancel-post-btn');
  const postForm = document.getElementById('post-form');
  
  // --- 3. FUNCTIONS ---

  function loadPosts() {
    const savedPosts = JSON.parse(localStorage.getItem('myBlogPosts')) || [];
    const allPosts = [...defaultPosts, ...savedPosts.reverse()];
    const searchTerm = searchInput.value.toLowerCase();

    const filteredPosts = allPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) || 
      post.content.toLowerCase().includes(searchTerm)
    );

    blogGrid.innerHTML = ''; // Clear the grid
    if (filteredPosts.length === 0) {
      blogGrid.innerHTML = '<p class="no-results-main">No posts found matching your search.</p>';
      return;
    }
    
    filteredPosts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.className = 'card blog-card';
      
      const previewText = post.content.substring(0, 100) + (post.content.length > 100 ? '...' : '');
      
      postCard.innerHTML = `
        <h3>${post.title}</h3>
        <p>${previewText}</p>
        <a href="#" class="btn btn-secondary" style="width: 100%; margin-top: 1rem;">Read More</a>
      `;
      blogGrid.appendChild(postCard);
    });
  }

  function handlePostSubmit(e) {
    e.preventDefault(); 
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const newPost = { title, content };
    const savedPosts = JSON.parse(localStorage.getItem('myBlogPosts')) || [];
    
    savedPosts.push(newPost);
    localStorage.setItem('myBlogPosts', JSON.stringify(savedPosts));
    
    postForm.reset();
    closeModal();
    loadPosts();
  }

  function openModal() {
    modal.style.display = 'flex';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  // --- 4. EVENT LISTENERS ---
  searchInput.addEventListener('keyup', loadPosts);
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  postForm.addEventListener('submit', handlePostSubmit);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // --- 5. INITIAL PAGE LOAD ---
  loadPosts();
  
});