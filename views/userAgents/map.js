function(doc) {
    if(doc.type == 'pageSession') {
        emit(doc.userAgent, 1);
    }
}
