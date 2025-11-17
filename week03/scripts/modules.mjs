import byuiCourse from "./course.mjs";
import { populateSelection } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";

setTitle(byuiCourse);
populateSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);