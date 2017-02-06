module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({

        clean: {
            build: {
                src: 'frontend/compiled/**'
            },
            release: {
                src: 'frontend/compiled/**'
            }
        },
        watch: {
            files: ['**/*.ts', '**/*.tsx'],
            tasks: ['typescript']
        },
        webpack: {
            dev: {
                entry: "./frontend/compiled/index.js",
                output: {
                    path: "wwwroot/js",
                    filename: "bundle.js"
                },
                externals: {
                    "jquery": "jQuery",
                    "react": "React",
                    "react-dom": "ReactDOM"
                }
            }
        }

    });

    grunt.registerTask('default', ['webpack:dev']);
}