//Осн модуль
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";
//Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'

//Создаем глобальный объект, где будем хранить наши "сущности"
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
}

//Импорт задач
import { copy } from './gulp/tasks/copy.js'; //Сама угадай что делает
import { html } from './gulp/tasks/html.js'  //Следит за главным html
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js'
//import { server } from './gulp/tasks/server.js'
//import { reset } from './gulp/tasks/reset.js'

//Наблюдатель за изменениями
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);

}



//Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))

//Построение сценариев выполнения задач
const dev = gulp.series(mainTasks, watcher); //gulp.parallel(watcher, server);
const deployZip = gulp.series(mainTasks, zip);
const deployFTP = gulp.series(mainTasks, ftp);

//export 
export { svgSprive };
export { deployZip };

//Выполнение сценария по умолчанию
gulp.task('default', dev);


