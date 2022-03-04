import React from 'react';
import { Label } from '@styles/Event.styled';
import { IdeaStatus } from '@styles/Event.styled';
import { SortBy } from '@styles/Event.styled';
import { SearchBar } from '@styles/Event.styled';
import { Select } from "@anchor/react-components/dist/lib/components";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { SearchOutlined } from '@material-ui/icons';
const ShowBlogs = () => {
  return (
    <div>
      <Label>
          
          <Select fit="large" id="selectpicker" onChange={function noRefCheck(){}}options={['All labels','Azure AD','business','clients','End user experience','enterprise','Imaging','Licensing','Networking','Provisioning','Windows']} orientation="vertical" placeholder="Label" variant="default"
/>
</Label>
      
       <IdeaStatus>
       <Select fit="large" id="selectpicker" onChange={function noRefCheck(){}}options={['All labels','Azure AD','business','clients','End user experience','enterprise','Imaging','Licensing','Networking','Provisioning','Windows']} orientation="vertical" placeholder="Idea Status" variant="default"
/>
       </IdeaStatus>
       <SortBy>
       <Select fit="large" id="selectpicker" onChange={function noRefCheck(){}}options={['All labels','Azure AD','business','clients','End user experience','enterprise','Imaging','Licensing','Networking','Provisioning','Windows']} orientation="vertical" placeholder="Sort by" variant="default"
/>
       </SortBy>
       <SearchBar>
         <TextField id="outlined-basic" label="Search this space" variant="outlined"
          InputProps={{endAdornment:(<InputAdornment position ="start"> 
         <SearchOutlined/></InputAdornment>)}}  style={{borderRadius: 1 }}></TextField>
       </SearchBar>
    </div>
  );
}

export default ShowBlogs;
