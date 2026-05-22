const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch(url, { ...defaultOptions, ...options })
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API Call Error:', error)
    throw error
  }
}

// Product API
export const productAPI = {
  getAll: () => apiCall('/products'),
  getById: (id) => apiCall(`/products/${id}`),
  create: (data) => apiCall('/products', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiCall(`/products/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiCall(`/products/${id}`, { method: 'DELETE' }),
}

// User API
export const userAPI = {
  register: (data) => apiCall('/users/register', { method: 'POST', body: JSON.stringify(data) }),
  login: (data) => apiCall('/users/login', { method: 'POST', body: JSON.stringify(data) }),
  getProfile: () => apiCall('/users/profile'),
  logout: () => apiCall('/users/logout', { method: 'POST' }),
}

// Cart API
export const cartAPI = {
  add: (data) => apiCall('/cart/add', { method: 'POST', body: JSON.stringify(data) }),
  get: () => apiCall('/cart'),
  update: (itemId, data) => apiCall(`/cart/update/${itemId}`, { method: 'PUT', body: JSON.stringify(data) }),
  remove: (itemId) => apiCall(`/cart/remove/${itemId}`, { method: 'DELETE' }),
}

// Order API
export const orderAPI = {
  create: (data) => apiCall('/orders/create', { method: 'POST', body: JSON.stringify(data) }),
  getUserOrders: () => apiCall('/orders/user'),
  getAll: () => apiCall('/orders'),
  update: (orderId, data) => apiCall(`/orders/${orderId}`, { method: 'PUT', body: JSON.stringify(data) }),
}
