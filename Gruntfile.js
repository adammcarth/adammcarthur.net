module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    concat: {
      js: {
        // the files to concatenate
        src: ["./assets/js/jquery.easing.1.3.js", "assets/js/jquery.fitvids.js", "assets/js/masonry.pkgd.min.js", "assets/js/index.js", "assets/js/prism.js"],
        // the location of the resulting JS file
        dest: "./assets/js/compiled/compiled.js"
      },

      css: {
        // the files to concatenate
        src: ["./assets/css/style.css", "assets/css/post.css", "assets/css/prism.css"],
        // the location of the resulting CSS file
        dest: "./assets/css/compiled/compiled.css"
      }
    },

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: "// Last compiled on <%= grunt.template.today('dd-mm-yyyy') %>\n"
      },

      dist: {
        files: {
          "./assets/js/compiled/compiled.min.js": ["<%= concat.js.dest %>"]
        }
      }
    },

    cssmin: {
      dist: {
        files: [{
          src: ["./assets/css/compiled/compiled.css"],
          dest: "./assets/css/compiled/compiled.min.css"
        }]
      }
    }
  });

  // Load the tasks
  grunt.registerTask("default", ["concat", "uglify", "cssmin"]);
};