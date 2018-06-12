const inputEl = document.createElement('input');
const outputEl = document.createElement('input');

inputEl.type = outputEl.type = 'file';
inputEl.multiple = true;
outputEl.nwdirectory = true;

/* global nw */
export default {
    nw,
    win: nw.Window.get(),
    inputEl,
    outputEl
}