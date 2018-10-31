import {rack} from './rack';

export const clearRack = () => {
  if (confirm('delete all nodes?')) {
    rack.splice(0, rack.length);
  }
}