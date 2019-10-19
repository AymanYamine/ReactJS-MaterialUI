import React from 'react';
import './footer.scss';
const Footer = () => {
    const a=null;
return(
    <div>
<main>
    {a?<p>{null}</p>:<p>{null}</p>}
  </main>
<footer class="flex-rw">
  
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">About Nobo</h4></li>
    <li><a  class="generic-anchor footer-list-anchor" itemprop="significantLink">GET TO KNOW US</a></li>
    <li><a  class="generic-anchor footer-list-anchor" itemprop="significantLink">PROMOS</a></li>
    <li><a  class="generic-anchor footer-list-anchor" itemprop="significantLink">BECOME A MEMBRE</a></li>

    <li><a  itemprop="significantLink" class="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>

    <li><a class="generic-anchor footer-list-anchor" itemprop="significantLink">EVENTS</a></li>
  </ul>
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header"></h4></li>


    
  </ul>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header"> Help us</h4></li>
    <li><a  class="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACT</a></li>
    <li><a  class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQ</a></li>
    <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">STORE LOCATOR</a></li>
    <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">NEW USERS</a></li>
    <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
  </ul>
  <section class="footer-social-section flex-rw">
      <span class="footer-social-overlap footer-social-connect">
      NOBO <span class="footer-social-small">experience</span> THE GOOD
      </span>
      
  </section>
  <section class="footer-bottom-section flex-rw">
<div class="footer-bottom-wrapper">   
<i class="fa fa-copyright" role="copyright">
 
</i> 2019  <address class="footer-address" role="company">NOBO</address><span class="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div class="footer-bottom-wrapper">
    <a  class="generic-anchor" rel="nofollow">Terms</a> | <a class="generic-anchor" rel="nofollow">Privacy</a>
      </div>
  </section>
</footer>
    </div>
)

}
export default Footer ;