import UILabel from './UILabel.vue';

export default {
  title: 'Components/UILabel',
  component: UILabel,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UILabel },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<UILabel :text="text" />',
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: 'Testing UILabel',
};
