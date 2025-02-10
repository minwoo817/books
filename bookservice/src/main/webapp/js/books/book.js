const findall = ( ) => {
	const option = { method : 'GET' }
	fetch('/bookservice/book' , option)
	.then(r => r.json())
	.then(data => {
		const booklist = document.querySelector('.boardlist > tbody')
		let html = ``;
		data.forEach( (book)=>{
			html += `<tr>
						<td> ${book.bno} </td>
						<td> <a href="view.jsp?bno=${ book.bno }">${book.bname}</a> </td>
						<td> ${book.bwriter} </td>
						<td> ${book.bpublisher} </td>
						<td> <button onclick="onDelete(${book.bno})">삭제</button> </td>
						</tr>`
			})
			booklist.innerHTML = html;
	})
	.catch(e => {console.log(e);})
}
findall();

const onDelete = (bno) => {
	
	let result = confirm("정말 삭제 하시겠습니까?")
	if(result == false) {
		return;
	}
	const option = { method : 'DELETE' }
	fetch(`/bookservice/book?bno=${bno}` , option)
		.then(r => r.json())
		.then(data => {
			if(data == true) {alert('삭제성공'); findall();}
			else{alert('삭제실패')}
		})
	.catch(e => {console.log(e);})
}

let bookInfo = null;


const view = (bno) => {
	let bno = new URL(location.href).searchParams.get('bno');
	const option = {method : `GET`}
	fetch(`/bookservice/book?bno=${bno}`, option)
		.then(response => response.json())
		.then(data =>{
			document.querySelector('.bno').innerHTML = `${data.bno}`;
			document.querySelector('.bname').innerHTML = `${data.bname}`;
			document.querySelector('.bwriter').innerHTML = `${data.bwriter}`;
			document.querySelector('.bpublisher').innerHTML = `${data.bpublisher}`;
			document.querySelector('.bdate').innerHTML = `${data.bdate}`;
			document.querySelector('.bupdate').innerHTML = `${data.bupdate}`;
			bookInfo = data;
		})
		.catch(e => {console.log(e)})
}
view();