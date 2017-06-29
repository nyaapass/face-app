var $$ = mdui.JQ;

$$('.enroll-confirm-passwd').hide();
$$('.enroll-btn-list').hide();

$$('#log-login-btn').on('click', function(e) {
    var un = $$('#user-name').val(),
        fpw = $$('#first-passwd').val();
    if (un == "" || fpw == "" || $$('#photo').hasClass('no-photo')) {
        mdui.snackbar({
            message: "请输入用户名/密码",
        });
        return;
    } else {
        mdui.snackbar({
            message: "登录成功!",
        });
        // return;
    }
});

$$('#log-enroll-btn').on('click', function(e) {
    $$('.enroll-confirm-passwd').show();
    $$('.login-btn-list').hide();
    $$('.enroll-btn-list').show();
});

$$('#en-enroll-btn').on('click', function(e) {
    var un = $$('#user-name').val(),
        fpw = $$('#first-passwd').val();
    cpw = $$('#confirm-passwd').val();
    if (un == "" || fpw == "" || cpw == "" || $$('#photo').hasClass('no-photo')) {
        mdui.snackbar({
            message: "请输入用户名/密码",
        });
        return;
    } else if (fpw != cpw) {
        mdui.snackbar({
            message: "两次输入的密码不一致",
        });
        return;
    } else {
        mdui.snackbar({
            message: "注册成功!",
        });
        $$('.enroll-confirm-passwd').hide();
        $$('.enroll-btn-list').hide();
        $$('.login-btn-list').show();
    }
});

$$('#en-cancel-btn').on('click', function(e) {
    $$('.enroll-confirm-passwd').hide();
    $$('.enroll-btn-list').hide();
    $$('.login-btn-list').show();
});
