/*
 * @Author: your name
 * @Date: 2022-12-17 14:42:18
 * @LastEditTime: 2022-12-17 14:56:32
 * @LastEditors: DESKTOP-2OD8ACM
 * @Description: In User Settings Edit
 * @FilePath: \课设\js\login.js
 */
window.onload = function (){
    var item = document.getElementsByClassName("item");
    var it = item[0].getElementsByTagName("div");
 
    var content = document.getElementsByClassName("content");
    var con = content[0].getElementsByTagName("div");
 
    for (let i=0;i<it.length;i++){
        it[i].onclick = function(){
            switch (i){
                case 0:
                    window.location.href='login.html';
                    break;
                case 1:
                    window.location.href='register.html';
                    break;
                default:
                    break;
            }
 
        }
    }
}

function LoginSubmitClick() {
    alert("登录成功！");
    window.location.href='admin.html';
}
function RigsterSubmitClick() {
    alert("注册成功！");
    window.location.href='admin.html';
}