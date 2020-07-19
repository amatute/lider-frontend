import React, { useState } from 'react'
import { axiosParams } from '../utils/helpers'
import { API_URL } from '../utils/constants'
import SearchForm from './SearchForm'
import ProductList from './ProductList' 
import Pagination from './Pagination'
import axios from 'axios'

export const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [limit] = useState(5);

  const handleSubmit = async ({input, page}) => {
    try {
      const params = axiosParams(input || searchTerm, page || currentPage, limit);
      const { data } = await axios.get(`${API_URL}/api/v1/products/search`, { params });
      setSearchTerm(data.payload.searchTerm);
      setProducts([...data.payload.products]);
      setCurrentPage(data.payload.currentPage);
      setPages(data.payload.pages);
    } catch (error) {
      console.log('error:', error);
    }
  }
  return (
    <div>
      <h1>Walmart - Search products</h1>
      <SearchForm handleSubmit={handleSubmit}/>
      <ProductList products={products}/>
      <Pagination
        productsPerPage={limit}
        pages={pages}
        paginate={handleSubmit}
      />
    </div>
  )
}
