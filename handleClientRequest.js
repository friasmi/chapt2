function handleClientRequest(request) {
    makeDBCall(request.someInfo, function (result) {
        //request corresponds to correct db result because of closure
        request.complete(result);
    });
}