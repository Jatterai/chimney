import replace from 'gulp-replace' //поиск и замена
import plumber from 'gulp-plumber';  //Обработка ошибок
import notify from 'gulp-notify'; //Сообщения и подсказки
import newer from 'gulp-newer'//Проверка обновлений
import ifPlugin from 'gulp-if'; //Условное ветвление;

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	newer: newer,
	if: ifPlugin,
}