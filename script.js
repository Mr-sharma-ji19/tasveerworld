const imageData = [
  { id: 1, title: 'Forest waterfall', category: 'Nature', author: 'S. Mehta', downloads: '12.4K', tags: ['nature', 'green', 'waterfall'], url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Iconic fashion board', category: 'Fashion', author: 'A. Kapoor', downloads: '11.2K', tags: ['fashion', 'pinterest', 'style'], url: 'https://images.unsplash.com/photo-1495121605193-b116b5b9cbe0?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'City skyline at dusk', category: 'Travel', author: 'R. Singh', downloads: '18.1K', tags: ['city', 'sunset', 'urban'], url: 'https://images.unsplash.com/photo-1494475673543-6d0c5a4a0b0e?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Modern workspace flatlay', category: 'Business', author: 'N. Sharma', downloads: '6.8K', tags: ['workspace', 'minimal', 'desk'], url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Tech device flatlay', category: 'Technology', author: 'K. Jain', downloads: '14.7K', tags: ['tech', 'flatlay', 'gadgets'], url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Interior moodboard', category: 'Lifestyle', author: 'M. Dutta', downloads: '8.3K', tags: ['interior', 'moodboard', 'pinterest'], url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Portrait with warm light', category: 'People', author: 'P. Verma', downloads: '11.5K', tags: ['portrait', 'light', 'studio'], url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Coffee and notes', category: 'Business', author: 'L. Patel', downloads: '8.7K', tags: ['coffee', 'work', 'planning'], url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80' },
  { id: 9, title: 'Tech workspace view', category: 'Technology', author: 'R. Bhatt', downloads: '5.8K', tags: ['technology', 'office', 'framework'], url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
  { id: 10, title: 'Mountain hiking trail', category: 'Travel', author: 'S. Lal', downloads: '16.9K', tags: ['mountain', 'nature', 'adventure'], url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' },
  { id: 11, title: 'Colorful illustration', category: 'Creative', author: 'D. Rao', downloads: '4.3K', tags: ['illustration', 'colorful', 'art'], url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80' },
  { id: 12, title: 'Minimal workspace', category: 'Business', author: 'A. Agarwal', downloads: '7.2K', tags: ['minimal', 'workspace', 'desk'], url: 'https://images.unsplash.com/photo-1518085250887-0b3a42b63f2d?auto=format&fit=crop&w=800&q=80' },
  { id: 13, title: 'Night city street', category: 'Travel', author: 'V. Desai', downloads: '13.3K', tags: ['city', 'night', 'urban'], url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80' },
  { id: 14, title: 'Bird in forest', category: 'Nature', author: 'E. Malhotra', downloads: '10.6K', tags: ['wildlife', 'bird', 'forest'], url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80' },
  { id: 15, title: 'Fashion editorial', category: 'Fashion', author: 'T. Roy', downloads: '9.8K', tags: ['fashion', 'editorial', 'style'], url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' },
  { id: 16, title: 'Work from home setup', category: 'Business', author: 'S. Khanna', downloads: '12.0K', tags: ['home office', 'remote', 'work'], url: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80' },
  { id: 17, title: 'Aesthetic food plate', category: 'Food', author: 'R. Mishra', downloads: '13.9K', tags: ['food', 'pinterest', 'aesthetic'], url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' },
  { id: 18, title: 'Boho room corner', category: 'Lifestyle', author: 'S. Bhatia', downloads: '10.4K', tags: ['boho', 'interior', 'decor'], url: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80' },
  { id: 19, title: 'Minimal fashion flatlay', category: 'Fashion', author: 'A. Roy', downloads: '6.3K', tags: ['flatlay', 'fashion', 'minimal'], url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80' },
  { id: 20, title: 'Creative moodboard', category: 'Creative', author: 'K. Patel', downloads: '5.5K', tags: ['moodboard', 'design', 'pinterest'], url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80' },
  { id: 21, title: 'Bright travel journal', category: 'Travel', author: 'N. Biswas', downloads: '9.7K', tags: ['travel', 'journal', 'vacation'], url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' },
  { id: 22, title: 'Fashion sketch board', category: 'Fashion', author: 'M. Jain', downloads: '8.1K', tags: ['sketch', 'fashion', 'studio'], url: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80' },
  { id: 23, title: 'Food styling photo', category: 'Food', author: 'P. Nair', downloads: '7.6K', tags: ['food', 'styling', 'culinary'], url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' },
  { id: 24, title: 'Cozy bookshelf corner', category: 'Lifestyle', author: 'S. Sen', downloads: '10.9K', tags: ['bookshelf', 'cozy', 'home'], url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80' }
];

const categories = ['All', 'Nature', 'Travel', 'Modern', 'Business', 'Technology', 'Creative', 'People', 'Fashion', 'Lifestyle', 'Food'];
const gridElement = document.getElementById('imageGrid');
const categoryFilters = document.getElementById('categoryFilters');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const uploadFileInput = document.getElementById('uploadFile');
const uploadTitleInput = document.getElementById('uploadTitle');
const uploadAuthorInput = document.getElementById('uploadAuthor');
const uploadCategoryInput = document.getElementById('uploadCategory');
const uploadCategoryInfo = document.getElementById('uploadCategoryInfo');
const uploadTagsInput = document.getElementById('uploadTags');
const uploadSubmit = document.getElementById('uploadSubmit');
const uploadStatus = document.getElementById('uploadStatus');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const cloudName = 'diwngkoc8';
const uploadPreset = 'unsigned_upload';
const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

const firebaseConfig = {
  apiKey: 'AIzaSyC4U3udTgHcD3JYpbzLS4q4FWLzwGJuxpc',
  authDomain: 'tasweerworld.firebaseapp.com',
  projectId: 'tasweerworld',
  storageBucket: 'tasweerworld.firebasestorage.app',
  messagingSenderId: '1066852345128',
  appId: '1:1066852345128:web:17bcb097bfcdec90169c1d',
  measurementId: 'G-N9SE1W9TTX'
};

const localStorageKey = 'tasveerworldUploadedImages';
const ownerName = 'Ritesh Sharma';
const adminPassword = 'tasveerworldAdmin';
let isAdmin = localStorage.getItem('tasveerworldAdmin') === 'true';
let db = null;

function initFirebase() {
  if (typeof firebase === 'undefined' || !firebase.initializeApp) {
    console.warn('Firebase SDK not loaded. Firestore will not be available.');
    return;
  }

  if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'YOUR_API_KEY') {
    console.warn('Firebase configuration is not set. Replace placeholder values with your Firebase project details.');
    return;
  }

  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log('Firebase initialized successfully.');
  } catch (error) {
    if (error.message && error.message.includes('already exists')) {
      db = firebase.firestore();
    } else {
      console.error('Firebase initialization error:', error);
    }
  }
}

initFirebase();
loadLocalUploads();

function saveUploadsToLocalStorage() {
  try {
    const uploadedItems = imageData.filter((item) => item.isUploaded);
    localStorage.setItem(localStorageKey, JSON.stringify(uploadedItems));
  } catch (error) {
    console.warn('Unable to save uploads to localStorage:', error);
  }
}

function loadLocalUploads() {
  try {
    const saved = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
    if (!Array.isArray(saved)) return;
    saved.reverse().forEach((data) => {
      if (data && data.url && !imageData.some((item) => item.url === data.url)) {
        imageData.unshift({
          ...data,
          id: imageData.length + 1,
          isUploaded: true
        });
        addCategoryIfMissing(data.category || 'Uncategorized');
      }
    });
  } catch (error) {
    console.warn('Unable to load uploads from localStorage:', error);
  }
}

function getFirestoreReference() {
  if (db) {
    return db;
  }
  if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
    return firebase.firestore();
  }
  return null;
}

const modalOverlay = document.getElementById('imageModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalTags = document.getElementById('modalTags');
const modalDownload = document.getElementById('modalDownload');
const modalDelete = document.getElementById('modalDelete');
const similarGrid = document.getElementById('similarGrid');
const collectionsGrid = document.getElementById('collectionsGrid');
const adminToggleButton = document.getElementById('adminToggle');

let selectedCategory = 'All';
let currentSearch = '';
let itemsToShow = 8;
let currentModalItem = null;

function createCategoryButtons() {
  categoryFilters.innerHTML = '';
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.className = 'filter-button' + (category === 'All' ? ' active' : '');
    button.textContent = category;
    button.dataset.category = category;
    button.addEventListener('click', () => {
      selectedCategory = category;
      itemsToShow = 8;
      updateActiveCategory();
      renderGrid();
    });
    categoryFilters.appendChild(button);
  });
}

function updateActiveCategory() {
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.category === selectedCategory);
  });
}

function filterImages() {
  return imageData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const query = currentSearch.trim().toLowerCase();
    const matchesSearch = query === ''
      || item.title.toLowerCase().includes(query)
      || item.author.toLowerCase().includes(query)
      || item.category.toLowerCase().includes(query)
      || (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(query)));
    return matchesCategory && matchesSearch;
  });
}

function renderGrid() {
  const filtered = filterImages();
  gridElement.innerHTML = '';

  if (filtered.length === 0) {
    gridElement.innerHTML = '<p style="color: var(--muted); grid-column: 1 / -1;">Koi image nahi mila. Search ya category badal ke dekhen.</p>';
    loadMoreBtn.style.display = 'none';
    return;
  }

  const visible = filtered.slice(0, itemsToShow);
  visible.forEach(renderCard);

  loadMoreBtn.style.display = filtered.length > visible.length ? 'inline-flex' : 'none';
}

function getCollections() {
  const collections = {};
  imageData.forEach((item) => {
    if (!collections[item.category]) {
      collections[item.category] = { count: 0, sampleImage: item.url };
    }
    collections[item.category].count++;
  });
  return Object.entries(collections).map(([name, data]) => ({ name, ...data }));
}

function renderCollections() {
  const collections = getCollections();
  collectionsGrid.innerHTML = '';
  collections.forEach((collection) => {
    const card = document.createElement('article');
    card.className = 'collection-card';
    card.style.backgroundImage = `url('${collection.sampleImage}')`;
    card.innerHTML = `
      <div class="collection-overlay">
        <h3>${collection.name}</h3>
        <p>${collection.count} images</p>
      </div>
    `;
    card.addEventListener('click', () => {
      selectedCategory = collection.name;
      updateActiveCategory();
      renderGrid();
      document.getElementById('images').scrollIntoView({ behavior: 'smooth' });
    });
    collectionsGrid.appendChild(card);
  });
}

function renderCard(item) {
  const card = document.createElement('article');
  card.className = 'image-card';
  card.innerHTML = `
    <img src="${item.url}" alt="${item.title}" loading="lazy" />
    <div class="card-body">
      <h3>${item.title}</h3>
      <p>${item.category} · by ${item.author}</p>
      <div class="card-meta">
        <span>⭐ ${item.downloads}</span>
        <span>Free</span>
      </div>
      <button class="button card-download" type="button">Download</button>
    </div>
  `;
  card.addEventListener('click', () => openModal(item));
  card.querySelector('.card-download').addEventListener('click', (event) => {
    event.stopPropagation();
    downloadImage(item);
  });
  gridElement.appendChild(card);
}

async function downloadImage(item) {
  const fileName = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`;
  try {
    const response = await fetch(item.url, { mode: 'cors' });
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    const link = document.createElement('a');
    link.href = item.url;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

function canDeleteItem(item) {
  return item && item.isUploaded && (isAdmin || item.author === ownerName);
}

function deleteImage(item) {
  if (!item || !confirm('क्या आप इस image को हटाना चाहते हैं?')) return;
  const index = imageData.findIndex((entry) => entry.url === item.url);
  if (index !== -1) {
    imageData.splice(index, 1);
    saveUploadsToLocalStorage();
  }

  const dbRef = getFirestoreReference();
  if (dbRef) {
    dbRef.collection('uploadedImages').where('url', '==', item.url).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => doc.ref.delete().catch((error) => console.error('Firestore delete error:', error)));
      })
      .catch((error) => console.error('Firestore delete query error:', error));
  }

  closeModal();
  renderGrid();
  renderCollections();
}

function openModal(item) {
  currentModalItem = item;
  modalImage.src = item.url;
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;
  modalMeta.textContent = `${item.category} · by ${item.author} · ${item.downloads}`;
  modalTags.innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join('');
  const downloadName = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`;
  modalDownload.href = item.url;
  modalDownload.download = downloadName;
  modalDelete.style.display = canDeleteItem(item) ? 'inline-flex' : 'none';
  renderSimilarImages(item);
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalImage.src = '';
}

function getSimilarImages(item) {
  const itemTags = item.tags || [];
  const similar = imageData.filter((other) => {
    if (other.id === item.id) return false;
    const sameCategory = other.category === item.category;
    const sharedTag = itemTags.some((tag) => other.tags && other.tags.includes(tag));
    return sameCategory || sharedTag;
  });
  return similar.slice(0, 4);
}

function renderSimilarImages(item) {
  const similar = getSimilarImages(item);
  if (similar.length === 0) {
    similarGrid.innerHTML = '<p style="color: var(--muted);">Koi similar image nahi mili.</p>';
    return;
  }
  similarGrid.innerHTML = '';
  similar.forEach((other) => {
    const card = document.createElement('article');
    card.className = 'similar-card';
    card.innerHTML = `
      <img src="${other.url}" alt="${other.title}" loading="lazy" />
      <div class="similar-info">
        <p>${other.title}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(other));
    similarGrid.appendChild(card);
  });
}

function applySearch() {
  currentSearch = searchInput.value;
  itemsToShow = 8;
  renderGrid();
}

function parseTags(tagsString) {
  return tagsString
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function updateUploadCategoryInfo() {
  if (!uploadCategoryInput.value) {
    uploadCategoryInfo.textContent = 'Select a category to organize your image upload.';
    return;
  }
  uploadCategoryInfo.textContent = `Selected category: ${uploadCategoryInput.value}. This helps TasveerWorld show your photo in the right collection.`;
}

function updateAdminStatusUI() {
  if (isAdmin) {
    adminToggleButton.textContent = 'Admin Logout';
    adminToggleButton.style.background = 'rgba(239, 68, 68, 0.95)';
  } else {
    adminToggleButton.textContent = 'Admin Login';
    adminToggleButton.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
  }
}

function handleAdminToggle() {
  if (isAdmin) {
    isAdmin = false;
    localStorage.removeItem('tasveerworldAdmin');
    updateAdminStatusUI();
    renderGrid();
    return;
  }

  const password = prompt('Admin password डालें:');
  if (password === adminPassword) {
    isAdmin = true;
    localStorage.setItem('tasveerworldAdmin', 'true');
    updateAdminStatusUI();
    renderGrid();
    alert('Admin access दिया गया। अब आप delete कर सकते हैं।');
  } else {
    alert('गलत password।');
  }
}

function addCategoryIfMissing(category) {
  if (!categories.includes(category)) {
    categories.push(category);
    createCategoryButtons();
  }
}

function handleUpload() {
  const file = uploadFileInput.files[0];
  const title = uploadTitleInput.value.trim();
  const author = uploadAuthorInput.value.trim() || 'You';
  const category = uploadCategoryInput.value;
  const tags = parseTags(uploadTagsInput.value);

  if (!file) {
    uploadStatus.textContent = 'पहले फ़ाइल चुनें।';
    return;
  }
  if (!title) {
    uploadStatus.textContent = 'कृपया टाइटल डालें।';
    return;
  }

  uploadStatus.textContent = 'Uploading image to Cloudinary...';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  fetch(cloudinaryUploadUrl, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json().then((result) => ({ status: response.status, body: result })))
    .then(({ status, body }) => {
      if (status !== 200 && status !== 201) {
        throw new Error(body.error?.message || 'Cloudinary upload failed.');
      }

      const uploadedUrl = body.secure_url;
      console.log('Cloudinary image URL:', uploadedUrl);
      uploadStatus.textContent = 'Upload successful.';

      const newItem = {
        id: imageData.length + 1,
        title,
        category,
        author,
        downloads: '0',
        tags: tags.length ? tags : [category.toLowerCase()],
        url: uploadedUrl,
        isUploaded: true
      };

      const dbRef = getFirestoreReference();
      if (dbRef) {
        dbRef.collection('uploadedImages').add({
          title: newItem.title,
          category: newItem.category,
          author: newItem.author,
          downloads: newItem.downloads,
          tags: newItem.tags,
          url: newItem.url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).catch((error) => {
          console.error('Firestore save error:', error);
        });
      }

      imageData.unshift(newItem);
      saveUploadsToLocalStorage();
      addCategoryIfMissing(category);
      uploadFileInput.value = '';
      uploadTitleInput.value = '';
      uploadAuthorInput.value = '';
      uploadTagsInput.value = '';
      selectedCategory = category;
      updateActiveCategory();
      updateUploadCategoryInfo();
      renderGrid();
      renderCollections();
    })
    .catch((error) => {
      console.error('Cloudinary upload error:', error);
      uploadStatus.textContent = `Upload failed: ${error.message}`;
    });
}

uploadSubmit.addEventListener('click', handleUpload);

searchButton.addEventListener('click', applySearch);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') applySearch();
});

uploadCategoryInput.addEventListener('change', updateUploadCategoryInfo);
updateUploadCategoryInfo();

document.querySelectorAll('.tagline span').forEach((tag) => {
  tag.addEventListener('click', () => {
    searchInput.value = tag.dataset.tag;
    applySearch();
  });
});

loadMoreBtn.addEventListener('click', () => {
  itemsToShow += 4;
  renderGrid();
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) closeModal();
});
modalDelete.addEventListener('click', () => {
  if (currentModalItem) deleteImage(currentModalItem);
});
adminToggleButton.addEventListener('click', handleAdminToggle);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

updateAdminStatusUI();
createCategoryButtons();
renderGrid();
renderCollections();

const dbRef = getFirestoreReference();
if (dbRef) {
  dbRef.collection('uploadedImages').get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      if (!imageData.some((existing) => existing.url === data.url)) {
        imageData.unshift({
          id: imageData.length + 1,
          title: data.title || 'Uploaded image',
          category: data.category || 'Uncategorized',
          author: data.author || 'Unknown',
          downloads: data.downloads || '0',
          tags: data.tags || [data.category?.toLowerCase() || 'uploaded'],
          url: data.url,
          isUploaded: true
        });
        addCategoryIfMissing(data.category || 'Uncategorized');
      }
    });
    renderGrid();
    renderCollections();
  }).catch((error) => {
    console.error('Firestore load error:', error);
  });
}
