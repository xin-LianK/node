const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa'
    })
});

router.get('/string', (ctx, next) => {
    ctx.body = 'Koa string';
});

router.get('/json', (ctx, next) => {
    ctx.body = {
        title: 'koa title'
    }
});

module.exports = router;