"use strict"
console.log( alert('Спроби опанувати JS продовжуються =) Вимучена формам пошуку із JS-функціоналом) Попередні 2 д/з з відео в домашці Lesson_24'))

// ==== Виконання дз


const txtItem = document.querySelector( '.search__input' );
const txtItemLimit = txtItem.getAttribute( 'maxlength' );
const txtCounter = document.querySelector( '.search__limit span' );
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener( "keyup", txtSetCounter );
txtItem.addEventListener( "keydown", function ( event ) {
	if ( event.repeat ) txtSetCounter();
} );

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
};


const bodyButton = document.querySelector( '.search' );
document.addEventListener( "click", search );
function search(event) {
	if(event.target.closest('.search__button')) {
	   bodyButton.classList.toggle( '_active' );
	};
	if(!event.target.closest('.search')) {
	   bodyButton.classList.remove('_active');
	};
};
document.addEventListener( "keyup", function ( e ) {
	if ( e.code === 'Escape' ) {
		bodyButton.classList.remove('_active');
	}
})



//======== Not me form
/*
const fieldSearch = document.querySelector('.search');

document.addEventListener("click", search);

function search(i) {
	if (i.target.closest('.search__button')) {
		fieldSearch.classList.toggle('_active');
	}
	if (!i.target.closest('.search')) {
		fieldSearch.classList.remove('_active');
	}
}

const fieldLetter = document.querySelector('.search__input');
const fieldLetterLimit = fieldLetter.getAttribute('maxlength');
const letterLimit = document.querySelector('.search__limit span');
letterLimit.innerHTML = fieldLetterLimit;

fieldLetter.addEventListener('keyup', letter);
fieldLetter.addEventListener('keydown', function (event) {
	if (event.repeat) letter();
});

function letter() {
	const letterResult = fieldLetterLimit - fieldLetter.value.length;
	letterLimit.innerHTML = letterResult;
}

document.addEventListener('keyup', function (i) {
	if (i.code === 'Escape') {
		fieldSearch.classList.remove('_active');
	}
} )
*/


// function search ( event ) {
// 	if ( event.target.closest( '.search__block' ) );
// 	bodyButton.classList.toggle( '_active' );
// 	if ( !event.target.closest( '.search__block' ) );
// 	bodyButton.classList.remove( '_active' );
// };

/*
document.activeElement( "click", showSearch )
function showSearch(e) {
	const search = document.querySelector( '.search__button' );
	const searchBlock = document.querySelector( '.search__block' );
	const searchInput = document.querySelector( '.search__line' );
	
	if ( e.type === 'click' ) {
		if ( e.target.closest( '.search__button' ) ) {
			if ( !searchBlock.classList.contains( '_active' ) ) {
				searchBlock.classList.add( '_active' )
			} else if ( searchBlock.classList.contains( '_active' ) ) {
				searchBlock.classList.remove('_active')
			}
		} else if ( !e.target.closest( '.search__block' ) ) {
			searchBlock.classList.remove( '_active' );
		}
	}
}
*/


// JS події
// document.addEventListener('click', showSearch)

// function showSearch(e) {

//    const search = document.querySelector('.search__button');
//    const searchBlock = document.querySelector('.search__block');
//    const searchInput = document.querySelector('.search__line');

//    if (e.type === 'click') {
//       if (e.target.closest('.search__button')) {
//          if (!searchBlock.classList.contains('_active')) {
//             searchBlock.classList.add('_active')
//          } else if (searchBlock.classList.contains('_active')) {
//             searchBlock.classList.remove('_active')
//          }
//       } else if (!e.target.closest('.search__block')) {
//          searchBlock.classList.remove('_active');
//       }
//    }
// }
/*
const bodyMenu = document.querySelector( '.menu' );

document.addEventListener( "click", menu );

function menu(event) {
	if ( event.target.closest( '.menu__button' ) ) {
		menuBody.classlist.toggle( '_active' );
	}
	if ( !event.target.closest( '.menu' ) ) {
		menuBody.classlist.remove( '_active' );
	}
}
*/

/*
const bodyMenu = document.querySelector( '.menu' );
bodyMenu.classList.toggle( '_active' );
console.log(bodyMenu.classList.contains( '_active' ))
// bodyMenu.classList.remove( 'menu' );
*/

// const button = document.querySelector( '.btn' );


/*
function showConsole() {
	console.log( 'Click' );
}
button.onclick = showConsole;
*/
/*
button.onclick = function() {
	console.log( 'Click' );
}
button.onclick = function() {
	console.log( 'Clack' );
}
*/
/*
button.addEventListener( "click", function () {
	console.log( 'Click' );
} );
button.addEventListener( "click", function () {
	console.log( 'Clack' );
} );
*/

/*
function showConsole() {
	console.log( 'Click' );
	button.removeEventListener( "click", showConsole );
}
button.addEventListener( "click", showConsole );
*/

/*
function showConsole ( event ) {
	// Тип події
	// console.log( event.type );
	// Обʼєкт на якому спрацював оброботчик
	// console.log( event.target );
	// Обʼєкт до якого призначений оброботчик
	// console.log( event.currentTarget );
	// координати миші при кліці на кнопку
	// console.log( event.clientX );
	// console.log( event.clientY );

	// Всі деталі події
	// console.log( event );
}
button.addEventListener( "click", showConsole );
*/

/*
const lesson = document.querySelector( '.lesson' );
function showConsole() {
	console.log( 'Ura' );
}
lesson.addEventListener( "click", function ( event ) {
	if ( event.target.closest( '.btn' ) ) {
		showConsole();
	}
} );
*/
// const button = document.querySelector( '.search__button' );
// button.onclick = function () {
// 	console.log( 'Click' );
// }
/*
function showConsole() {
	console.log( 'Click' );
}
button.onclick = showConsole;
*/
/*
button.addEventListener( "click", function ( e ) {
	console.log( 'Click!' );
} );
button.addEventListener( "click", function ( e ) {
	console.log( 'Clack!' );
} );
*/

/*
const button = document.querySelector( '.search__button' );
function showConsole() {
	console.log( 'Click!' );
}
button.addEventListener( "click", showConsole );
*/

/*
function showConsole () {
	console.log( 'Click!' );
	button.removeEventListener( "click", showConsole ); // Використання removeEventListener - знімає прослушку
}
button.addEventListener( "click", showConsole );
*/

/*
const options = {
	"capture": false,
	"once": true, // false
	"passive": false
}
const button = document.querySelector( '.search__button' );
function showConsole() {
	console.log( 'Click' );
}
button.addEventListener( "click", showConsole, {"capture":false, "once": true, "passive": false} );
*/

/*
// Обʼєкт події
const button = document.querySelector( '.search__button' );
function showConsole(event) {
	console.log( event.type );
	// console.log( event.target );
	console.log( event.currentTarget );
	// console.log( event.clientX );
	// console.log( event.clientY );
	// console.log( event );
}
button.addEventListener( "click", showConsole );
*/

/*
const block = document.querySelector( '.block' );
const blockTwo = document.querySelector( '.block__2' );
const blockThree = document.querySelector( '.block__3' );
*/

// Обʼєкт всплиття
/*
block.addEventListener( "click", function ( event ) {
	console.log( 'Клік на Блоці' );
	console.log( event.target );
} );

blockTwo.addEventListener( "click", function ( event ) {
	console.log( 'Клік на Блоці 2 рівня' );
} );
blockThree.addEventListener( "click", function ( event ) {
	console.log( 'Клік на Блоці 3 рівня' );
   // Зупинка всплиття
	event.stopPropagation();
} );
*/

/*
block.addEventListener( "click", function ( event ) {
	console.log( 'Клік на Блоці' );
} );

blockTwo.addEventListener( "click", function ( event ) {
	console.log( 'Клік на Блоці 2 рівня' );
}, { "capture": true } );// Занурення

blockThree.addEventListener( "click", function ( event ) {
	console.log( 'Клік на Блоці 3 рівня' );
   // Зупинка всплиття
	// event.stopPropagation();
} );
*/

// Делегування подій

/*
const lesson = document.querySelector( '.lesson' );
function showConsole () {
	console.log( 'Ура!' );
}
lesson.addEventListener( "click", function ( event ) {
	if ( event.target.closest( '.button' ) ) {
		showConsole();
	}
} );
*/

/*
const menuBody = document.querySelector( '.menu' );
document.addEventListener( "click", menu );
function menu(event) {
	if ( event.target.closest( '.menu__btn' ) ) {
		menuBody.classList.toggle( '_active' );
	}
	if ( !event.target.closest( '.menu' ) ) {
		menuBody.classList.remove( '_active' );
	}
}
*/

// ==== Приклад закриття меню, форми по кліку на будь-яку кнопку (в даному випадку на escape)
/*
document.addEventListener( "keyup", function ( event ) {
	if ( event.code === 'Escape' ) {
		menuBody.classList.remove('_active')
	}
} );
*/



// Відміна стандартних дій браузера
// const link = document.querySelector( '.link' );

/*
link.addEventListener( "click", function ( event ) {
	console.log( 'Наші дії' );
	// Відміна дій браузера (перехід за посиланням)
	event.preventDefault();
} );
*/
// Або через конструкцію onclick
/*
link.onclick = function () {
	console.log( 'Наші дії' );
	return false;
}
*/

// Необовʼязкова орція passive: true для addEventListener
/*
link.addEventListener( "click", function ( event ) {
	console.log( 'Наші дії' );
	event.preventDefault();
}, { "passive": true } );
*/
/*
const button = document.querySelector( '.search__button' );
button.addEventListener( "mousedown", function ( event ) {
	console.log( `Натиснута кнопка ${event.which}` );
} );
button.addEventListener( "click", function ( event ) {
	console.log( 'Натиснута основна кнопка миші' );
} );
button.addEventListener( "contextmenu", function ( event ) {
	console.log( 'Викликано контекстне меню (не основна кнопка меню)' );
} );
*/

// event.which = 1 - Натиснута основна кнопка миші (зазвичай ліва)
// event.which = 2 -  Натиснута середна кнопка миші (колеско)
// event.which = 3 -  Натиснута не основна кнопка миші (зазвичай права)

// ==== Координати миші

/*
const blockForMouse = document.querySelector( '.block-for-mouse' );
blockForMouse.addEventListener( "mousemove", function ( event ) {
	blockForMouse.innerHTML =
		`clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
} );
*/

// ==== Наведення мишею

/*
const blockForMouse = document.querySelector( '.block-for-mouse' );
blockForMouse.addEventListener( "mouseover", function ( event ) {
	blockForMouse.innerHTML = `Курсор над елементом`;
} );
blockForMouse.addEventListener( "mouseout", function ( event ) {
	blockForMouse.innerHTML = `Курсор йде з елементом`;
} );
*/

// ==== подія mouseover/mouseout, relatedTarget

// const blockForMouse = document.querySelector( '.block-for-mouse' );
/*
blockForMouse.addEventListener( "mouseover", function ( event ) {
	console.log( event.target );
	console.log( event.relatedTarget );
} );
blockForMouse.addEventListener( "mouseout", function ( event ) {
	console.log( event.target );
	console.log( event.relatedTarget );
} );
*/
/*
blockForMouse.addEventListener( "mouseover", function ( event ) {
	console.log( `Курсор над елементом` );
	
} );
blockForMouse.addEventListener( "mouseout", function ( event ) {
	console.log( `Курсор йде з елемента` );
} );
*/

// ====   Події mouseenter та mouseleave
/*
const blockBodyMouse = document.querySelector( '.block-for-mouse' );
blockBodyMouse.addEventListener( "mouseenter", function ( event ) {
	console.log( `Курсор над елементом` );
} );
blockForMouse.addEventListener( "mouseleave", function ( event ) {
	console.log( `Курсор йде з елемента` );
} );
*/

// ==== Делегування подій при наведенні мишею

/*
const blockBodyMouse = document.querySelector( '.block-for-mouse' );
blockBodyMouse.addEventListener( "mouseover", function ( event ) {
	let target = event.target.closest( 'span' );
	// перехід не на <span> - ігнорувати
	if ( !target ) return;
	target.style.cssText = `background-color: red;`;
} );
blockBodyMouse.addEventListener( "mouseout", function ( event ) {
	let target = event.target.closest( 'span' );
	// перехід не на <span> - ігнорувати
	if ( !target ) return;
	target.style.cssText = ``;
} );
*/

// ==== Події клавіатури
// ==== event.code та event.key -> деталі

/*
document.addEventListener( "keydown", function ( event ) {
	console.log( `Натиснута клавіша ${event.code} (${event.key})` );
} );
document.addEventListener( "keyup", function ( event ) {
	console.log( `Відпущена клавіша ${event.code} (${event.key})` );
} );
*/

// ==== Відміна дії (наприклад перемикання мови через command+z)

/*
document.addEventListener( "keydown", function ( event ) {
	if ( event.code == 'KeyZ' && ( event.ctrlKey || event.metaKey ) ) {
		console.log( 'Відміна дії!' );
	}
} )

document.addEventListener( "keydown", function ( event ) {
	console.log( `Натиснута клавіша ${event.code}(${event.key})` );
	console.log( event.repeat );
})
*/

// ==== Приклад з textarea та лічильником до нього



// const txtItem = document.querySelector( '.textarea__item' );
// const txtItemLimit = txtItem.getAttribute( 'maxlength' );
// const txtCounter = document.querySelector( '.textarea__counter span' );
// txtCounter.innerHTML = txtItemLimit;

// txtItem.addEventListener( "keyup", txtSetCounter );
// txtItem.addEventListener( "keydown", function ( event ) {
// 	if ( event.repeat ) txtSetCounter();
// } );

// function txtSetCounter() {
// 	const txtCounterResult = txtItemLimit - txtItem.value.length;
// 	txtCounter.innerHTML = txtCounterResult;
// }
