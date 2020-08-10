function deleteWorkflowRun() {
  chrome.tabs.executeScript({
    file: 'deleteWorkflowRun.js',
  });
}

document.getElementById('delete').addEventListener('click', deleteWorkflowRun);
