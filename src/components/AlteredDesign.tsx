import { Button } from "@anchor/react-components/dist/lib/components";
// import styles from '@/styles/EventItem.module.css'
import React from 'react';

const ButtonDesign = () => {
  return (
      <>
    <div>
      <Button variant = "filledAlt"  label = "Submit an Idea" iconPosition = "right"/>
    </div>

    </>
  );
}
export default ButtonDesign;


{/* <Button  style={{
      backgroundColor: "#1c78dc",
      paddingBottom:20,
      textAlign:'center',
      color: "#fff",
      
    }}
    variant="contained">Submit an idea</Button>
       </div>
       <div className={styles.rightnext}>
         <Button style={{border: "1px solid black",borderRadius: 1}}><FadeMenu data ="Label " one = "Trending Ideas" two = "Most UpVotes" three = "Most Recent" /></Button>
       </div>
       <div className={styles.rightnext1}>
         <Button style={{border: "1px solid black",borderRadius: 1}}><FadeMenu data ="Idea Status " one = "Trending Ideas" two = "Most UpVotes" three = "Most Recent" /></Button>
       </div>
       <div className={styles.rightnext2}>
         <Button style={{border: "1px solid black",borderRadius: 1}}><FadeMenu data ="Sort By " one = "Trending Ideas" two = "Most UpVotes" three = "Most Recent"  /></Button>
       </div>
       <div className={styles.rightnext3}>
         <TextField id="outlined-basic" label="Search this space" variant="outlined"
          InputProps={{endAdornment:(<InputAdornment position ="start"> 
         <SearchOutlined/></InputAdornment>)}}  style={{border: "1px solid black",borderRadius: 1 }}></TextField> */}