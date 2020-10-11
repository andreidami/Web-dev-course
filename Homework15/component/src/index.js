import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Avatar from "./avatar.js";

ReactDOM.render(
  <React.StrictMode>
    <Avatar
    author={{pictureUrl:"https://i.pinimg.com/originals/b3/31/38/b33138d7a0f9db18546f5161b5cb88f7.jpg",   
            name:"Antonimus Pius"}}
            text="Animal accusata repudiandae at his, sonet suavitate eos id. Ad partem imperdiet sed, in tritani electram adolescens has. Utroque debitis veritus ad qui, et nec probo autem postulant, nisl iriure at sed. Sed amet verear sapientem ei, ea eum interpretaris concludaturque. Eam ea munere deleniti scaevola, vim et delenit corrumpit, vim errem soluta ex. Eam facer ridens ne, eu mutat choro vivendo vim.
            "
            date="June 9, AD 138" />

    <Avatar 
      author={{pictureUrl:"https://i.pinimg.com/originals/ec/8d/f2/ec8df2595a382c2e7efa774bcedb6058.jpg",
    name:"Marcus Aurelius"}}
    text="Sed ut assentior repudiandae. Eos inermis vulputate id, his ad copiosae scaevola. Nostro denique vix ei, usu in semper dissentias. Cu diam nobis intellegat sit, nam minim voluptua senserit at. Eum delectus fabellas ex. Ius prima incorrupte id, at ius nobis adipisci, quodsi epicurei explicari mel id."
    date="April 22, AD 156"
    />

<Avatar 
      author={{pictureUrl:"https://cdn.britannica.com/70/146770-050-C7B66E4F/Bust-emperor-Roman-Nero.jpg",
    name:"Nero"}}
    text="Admodum copiosae insolens ut est, ut dicta veritus incorrupte sit. Eam eu facete mnesarchum, no eam euismod mediocritatem, vidit utamur offendit id usu. Quis oportere in his. Laoreet accusam et sed."
    date="June 10, AD 59"
    />

  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
