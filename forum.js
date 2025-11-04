/* === forum.js === */
/* This file contains all logic for the forum page */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. GLOBAL STATE & CONFIG ---
  let allQuestions = [];
  let likedItems = []; // Array to store IDs of liked posts/replies
  let currentPage = 1;
  const postsPerPage = 5; 

  // --- 2. DOM ELEMENT REFERENCES ---
  const postsContainer = document.getElementById('posts');
  const postBtn = document.getElementById('postBtn');
  // const postTitleEl = document.getElementById('post-title'); // REMOVED
  const postTagEl = document.getElementById('post-tag');
  const postTextEl = document.getElementById('post-text');
  const paginationContainer = document.getElementById('pagination-container');

  // Edit Modal References
  const editModal = document.getElementById('edit-post-modal');
  const editForm = document.getElementById('edit-post-form');
  const cancelEditBtn = document.getElementById('cancel-edit-btn');
  const editPostId = document.getElementById('edit-post-id');
  // const editPostTitle = document.getElementById('edit-post-title'); // REMOVED
  const editPostTag = document.getElementById('edit-post-tag');
  const editPostContent = document.getElementById('edit-post-content');

  // Check if we are actually on the forum page before running code
  if (!postsContainer) {
    return; // Exit script if this isn't the forum page
  }

  // --- 3. HELPER FUNCTIONS ---

  /**
   * Loads questions from localStorage
   */
  function loadQuestionsFromStorage() {
    const storedQuestions = localStorage.getItem('forumQuestions');
    if (storedQuestions) {
      allQuestions = JSON.parse(storedQuestions);
    } else {
      // Add a default post if storage is empty
      allQuestions = [
        {
          id: Date.now(),
          // title: "Welcome to the Forum!", // REMOVED
          tag: "General",
          content: "Feel free to ask questions or share insights. This is an example post.",
          timestamp: new Date().toLocaleString(),
          likes: 5,
          replies: [
            {
              id: Date.now() + 1,
              content: "Great! I have a question about the Iron-Carbon diagram.",
              timestamp: new Date().toLocaleString(),
              likes: 2
            }
          ]
        }
      ];
      saveQuestionsToStorage();
    }
  }

  /**
   * Saves the entire 'allQuestions' array to localStorage
   */
  function saveQuestionsToStorage() {
    localStorage.setItem('forumQuestions', JSON.stringify(allQuestions));
  }
  
  /**
   * Loads the user's liked items from localStorage
   */
  function loadLikesFromStorage() {
    const storedLikes = localStorage.getItem('forumLikes');
    likedItems = storedLikes ? JSON.parse(storedLikes) : [];
  }
  
  /**
   * Saves the user's liked items to localStorage
   */
  function saveLikesToStorage() {
    localStorage.setItem('forumLikes', JSON.stringify(likedItems));
  }

  /**
   * Finds a specific question or reply by its ID
   */
  function findItemById(id, type) {
    if (type === 'question') {
      return allQuestions.find(q => q.id === id);
    }
    if (type === 'reply') {
      for (const question of allQuestions) {
        const reply = question.replies.find(r => r.id === id);
        if (reply) return { reply, question };
      }
    }
    return null;
  }

  // --- 4. RENDER FUNCTIONS (Builds the HTML) ---

  /**
   * Renders the correct posts for the current page
   */
  function renderPage() {
    postsContainer.innerHTML = '';
    paginationContainer.innerHTML = '';
    
    allQuestions.sort((a, b) => b.id - a.id);

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = currentPage * postsPerPage;
    const paginatedQuestions = allQuestions.slice(startIndex, endIndex);

    if (paginatedQuestions.length === 0 && currentPage === 1) {
      postsContainer.innerHTML = '<p class="no-results-main">No discussions started yet. Be the first!</p>';
    } else {
      paginatedQuestions.forEach(question => {
        postsContainer.appendChild(createQuestionCard(question));
      });
    }
    renderPaginationButtons();
  }

  /**
   * Creates the HTML for a single question card
   */
  function createQuestionCard(question) {
    const postCard = document.createElement('div');
    postCard.className = 'card post-card';
    postCard.dataset.id = question.id; 

    const repliesHTML = question.replies
      .sort((a, b) => a.id - b.id) 
      .map(reply => createReplyCard(reply))
      .join('');
      
    const likeId = 'q-' + question.id;
    const isLiked = likedItems.includes(likeId);
    const activeLikeClass = isLiked ? 'like-btn-active' : '';

    const questionContent = `<p class="post-content">${question.content}</p>`;

    postCard.innerHTML = `
      <div class="post-header">
        <div class="post-header-left">
          <span class="post-tag" data-tag="${question.tag}">${question.tag}</span>
          </div>
        <button class="btn like-btn question-like-btn ${activeLikeClass}" title="Like Question">
          👍 <span class="like-count">${question.likes}</span>
        </button>
      </div>
      ${questionContent}
      <div class="post-meta">Posted on: ${question.timestamp}</div>
      
      <div class="post-actions">
        <button class="btn btn-secondary edit-btn">Edit</button>
        <button class="btn delete-btn">Delete</button>
      </div>
      
      <div class="replies-container">${repliesHTML}</div>
      
      <div class="reply-form">
        <textarea class="reply-text" placeholder="Write a reply..."></textarea>
        <button class="btn btn-secondary reply-btn">Reply</button>
      </div>
    `;
    return postCard;
  }

  /**
   * Creates the HTML string for a single reply card
   */
  function createReplyCard(reply) {
    const likeId = 'r-' + reply.id;
    const isLiked = likedItems.includes(likeId);
    const activeLikeClass = isLiked ? 'like-btn-active' : '';
  
    return `
      <div class="card reply-card" data-id="${reply.id}">
        <p class="post-content">${reply.content}</p>
        <div class="reply-footer">
          <div class="post-meta">Posted on: ${reply.timestamp}</div>
          <button class="btn like-btn reply-like-btn ${activeLikeClass}" title="Like Reply">
            👍 <span class="like-count">${reply.likes}</span>
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Renders the pagination buttons
   */
  function renderPaginationButtons() {
    const totalPages = Math.ceil(allQuestions.length / postsPerPage);
    if (totalPages <= 1) return; 

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.className = 'btn pagination-btn';
      pageBtn.textContent = i;
      pageBtn.dataset.page = i;
      if (i === currentPage) {
        pageBtn.classList.add('active');
      }
      paginationContainer.appendChild(pageBtn);
    }
  }

  // --- 5. EVENT HANDLERS ---

  /**
   * Handles posting a new question
   */
  function handleNewQuestion() {
    // const title = postTitleEl.value.trim(); // REMOVED
    const tag = postTagEl.value;
    const content = postTextEl.value.trim();

    if (!content) { // MODIFIED: Changed check
      alert('Please write a question.');
      return;
    }

    const newQuestion = {
      id: Date.now(),
      // title, // REMOVED
      tag,
      content,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      replies: []
    };

    allQuestions.push(newQuestion); 
    saveQuestionsToStorage();
    
    // postTitleEl.value = ''; // REMOVED
    postTextEl.value = '';
    postTagEl.value = 'General';
    
    currentPage = 1; 
    renderPage(); 
  }

  /**
   * Main click handler for all dynamic content (replies, likes)
   */
  function handlePostsContainerClick(e) {
    const target = e.target;
    const postCard = target.closest('.post-card');
    
    // --- Handle "Reply" button click ---
    if (target.classList.contains('reply-btn')) {
      if (!postCard) return;
      const questionId = Number(postCard.dataset.id);
      const replyTextArea = postCard.querySelector('.reply-text');
      const replyContent = replyTextArea.value.trim();

      if (!replyContent) {
        alert('Please write a reply.');
        return;
      }

      const newReply = {
        id: Date.now(),
        content: replyContent,
        timestamp: new Date().toLocaleString(),
        likes: 0
      };

      const question = findItemById(questionId, 'question');
      if (question) {
        question.replies.push(newReply);
        saveQuestionsToStorage();
        renderPage(); 
      }
    }

    // --- Handle "Like Question" button click ---
    if (target.closest('.question-like-btn')) {
      if (!postCard) return;
      const likeBtn = target.closest('.question-like-btn');
      const questionId = Number(postCard.dataset.id);
      const likeId = 'q-' + questionId;
      
      const question = findItemById(questionId, 'question');
      if (!question) return;

      const likeIndex = likedItems.indexOf(likeId);
      
      if (likeIndex === -1) {
        question.likes++;
        likedItems.push(likeId);
        likeBtn.classList.add('like-btn-active');
      } else {
        question.likes--;
        likedItems.splice(likeIndex, 1);
        likeBtn.classList.remove('like-btn-active');
      }
      
      likeBtn.querySelector('.like-count').textContent = question.likes; 
      saveQuestionsToStorage();
      saveLikesToStorage(); 
    }

    // --- Handle "Like Reply" button click ---
    if (target.closest('.reply-like-btn')) {
      const likeBtn = target.closest('.reply-like-btn');
      const replyCard = target.closest('.reply-card');
      const replyId = Number(replyCard.dataset.id);
      const likeId = 'r-' + replyId;

      const found = findItemById(replyId, 'reply');
      if (!found) return;
      
      const likeIndex = likedItems.indexOf(likeId);
      
      if (likeIndex === -1) {
        found.reply.likes++;
        likedItems.push(likeId);
        likeBtn.classList.add('like-btn-active');
      } else {
        found.reply.likes--;
        likedItems.splice(likeIndex, 1);
        likeBtn.classList.remove('like-btn-active');
      }

      likeBtn.querySelector('.like-count').textContent = found.reply.likes; 
      saveQuestionsToStorage();
      saveLikesToStorage(); 
    }
    
    // --- Handle "Delete" button click ---
    if (target.classList.contains('delete-btn')) {
      if (!postCard) return;
      const questionId = Number(postCard.dataset.id);
      if (confirm("Are you sure you want to delete this entire question and all its replies?")) {
        allQuestions = allQuestions.filter(q => q.id !== questionId);
        saveQuestionsToStorage();
        renderPage(); 
      }
    }
    
    // --- Handle "Edit" button click ---
    if (target.classList.contains('edit-btn')) {
      if (!postCard) return;
      const questionId = Number(postCard.dataset.id);
      const question = findItemById(questionId, 'question');
      if (question) {
        openEditModal(question);
      }
    }
  }

  /**
   * Handles clicking a pagination button
   */
  function handlePaginationClick(e) {
    if (e.target.classList.contains('pagination-btn')) {
      currentPage = Number(e.target.dataset.page);
      renderPage();
    }
  }

  // --- 6. Edit Modal Functions ---
  
  function openEditModal(question) {
    editPostId.value = question.id;
    // editPostTitle.value = question.title; // REMOVED
    editPostTag.value = question.tag;
    editPostContent.value = question.content;
    editModal.style.display = 'flex';
  }

  function closeEditModal() {
    editModal.style.display = 'none';
  }

  function handleSaveEdit(e) {
    e.preventDefault();
    
    const questionId = Number(editPostId.value);
    const question = findItemById(questionId, 'question');
    
    if (question) {
      // question.title = editPostTitle.value; // REMOVED
      question.tag = editPostTag.value;
      question.content = editPostContent.value;
      
      saveQuestionsToStorage();
      closeEditModal();
      renderPage(); 
    } else {
      alert("Error: Could not find question to save.");
    }
  }

  // --- 7. ATTACH EVENT LISTENERS ---
  
  postBtn.addEventListener('click', handleNewQuestion);
  postsContainer.addEventListener('click', handlePostsContainerClick);
  paginationContainer.addEventListener('click', handlePaginationClick);
  
  editForm.addEventListener('submit', handleSaveEdit);
  cancelEditBtn.addEventListener('click', closeEditModal);
  editModal.addEventListener('click', (e) => {
    if (e.target === editModal) {
      closeEditModal();
    }
  });

  // --- 8. INITIAL LOAD ---
  loadQuestionsFromStorage();
  loadLikesFromStorage(); 
  renderPage();

});