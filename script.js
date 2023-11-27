document.getElementById("login-form").addEventListener("submit", function(event) {
event.preventDefault(); // 폼 제출 방지
  
// 폼에서 값 가져오기
 var id = document.getElementById("id").value;
var password = document.getElementById("password").value;
  
// 아이디와 비밀번호가 올바른지 확인 하기
if (id === "admin" && password === "password") {
document.getElementById("login-status").textContent = "로그인 성공!";
setTimeout(function() {
window.location.href = "index.html";
}, 1000); // 1초 후에 리디렉션
} else {
document.getElementById("login-status").textContent = "아이디 혹은 비밀번호를 다시 확인해주세요.";
}
});
