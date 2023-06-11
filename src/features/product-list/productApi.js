
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    const response=await fetch("http://localhost:8080/products")
    const data= await response.json()
    resolve({data})
  }
    
  );
}
export function fetchProductsByFilters(filter,sort) {
  let queryString=''
  for(let key in filter){
    const categoruValues=filter[key]
    if(categoruValues.length){
      const lastCategoryValue=categoruValues[categoruValues.length-1]
      queryString+=`${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString+=`${key}=${sort[key]}&`
  }
  return new Promise(async(resolve) =>{
    const response=await fetch("http://localhost:8080/products/?"+queryString)
    const data= await response.json()
    resolve({data})
  }
    
  );
}
