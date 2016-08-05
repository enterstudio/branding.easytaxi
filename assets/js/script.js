var clipboard = new Clipboard('.clipb', {
// SelectText('sharecode');
});

clipboard.on('success', function(e) {

    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    showTooltip(e.trigger, 'Copiado!');
    e.clearSelection();
});

clipboard.on('error', function(e) {
    showTooltip(e.trigger, fallbackMessage(e.action));
});

var bts = document.querySelectorAll('.clipb');
for (var i = 0; i < bts.length; i++) {
    bts[i].addEventListener('mouseleave', function(e) {
        e.currentTarget.setAttribute('class', 'clipb');
        e.currentTarget.removeAttribute('aria-label');
    });
    bts[i].addEventListener('mouseover', function(e) {
        // SelectText('sharecode');
    });
}

function showTooltip(elem, msg) {
    elem.setAttribute('class', 'clipb tooltipped tooltipped-s');
    elem.setAttribute('aria-label', msg);
}

function fallbackMessage(action) {
    var actionMsg = '';
    var actionKey = (action === 'cut' ? 'X' : 'C');
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'No support :(';
    } else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    } else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }
    return actionMsg;
}

function SelectText(element) { 
    var doc = document,
        text = doc.getElementById(element),
        range, selection; 
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();  
        range.moveToElementText(text);  
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();  
        range = document.createRange();  
        range.selectNodeContents(text);  
        selection.removeAllRanges();  
        selection.addRange(range);
    }
}

// $(function() { 
//     $('#sharecode').mouseover(function() {
//         SelectText('sharecode');
//         $('#sharecode').click();
//     });
// });

