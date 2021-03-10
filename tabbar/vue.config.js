
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                // @ 已经配置了 对应 src
                'assets':'@/assets',
                'components':'@/components',
                'views':'@/views',
            }
        }
    }
}