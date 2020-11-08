textSelect = () => {
    if (window.getSelection){
        selectedText = window.getSelection();
    }
    else if (document.getSelection) {
        selectedText = document.getSelection();
    }
    else if (document.selection) {
        selectedText = document.selection.createRange().text;
    }
    document.getElementById("selectedText").value=selectedText
}