$(function(){
    $('#login-form').on('submit', function () {
        event.preventDefault() //阻止form表单默认提交
    })
    $('#login').on('click',function(){
        var email = $('#username').val();
        var password = $('#password').val();
        var data = {
            "email":email,
            "password":password
        }
        console.log(data);
        $.ajax({
            url:'/account/login',
            method:'post',
            data:data,
            success:function(res){
                console.log(res);
            },
            error:function(err){
                console.log(err);
            }
        })
    });
    $('#register').on('click', function () {
        var email = $('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();
        var data = {
            "username":username,
            "email": email,
            "password": password
        }
        console.log(data);
        $.ajax({
            url: '/account/register',
            method: 'post',
            data: data,
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            }
        })
    });
})