import { Preview } from '@storybook/vue3';
import sprite from '/sprite.svg';

const preview: Preview = {
  decorators: [
    (story) => ({
      components: { story },
      setup() {
        return { sprite };
      },
      template: `
        <div class="svgsprites" style="display: none">
          <iframe :src="sprite" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
        </div>
        <story />
      `,
    })
  ],
};

export default preview;