function(doc) {
    if(doc.type == 'point' && doc.w && doc.h) {
        emit([doc.w, doc.h], 1);
    }
}
