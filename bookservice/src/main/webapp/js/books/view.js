
let bookInfo = null;


const view = () => {
	let bno = new URL(location.href).searchParams.get('bno');
	const option = {method : `GET`}
	fetch(`/bookservice/book/view?bno=${bno}`, option)
		.then(response => response.json())
		.then(data =>{
			console.log( data );
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

const onUpdate = () => {
	let bno = new URL(location.href).searchParams.get('bno');
	location.href = `update.jsp?bno=${bno}`
}


