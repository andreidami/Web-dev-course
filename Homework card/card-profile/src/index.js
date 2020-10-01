import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


import * as serviceWorker from './serviceWorker';


const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsH_bKAU3UFji6ta58BLKE8wbroM9VpP_pNQ&usqp=CAU"
const fb = <a href = "https://www.facebook.com/campaign/landing.php?campaign_id=1555708688&extra_1=s%7Cc%7C354150188141%7Ce%7Cfacebook%7C&placement=&creative=354150188141&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1555708688%26adgroupid%3D61934849431%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1011806%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw2dD7BRASEiwAWCtCb4nJPwBCgk8XYSDJSNwXfiIwy5Oe-pohJ_ltG6RoNCkQalNsfgjeTBoCHyQQAvD_BwE">facebook</a>
const inst = <a href = "https://www.instagram.com/accounts/login/?">Instagram</a>

ReactDOM.render(
  <div className = "profile">
    <img src = {imageUrl}/>
    <h1>Clark Mcdog</h1>
    <p className = "prg">Just a good friend of all people</p>
    <h3>K9 University</h3>
    <div>
    <button onClick={fb}><a href = "https://www.facebook.com/campaign/landing.php?campaign_id=1555708688&extra_1=s%7Cc%7C354150188141%7Ce%7Cfacebook%7C&placement=&creative=354150188141&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1555708688%26adgroupid%3D61934849431%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1011806%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw2dD7BRASEiwAWCtCb4nJPwBCgk8XYSDJSNwXfiIwy5Oe-pohJ_ltG6RoNCkQalNsfgjeTBoCHyQQAvD_BwE">facebook</a></button>
    <button onCkick={inst}> <a href = "https://www.instagram.com/accounts/login/?">Instagram</a></button>
    
    <div className = "contact">CONTACT</div>
    

    </div>
  </div>,
  
    
  
  document.getElementById('root')
);


serviceWorker.unregister();
