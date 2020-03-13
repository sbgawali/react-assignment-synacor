import React, { Component } from 'react';

class ProductDetailPage extends Component {
    render() {
        const {product,category,onChangeCallBck} = this.props
        console.log(this.props);
        console.log('detailpage')
        return (
            <React.Fragment>
            <h2 className='listing-page-head'>Product Details</h2>
            <div class="flex-container" >
                <div className='detailPage'>
                    <img  src="https://cdn.auth0.com/blog/react-js/react.png" alt="React JS" width="120" height="100"></img>  
                    <div className='description'>
                        <div><span  className='label'>Id:</span><span>{product.id}</span></div>
                        <div><span  className='label'>Name:</span><span>{product.name}</span></div>
                        <div><span  className='label'>Category:</span><span>{category}</span></div>
                        <div><span  className='label'>Description:</span><span>Sample description</span></div>
                    </div>
                    <button className='bckBtn' onClick={onChangeCallBck}>Back To Listing Page</button>
               </div> 
            </div>
            </React.Fragment>
        );
    }
}

export default ProductDetailPage;