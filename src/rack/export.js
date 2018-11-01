import {rack} from './rack';
import { copyTextToClipboard } from '../util/copy-to-clipboard';

export const exportRack = () => {
  const str = JSON.stringify(rack.map(m => ({
    ...m,
    module: m.moduleName
  })));
  copyTextToClipboard(str);
  alert('Copied to clipboard');
};
