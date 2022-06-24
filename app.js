$(function () {
  $.getJSON("resume.json", function (data) {
    // project section
    let pData = "";
    let project = data.resume.project;
    for (let i = 0; i < project.length; i++) {
      const projectD = project[i];

      const projectType = projectD.projectType;
      const projectList = projectD.projectList; // array

      pData += `<li><h6>${projectType}</li>`;

      // console.log(projectList.length);
      pData += "<ul>";
      for (let j = 0; j < projectList.length; j++) {
        const projectData = projectList[j];

        pData += `<li>`;

        const title = projectData.title;
        const url = projectData.url;
        const features = projectData.features; // array
        const technologies = projectData.technology; // array

        pData += `<a href="${url}" target="_blank">${title}</a>`;

        pData += `<ul class="projectDesc">`;
        pData += `<li>Key Features:</li>`;
        pData += `<ul class="experienceProjectList">`;
        for (let n = 0; n < features.length; n++) {
          const feature = features[n];
          pData += `<li>${feature},</li>`;
        }
        pData += "</ul>";

        pData += `<li>Uses Technology:</li>`;
        pData += `<ul class="experienceProjectList">`;
        for (let m = 0; m < technologies.length; m++) {
          const technology = technologies[m];
          pData += `<li>${technology},</li>`;
        }
        pData += "</ul>";

        pData += "</ul>";

        pData += `</li>`;
      }
      pData += "</ul>";
    }
    console.log(pData);
    $(".projectList").html(pData);
  });

  // skills section
  // let skills = data.resume.skills;
  // $(".skillAbout").html(skills.about);

  // let skillItem = "";
  // $.each(skills.skill, function (i, f) {
  //   // $(tblRow).appendTo("#userdata tbody");

  //   skillItem += `<div class="col-md-3">
  //                         <div class="skill-item">
  //                             <div class="skill-info clearfix">
  //                                 <h4 class="float-left mb-3 mt-0">${f.language}</h4>
  //                                 <span class="float-right">${f.languagePercentage}%</span>
  //                             </div>
  //                             <div class="progress">
  //                                 <div class="progress-bar" role="progressbar"
  //                                     aria-valuemin="0"
  //                                     aria-valuemax="100" aria-valuenow="${f.languagePercentage}">
  //                                 </div>
  //                             </div>
  //                             <div class="spacer" data-height="50" style="height: 50px;"></div>
  //                         </div>
  //                     </div>`;

  //   // $(skillItem).appendTo(".skillItem");
  // });
  // // console.log(skillItem);
  // $(".skillItem").html(skillItem);
});
