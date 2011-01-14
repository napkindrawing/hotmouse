function(doc) {
    if(doc.type == 'pageSession') {
        emit(doc.url, 1);
    }
}
