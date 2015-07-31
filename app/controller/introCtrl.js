/*
    介绍页
*/
define(['directive/holderDirective', 'service/initService'], function() {
    return ['$scope', '$state', 'initService', function($scope, $state, initService) {
        // 加载样式
        initService.loadCss();
        // 加载脚本
        initService.loadJs();
    }];
});