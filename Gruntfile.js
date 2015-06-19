module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            css: ['assets/css'],
        },

       compass: {
         dist: {
            options: {
                sassDir: 'sass',
                cssDir: 'assets/css'
            }
          }
      },
       watch: {
          options: {
            livereload: true,
          },
          root: {
              files: ['index.html']
          },
          css: {
                files: ['sass/*.scss', 'sass/**/*.scss'],
                tasks: ['clean:css', 'compass'],
                options: {
                  livereload: true,
                }
            }
       },

       connect: {
           server: {
               options: {
                   livereload: 1337,
                   port: 8000,
                   hostname: '127.0.0.1',
                   base: '.'
                 }
          }
       }

    });

    grunt.registerTask('default', ['clean', 'compass', 'connect', 'watch']);

};
