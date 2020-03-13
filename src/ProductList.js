import React, {Component} from 'react';
import Box from '@material-ui/core/Box';

export default class CategoryList extends Component{    
    render(){
        const{ products,filteredCatId} = this.props;
        console.log(filteredCatId);
        let handleClick = (id)=>{      
            this.props.onChangeCallBck(id ? id : 1)
          };
        return(<div class="flex-container" >  
                    {products.filter((e)=>e.categoryId==filteredCatId).map((product, index) => (
                         <div onClick={() => handleClick(product.id)}>
                        
                            <img className='listImage' src="https://cdn.auth0.com/blog/react-js/react.png" alt="React JS" width="120" height="100"></img>
                            <h4>{product.name}</h4>
                        </div>
                    ))}         
            </div>);
    }
}