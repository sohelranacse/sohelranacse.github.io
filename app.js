$(function () {
  $.getJSON("resume.json", function (data) {
    console.log(data.resume);

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
});
