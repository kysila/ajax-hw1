const container = document.querySelector('.container');
const btn = document.querySelector('#btn-ajax');

btn.addEventListener('click', (e) => {
	data();
});

async function data() {
	try {
		const response = await fetch('https://swapi.co/api/films/');
		const obj = await response.json();
		const arr = obj.results;
		renderList(arr);
	} catch (e) {
		console.log(e);
	}
}

function renderList(arr) {
	const content = document.createElement('div');
	arr.forEach(el => {
		const box = document.createElement('div');
		box.innerHTML = `
			<h1>${el.title}</h1>
			<p>${el.episode_id}</p>
			<p>${el.opening_crawl}</p>
			<div class="spinner-border text-primary" role="status">
  			<span class="sr-only">Loading...</span>
			</div>
		`;
		renderName(el.characters, box);
		content.appendChild(box);
	});
	container.innerHTML = '';
	container.appendChild(content);
}

async function dataName(el, node) {
	const res = await fetch(el);
	const name = await res.json();
	const item = document.createElement('div');
	item.innerText = name.name;
	node.appendChild(item);
}

async function renderName(arr, parentNode) {
	const div = document.createElement('div');
	for (let el of arr) {
		await dataName(el, div)
	}
	parentNode.querySelector('.spinner-border').style.display = 'none';
	parentNode.appendChild(div);
}