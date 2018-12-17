const router = require('koa-router')();
const User = require('../models/user');

router.prefix('/account');

router.get('/login', async (ctx, next) => {
    await ctx.render('login', {
        title: '登录'
    });
});
router.post('/login', async (ctx, next) => {
    const data = ctx.request.body;
    let queryres = await User.queryEmail(data.email);
    console.log(queryres);
    if(queryres){
        if(queryres[0].password === data.password){
            ctx.body = {
                'code':1,
                'data': queryres[0],
                'msg':'登录成功'
            }
        }else{
            ctx.body = {
                'code': 0,
                'data': {},
                'mesg': '密码错误'
            }
        }
    }else{
        ctx.body = {
            'code': 0,
            'data': {},
            'mesg': '没有该用户，去注册吧'
        }
    }
})

router.get('/register', async (ctx, next) => {
    await ctx.render('register', {
        title: '注册'
    });
});
router.post('/register', async (ctx, next) => {
    console.log('...')
    const data = ctx.request.body;
    let queryres = await User.queryEmail(data.email);
    if(queryres){
        ctx.body = {
            'code': 0,
            'data': {},
            'mesg': '该邮箱已经存在哦'
        }
    }else{
        await User.save(data)
        ctx.body = {
            'code': 1,
            'data': {},
            'mesg': '保存成功'
        }
    }
});

module.exports = router;