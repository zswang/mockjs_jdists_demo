fis
  .set('project.files', [ // 项目文件
    '**.html'
  ])
  .set('project.ignore', [ // 忽略的文件
    'package.json',
    'node_modules/**',

    '**/_*.*',

    '*-dist/**',

    'mock/**',

    'fis-conf.js',
    'gulpfile.js',

    'sftp-config.json'
  ]);

var media = fis.project.currentMedia();
fis.match("*.html", {
  parser: fis.plugin('jdists', {
    trigger: ['release', media].join()
  }),
});