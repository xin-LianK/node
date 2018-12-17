const koaRouter = require('koa-router');
const router = new koaRouter();

router.prefix('/users');

router.get('/', (ctx, next) => {
    ctx.body = 'this is a users response!';
})

router.get('/bar', (ctx, next) => {
    ctx.body = 'this is a users/bar response'
});

module.exports = router;