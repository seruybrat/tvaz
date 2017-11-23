module.exports = function (grunt) {

    grunt.initConfig({

         watch: {
            files: ['scss/**/*.scss'],
            tasks: ['sass'],
        },

        browserSync: {
            bsFiles: {
                src : [
                        'css/*.css',
                        '*.html',
                        'scripts/*.js',
                    ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss',
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};