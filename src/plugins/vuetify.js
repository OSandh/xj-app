import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary:  '#3B3D4E', // blue-grey menu
        secondary:'#A62B2F', // red
        accent:   '#2E2F3D', // darkblue
        error:    '#ff5722',
        warning:  '#e91e63',
        info:     '#6B6B6B', // grey num/text
        success:  '#4caf50'
      },
      dark: {
        primary:  '#3B3D4E', // blue-grey menu
        secondary:'#A62B2F', // red
        accent:   '#2E2F3D', // darkblue
        error:    '#ff5722',
        warning:  '#e91e63',
        info:     '#6B6B6B', // grey num/text
        success:  '#4caf50'
      },
    },
  },
});
