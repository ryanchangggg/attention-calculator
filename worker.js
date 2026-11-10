import {construct} from './engine.js';
self.onmessage=e=>{try{self.postMessage({proof:construct(e.data)})}catch(err){self.postMessage({error:err.message})}};
