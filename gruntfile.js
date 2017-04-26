module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/js_dist/script.min.js'
      },
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/css_dist/style.min.css'
      }
    },
    uglify: {
      dist: {
        src: ['js/js_dist/script.min.js'],
        dest: 'js/js_dist/script.min.js'
      }
    },
    cssmin: {
      dist: {
        src: ['css/css_dist/style.min.css'],
        dest: 'css/css_dist/style.min.css'
      }
     }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);


};