
const view = () => {
	let bno = new URL(location.href).searchParams.get('bno');
	const option = {method : `GET`}
	fetch(`/bookservice/book/view?bno=${bno}`, option)
		.then(response => response.json())
		.then(data =>{
			console.log( data );
			document.querySelector('.bname').value = `${data.bname}`;
			document.querySelector('.bwriter').value = `${data.bwriter}`;
			document.querySelector('.bpublisher').value = `${data.bpublisher}`;

			bookInfo = data;
		})
		.catch(e => {console.log(e)})
}
view();


const onUpdate = () => {
	let bno = new URL(location.href).searchParams.get('bno');
	const bname = document.querySelector('.bname').value;
	const bwriter = document.querySelector('.bwriter').value;
	const bpublisher = document.querySelector('.bpublisher').value;
	const obj = {
		bno : bno, bname : bname, bwriter : bwriter, bpublisher : bpublisher
	}
	const option = {
		method : 'PUT',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify(obj)
	}
	fetch(`/bookservice/book` , option)
		.then(r => r.json())
		.then(data => {
			if(data == true) {alert('수정 완료'); location.href="book.jsp";}
			else{alert('수정 실패')}
		})
	.catch(e => {console.log(e)})
}