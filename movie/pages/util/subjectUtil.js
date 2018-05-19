function processSubject(subject) {
  var title = subject.title;
  var casts = subject.casts;
  var directors = subject.directors;
  var castsStr = "";
  var directorsStr = "";
  for (var index in casts) {
    castsStr = castsStr + casts[index].name + "/"
  }
  if (castsStr != "") {
    castsStr = castsStr.substring(0, castsStr.length - 1)
  }
  for (var index in directors) {
    directorsStr = directorsStr + directors[index].name + "/"
  }
  if (directorsStr != "") {
    directorsStr = directorsStr.substring(0, directorsStr.length - 1)
  }
  subject.cast = castsStr;
  subject.dir = directorsStr;
}
function processSubjects(subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject);
  }
}
module.exports = {
  processSubjects:processSubjects,
  processSubject:processSubject
}