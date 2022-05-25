(function () {
    if ((typeof cocosAnalytics) !== 'undefined'){
        var initArgs = {
            appID: '649769247',
            storeID: 'H5',
            engine: 'cocos',
            callNumber: ''
        };
        if (!initArgs.appID || !initArgs.storeID) return console.error('Please set the appID of Cocos Analytics in the editor. If you publish on Android or iOS, please select the corresponding channel.');
        cocosAnalytics.init(initArgs);
    }
})();