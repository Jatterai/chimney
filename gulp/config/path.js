//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //Путь к папке с рез-том
const srcFolder = `./src` //путь к папке с исходниками

export const path = {
	build: {
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`, // 2. АААААААА ТО ЕСТЬ ЛЮБЫЕ ПАПКИ И ФАЙЛЫ ИЗ СРС СЮДА

	},
	src: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,bmp,webp}`,
		svg: `${srcFolder}/files/**/*.svg`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.pug`,
		files: `${srcFolder}/files/**/*.*`, // 1. "**"- проверка файлов в любых вложенных папках внутри папки files, а "*.*" - нас интереснуют абсолютно любые файлы с любым расширеинем.
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		files: `${srcFolder}/files/**/*.*`, //смотреть за изменениями
		images: `${srcFolder}/img/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}