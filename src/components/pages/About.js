import React from 'react';
import Footer from '../Footer';
import './About.css'; // Import the CSS file for About page styles

function About() {
  return (
    <>
      <div className='about-container'>
        <div className='image-container'>
          <img src='images2/oble.png' alt='oblationart' className='oble' />
        </div>
        <div className='about-content'>
          <h2>
            About UPLB CINTERLABS
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pulvinar condimentum. Nullam semper neque est, rhoncus viverra ipsum faucibus vitae. Aenean dictum orci dui, at eleifend nisi cursus in. Curabitur nisl massa, malesuada ut suscipit quis, accumsan eu odio. Curabitur condimentum erat mollis, eleifend mauris id, volutpat lectus. Vivamus in feugiat sapien. Ut velit mauris, varius a accumsan vel, tempor eu dolor. Duis aliquam ornare ipsum, in dignissim massa pellentesque non. Aenean sollicitudin sit amet libero id imperdiet. Mauris scelerisque nunc sit amet viverra lobortis. Praesent eu tortor et neque ultrices suscipit vitae sit amet turpis. In laoreet finibus erat eu imperdiet. Phasellus sed ullamcorper enim. Suspendisse eget augue gravida, facilisis nisl ut, euismod sapien.
</p>
<p>Phasellus sit amet rhoncus orci. Nam id neque purus. Duis ultricies vestibulum metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In tempus facilisis tortor, et finibus diam lobortis sed. Cras aliquet dui felis, sed blandit neque semper rutrum. Etiam mattis fermentum tortor, sagittis consequat odio vulputate id. Ut ligula lorem, placerat non felis a, ultricies rutrum elit. Pellentesque non purus in metus ullamcorper vulputate non at magna. Donec at ante pretium, vulputate risus sed, interdum velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent et gravida mauris.
</p><p>
Cras efficitur laoreet orci eu fringilla. Fusce sed nisl est. Phasellus tincidunt pretium eros, et dignissim ipsum vehicula eu. In lobortis mi nibh, ut hendrerit nisl pharetra at. Morbi consequat a odio vel dictum. Nunc eu erat sit amet dui commodo cursus at nec dui. Praesent tempus orci a neque pretium porttitor. Aenean eu justo est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur congue porta bibendum. Quisque facilisis accumsan aliquam. Nullam id odio erat.
</p><p>
Mauris ultrices metus porta, consectetur ligula nec, commodo metus. Aenean eget arcu vel ex elementum egestas vitae sed purus. Suspendisse eget nulla ex. Nulla ut odio libero. Quisque risus ligula, dictum a placerat eget, ullamcorper ut nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla tempus pulvinar. Vivamus varius sed lorem in bibendum.
</p><p>
Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin pulvinar lobortis leo et posuere. Phasellus congue condimentum lorem vel finibus. Aenean quis malesuada metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus malesuada sodales ante aliquam euismod. Sed in porta ante, quis maximus magna. Vestibulum egestas consectetur eros. Phasellus efficitur ut dui nec vulputate. Maecenas hendrerit tincidunt ex, eget sagittis mi dapibus a.
          </p>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default About;
