
var unixFormat = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#displayDateTime").text(unixFormat);

var pendingDeleteElement = null;

// create a timer that updates the time every second
setInterval(function () {
    var unixFormat = moment().format("MMM Do, YYYY, hh:mm:ss");
    $("#displayDateTime").text(unixFormat);
}, 1000);

function onAddProject() {

    // Close the modal
    $("#newProjectModal").modal('toggle');

    // Get the project name
    var projectName = $("#project-name").val();

    // Get the project type
    var projectType = $("#project-type").val();

    // Get the project date
    var projectDate = $("#project-date").val();

    // Get the project hours
    var projectHours = $("#project-hours").val();

    var newProject = {
        name: projectName,
        type: projectType,
        date: projectDate,
        hours: projectHours
    };

    // Add the new project to the page
    createNewProject(newProject);

    // Clear the form so it can be used again
    $("#project-name").val('');
    $("#project-type").val('');
    $("#project-date").val('');
    $("#project-hours").val('');
}

function createNewProject(project) {

    // Create the new project listing
    var newProject = $("<div class='row hover'>");

    var newProjectName = $("<div>");
    newProjectName.addClass("col-1");
    newProjectName.text(project.name);
    newProject.append(newProjectName);

    var newProjectType = $("<div>");
    newProjectType.addClass("col-1");
    newProjectType.text(project.type);
    newProject.append(newProjectType);

    var newProjectHours = $("<div>");
    newProjectHours.addClass("col-2");
    newProjectHours.text(project.hours);
    newProject.append(newProjectHours);

    var newProjectDate = $("<div>");
    newProjectDate.addClass("col-1");
    newProjectDate.text(project.date);
    newProject.append(newProjectDate);

    var newProjectDueDate = $("<div>");
    newProjectDueDate.addClass("col-2");
    newProjectDueDate.text(project.date);
    newProject.append(newProjectDueDate);

    var newProjectEarnings = $("<div>");
    newProjectEarnings.addClass("col-2");
    newProjectEarnings.text(project.hours);
    newProject.append(newProjectEarnings);

    var newProjectActions = $("<i>");
    newProjectActions.addClass("fa-solid fa-delete-left");
    newProjectActions.on("click", onDeleteProject);
    newProject.append(newProjectActions);

    // Add the new project to the page
    $("#projects").append(newProject);
}

function onDeleteProject(e) {
    pendingDeleteElement = e.target;

    $("#deleteProjectModal").modal('show');
}

function onConfirmDeleteProject() {

    $("#deleteProjectModal").modal('toggle');

    // Get the project listing
    var project = $(pendingDeleteElement).parent();

    // Remove the project listing
    project.remove();

    // Clear the pending delete element
    pendingDeleteElement = null;
}

$("#project-date").datepicker();
$("#projects").sortable();

$("#add-project").click(onAddProject);
$("#confirm-Delete").click(onConfirmDeleteProject);
