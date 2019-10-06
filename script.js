// const container = document.querySelector('.container');
// const btn = document.querySelector('#btn-xml');
// const req = new XMLHttpRequest();
//
// req.onreadystatechange = () => {
// 	if (req.readyState === 4 && req.status === 200) {
// 		let res = req.response;
// 		let obj = JSON.parse(res);
// 		renderList(obj.results);
// 	}
// };
//
// btn.addEventListener('click', (e) => {
// 	req.open('GET', 'https://swapi.co/api/films/');
// 	req.send();
// });
//
// function renderList(list) {
// 	const content = document.createElement('div');
//
// 	list.forEach((el) => {
// 		const listItem = document.createElement('div');
// 		listItem.innerHTML = `
// 			<h3>${el.title}</h3>
// 			<p>${el.episode_id}</p>
// 			<p>${el.opening_crawl}</p>
// 		`;
// 		content.appendChild(listItem);
// 		console.log(el.characters);
// 		renderName(el.characters);
// 	});
// 	container.innerText = '';
// 	container.appendChild(content);
// }
//
// function renderName(arr) {
// 	const req = new XMLHttpRequest();
// 	arr.forEach((el) => {
// 		req.open('GET', el);
// 		req.send();
// 		debugger;
// 		loadContent(req).then(value=> console.log(value));
// 	})
// }
//
// function loadContent(src) {
// 	return new Promise(resolve => {
// 		if (src.readyState === 200) {
// 			resolve('test');
// 		}
// 	})
// }
