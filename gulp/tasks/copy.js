export const copy = () => {
	return app.gulp.src(app.path.src.files) //Вроде как это глобальная переменная, которая получаем доступ к файлам и папкам.
		.pipe(app.gulp.dest(app.path.build.files)) //А этот метод переносит файлы в папку, которую мы указали в путях!
}