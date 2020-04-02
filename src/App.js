
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import React, { Component } from 'react';
import ProductList from './ProductList';
import categories from './data/categories';
import products from './data/products';
import ProductDetailPage from './ProductDetailPage';

class App extends Component {
  componentDidMount(){
    fetch('https://api.covid19india.org/state_district_wise.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  }
  constructor(){
    
    super()
    this.state={
      data:[],//Object.values(data).shift().lessons,
      categories:Object.values(categories).shift().categories,
      products:Object.values(products).shift().products,
      filteredCatId:1,
      showdetailPage:null
    };
    this.searchCourse=this.searchCourse.bind(this); 
    this.showdetailPage=this.showdetailPage.bind(this);
    this.showListingPage=this.showListingPage.bind(this);   
  }
  searchCourse(searchVal){    
    if(searchVal){      
        this.setState({filteredCatId:parseInt(searchVal)});     
    }
  }
  showdetailPage(id){ 
    if(id){     
        this.setState({showdetailPageId:id});      
    }
  }
  showListingPage(){       
      this.setState({showdetailPageId:''});      
  }
  render() { 
    const {products,categories,filteredCatId} = this.state
    let pageData = (<div><SearchBar categories={this.state.categories} filteredCatId={this.state.filteredCatId} onChangeCallBck={this.searchCourse}/>
                  <Container >           
                    <ProductList products={this.state.products} filteredCatId={this.state.filteredCatId} onChangeCallBck={this.showdetailPage}/>
                  </Container></div>);
    if(this.state.showdetailPageId){
      let categoryName ='';
      categoryName = this.state.categories.filter((e)=>e.id==filteredCatId).shift().name
      let productDetailData =this.state.products.filter((e)=>e.id==this.state.showdetailPageId).shift()
      pageData = <ProductDetailPage product={productDetailData} category={categoryName} onChangeCallBck={this.showListingPage}/>
    }

  
    return (
      <React.Fragment>
        <Container >
          {pageData}
        </Container >
     </React.Fragment>
    );
  }
}

export default App;
