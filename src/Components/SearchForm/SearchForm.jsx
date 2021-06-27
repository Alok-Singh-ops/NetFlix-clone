import React,{useState} from 'react'
import { useHistory } from 'react-router';

const SearchForm = ()=>{
  const [text,setText] = useState('');
  const history = useHistory();

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  const handleSubmit = (e)=>{    
    e.preventDefault();
    history.push({
      pathname: '/search',
      state: {
        search: text
      }
    })
    setText('');
  } 

  return (
      <div className="searchForm">
            <form onSubmit = {handleSubmit}>
              <input type="text" onChange = {handleChange} value = {text} placeholder = "Search Movies..."/>
              <button type = "submit" className = "banner banner-button btn-sm">Search</button>
            </form>
          </div>
  )
}
export default SearchForm
