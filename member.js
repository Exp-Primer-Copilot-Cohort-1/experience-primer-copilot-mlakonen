function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsList = document.getElementById("memberSkillsList");
    var memberSkillsListItems = document.getElementById("memberSkillsList").getElementsByTagName("li");
    var memberSkillsListItemsLength = memberSkillsListItems.length;

    memberSkills.style.display = "block";
    memberSkillsList.style.display = "block";

    for (var i = 0; i < memberSkillsListItemsLength; i++) {
        memberSkillsListItems[i].style.display = "block";
    }

    member.style.display = "none";
}