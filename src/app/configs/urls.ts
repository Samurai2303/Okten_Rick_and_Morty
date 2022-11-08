import {environment} from '../../environments/environment';

let {API} = environment;

let urls = {
  characters: `${API}/character`,
  locations: `${API}/location`,
  episodes: `${API}/episode`
};

export {urls};
