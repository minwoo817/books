<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
<div class="col-md-10 mx-auto col-lg-5">
        <form id="signupform" class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
          <h3>도서상세정보</h3>
          <hr/>
          도서번호 : <span class="bno">  </span>
          </div>
          
          <div class="form-floating mb-3">
          도서명 : <span class="bname">  </span>
             </div>
          
          <div class="form-floating mb-3">
          저자 : <span class="bwriter">  </span>
             </div>
          
          <div class="form-floating mb-3">
          출판사 :  <span class="bpublisher">  </span>
          </div>
          
          <div class="form-floating mb-3">
          작성일 :  <span class="bdate">  </span>
          </div>
          
          <div class="form-floating mb-3">
          수정일 : <span class="bupdate">  </span>
          </div>
        
                <button class="w-100 btn btn-lg btn-primary" type="button" onclick="location.href='book.jsp' ">뒤로가기</button>
              <br/><br/>  
          <button class="w-100 btn btn-lg btn-primary" type="button" onclick="location.href='update.jsp'">수정</button>
          <br/><br/>
          <button class="w-100 btn btn-lg btn-primary" type="button" onclick="onDelete() ">삭제</button>
         
        </form>
      </div>
<script src="/bookservice/js/books/view.js" type="text/javascript" ></script>

</body>
</html>