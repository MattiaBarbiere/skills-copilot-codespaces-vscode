function selectMember() {
    var member = document.getElementById('member');
    var memberName = member.options[member.selectedIndex].text;
    var memberValue = member.options[member.selectedIndex].value;
    var memberNameValue = memberName + " (" + memberValue + ")";
    document.getElementById('memberName').value = memberNameValue;
    document.getElementById('memberValue').value = memberValue;
}