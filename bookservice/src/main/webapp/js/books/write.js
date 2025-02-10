const onAdd = () => {
	const bnameInput = document.querySelector('.bname');
	const bwriterInput = document.querySelector('.bwriter');
	const bpublisherInput = document.querySelector('.bpublisher');
	
	const bname = bnameInput.value;
	const bwriter = bwriterInput.value;
	const bpublisher = bpublisherInput.value;
	
	let obj = {bname : bname, bwriter : bwriter, bpublisher: bpublisher}
	const option = {
			method : 'POST',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify(obj)
		}	
		fetch('/bookservice/book' , option)
			.then(r => r.json())
			.then(data => {
				if(data == true) {
					alert('등록성공'); location.href="book.jsp";
				}else{alert('등록실패');}
			})
			.catch(e => {console.log(e);})
}
