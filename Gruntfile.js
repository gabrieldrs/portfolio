module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      /*
      *
      * CSS/SASS Routines, The first one, sass, compiles the scss files and moves the result to the 'out/target' folder.
      * The second one, cssmin, minifies the result from sass and moves the result to public/css/target.min.css
      *
      * */
      sass: {
        default:{
          options: {
            noCache: true,
            precision: 10
          },
          files: {
            'css/style.css': 'css/style.scss'
          }
        }
      },
      cssmin : {
        default:{
          files: {
            'css/style.min.css': 'css/style.css'
          }
        }
      },
      watch: {
        default: {
          files: 'css/style.scss',
          tasks: ['sass','cssmin'],
          interrupt:true
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass','cssmin']);
    grunt.registerTask('build', ['default']); //Alias
};
