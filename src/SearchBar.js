
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default class SearchBar extends Component{
  constructor(){
    
    super()
    this.state={      
      selectedValue:1
    };
    
  }
  render ()
  {
    let onChange = (e,val)=>{      
      this.props.onChangeCallBck(e.target.value ? e.target.value : 1)
    };
    const{ categories,filteredCatId } = this.props;  
    
    return (    
      <div className='searchbar'>   
        <h2 className='listing-page-head'>Product Listing Page</h2>
        <span className='cat-label'>Select Category</span>
        <Select
          native
          value={filteredCatId}
          style={{width:200,marginLeft:20}}
          onChange={onChange}
          onSelect={onChange}
          inputProps={{
            name: 'name',
            id: 'id',
          }}
        >
          {categories.map((cat)=><option key={cat.id} value={cat.id}>{cat.name}</option>)}        
          
        </Select>
      
      </div>    
      
    );
  }
}