const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

const loadingEl = document.getElementById("loading");
const errorMessageEl = document.getElementById("error-message");
const usersContainerEl = document.getElementById("users-container");
const postsContainerEl = document.getElementById("posts-container");
const postsTitleEl = document.getElementById("posts-title");
const postsLoadingEl = document.getElementById("posts-loading");
const postsErrorEl = document.getElementById("posts-error");
const postsListEl = document.getElementById("posts-list");


function getUsers(retries = 0) {
    fetch(USERS_API)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            // console.log(response);
            return response.json();
        })
        .then(users => {
            loadingEl.classList.add("hidden");
            usersContainerEl.classList.remove("hidden");
            displayUserTabs(users);
        })
        .catch(error => {
            if (retries < 3) {
                console.log(`Retrying...`);
                setTimeout(() => {
                    getUsers(retries + 1);
                }, 700);
            } else {
                loadingEl.classList.add("hidden");
                errorMessageEl.classList.remove("hidden");
                errorMessageEl.textContent = `Failed to load users after 3 attempts: ${error.message}`;
                // console.error("Failed to fetch users:", error);
            }
        });
    }
    
function displayUserTabs(users) {
    console.log(users);
    usersContainerEl.innerHTML = "";
    
    users.forEach(user => {
        const tab = document.createElement("button");
        tab.className = "user-tab";
        tab.textContent = user.name;
        tab.dataset.userId = user.id;
        
        tab.addEventListener("click", () => handleUserClick(user.id, user.name, tab));
        
        usersContainerEl.appendChild(tab);
    });
}

function handleUserClick(userId, userName, tabElement) {
    document.querySelectorAll(".user-tab").forEach(tab => tab.classList.remove("active"));
    tabElement.classList.add("active");
    postsTitleEl.textContent = `Posts by ${userName}`;
    
    getUserPosts(userId);
}

async function getUserPosts(userId, retries = 0) {
    postsContainerEl.classList.remove("hidden");
    postsLoadingEl.classList.remove("hidden");
    postsErrorEl.classList.add("hidden");
    postsListEl.innerHTML = "";
    
    try {
        const response = await fetch(`${POSTS_API}?userId=${userId}`);
        // console.log(response);
        
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        const posts = await response.json();
        
        postsLoadingEl.classList.add("hidden");
        displayPosts(posts);
    } catch (error) {
        if (retries < 3) {
            console.log(`Retrying posts... Attempt ${retries + 1}`);
            await new Promise(resolve => setTimeout(resolve, 700));
            return getUserPosts(userId, retries + 1);
        } else {
            postsLoadingEl.classList.add("hidden");
            postsErrorEl.classList.remove("hidden");
            postsErrorEl.textContent = `Failed to load posts after 3 attempts: ${error.message}`;
            console.error("Failed to fetch posts:", error);
        }
    }
}

function displayPosts(posts) {
    postsListEl.innerHTML = "";
    
    if (posts.length === 0) {
        postsListEl.innerHTML = "<li>No posts found for this user.</li>";
        return;
    }
    
    posts.forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
        postsListEl.appendChild(li);
    });
}

getUsers();
