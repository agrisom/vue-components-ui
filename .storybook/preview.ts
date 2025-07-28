import { setup } from '@storybook/vue3';
import sprite from '/sprite.svg';
import router from './router';
import { alertPinia } from '@/components/UIAlert/UIAlert.pinia';
import './reset.css';
import '@/shared/style/style.scss';

import { vCopyText, vOverflowCopy, vOverflowTitle } from '@/shared/directives/Overflow.directive';
import UIMenuZone from '@/components/UIMenu/UIMenuZone.vue';
import UITooltipZone from '@/components/UITooltip/UITooltipZone.vue';
import UIIconSpriteLoader from '@/components/UIIcon/UIIconSpriteLoader.vue';
import UIAlertZone from '@/components/UIAlert/UIAlertZone.vue';

setup((app) => {
  app.directive('overflow-title', vOverflowTitle);
  app.directive('overflow-copy', vOverflowCopy);
  app.directive('copy-text', vCopyText);
  app.use(router);
  app.use(alertPinia);
});

export const decorators = [
  story => ({
    components: { story, UIMenuZone, UITooltipZone, UIIconSpriteLoader, UIAlertZone },
    directives: { vOverflowCopy, vOverflowTitle },
    setup() {
      return { sprite };
    },
    template: `
      <UIMenuZone />
      <UITooltipZone />
      <UIIconSpriteLoader :sprite="sprite" />
      <UIAlertZone />
      <story />
    `,
  }),
];