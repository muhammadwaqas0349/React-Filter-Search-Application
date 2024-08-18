import { useEffect, useState } from 'react'
import './App.css'

const items = [
  {
      name: 'Prada',
      category: 'Bags',
  },
  {
      name: 'Gucci',
      category: 'Bags',
  },
  {
      name: 'Guess',
      category: 'Bags',
  },
  {
      name: 'Rolex',
      category: 'Watches',
  },
  {
      name: 'Timex',
      category: 'Watches',
  },
  {
      name: 'Nike',
      category: 'Sports',
  },
  {
      name: 'Adidas',
      category: 'Sports',
  },
  {
      name: 'Fila',
      category: 'Sports',
  },
  {
      name: 'Ray Ban',
      category: 'Sunglasses',
  },
  {
      name: 'Aldo',
      category: 'Sunglasses',
  },
  {
      name: 'Polaroid',
      category: 'Sunglasses',
  },
];
const filters = ["Bags", "Watches", "Sports", "Sunglesses"]; 
function App() {
  const [filteredData, setFilteredData] = useState(items); 
  const [activeFilters, setActiveFilters] = useState([]);
  
  const handleClick = (e) => {
    const category = e.target.id; 

    if(activeFilters.includes(category)){
      setActiveFilters(activeFilters.filter( 
        (item) => item !== category)); 
    }
    else{
      setActiveFilters([...activeFilters, category]);
    }
    
  }
  console.log(activeFilters);

  const filteredProducts = () => {
    if(activeFilters.length){
      setFilteredData(items.filter( 
        (item) => activeFilters.includes(item.category)));
    }
    else{
      setFilteredData(items); 
    }

  }

  useEffect( () => {
    filteredProducts();
  }, [activeFilters])
  
  

  return (
    <>
    <div className="app">
      <div className="filters" onClick={handleClick}>
        {filters.map( (item, index) => (
          <button className={activeFilters.includes(item) ? "selected" : ""}
          key={index} id={item}
          >{item}</button>
        ))}
      </div>

      <div className="product-list">
      {filteredData.map( (item, index) => (
          <div className='item' key={index}>
            <p>{item.name}</p>
            <p className='category'>{item.category}</p>
          </div>
        ))}
      </div>
      
    </div>
      
    </>
  )
}

export default App
