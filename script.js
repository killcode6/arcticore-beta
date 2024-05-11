document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('command-input');
  const outputDiv = document.querySelector('.output');

  inputField.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const command = inputField.value.trim();
      inputField.value = '';
      processCommand(command);
    }
  });

  function processCommand(command) {
    const output = document.createElement('p');
    output.textContent = '$ ' + command;
    outputDiv.appendChild(output);

    switch (command) {
      case 'help':
        outputDiv.appendChild(createOutput('List of commands:'));
        outputDiv.appendChild(createOutput('> help: Show list of commands'));
        outputDiv.appendChild(createOutput('> -r: Restart the system'));
        outputDiv.appendChild(createOutput('> version: Shows the version of the terminal'));
        outputDiv.appendChild(createOutput('> date: Display current date'));
        outputDiv.appendChild(createOutput('> clear: Clear the screen'));
        outputDiv.appendChild(createOutput('> lgn.list: Displays commands for direct file login info'));
        break;
      case 'date':
        outputDiv.appendChild(createOutput(new Date().toDateString()));
        break;
      case 'clear':
        outputDiv.innerHTML = '';
        break;
      case 'fetch.lgn-/-admin':
        outputDiv.appendChild(createOutput('@admin run.info'));
        outputDiv.appendChild(createOutput('? username-//admin'));
        outputDiv.appendChild(createOutput('? password-//pencilabcd1'));
        break;
      case 'fetch.lgn-/-test':
        outputDiv.appendChild(createOutput('@test run.info'));
        outputDiv.appendChild(createOutput('? username-//error'));
        outputDiv.appendChild(createOutput('? password-//aboutblank'));
        break;
      case 'fetch.lgn-/-null':
        outputDiv.appendChild(createOutput('@null run.info'));
        outputDiv.appendChild(createOutput('? username-//run.file'));
        outputDiv.appendChild(createOutput('? password-//unknown.exe'));
        break;
      case 'lgn.list':
        outputDiv.appendChild(createOutput('Type into text prompt: fetch.lgn-/-'));
        outputDiv.appendChild(createOutput('> admin: Login Info for @admin'));
        outputDiv.appendChild(createOutput('> test: Login Info for @test'));
        outputDiv.appendChild(createOutput('> null: Login Info for @null'));
        break;
      case '-r':
        location.reload();
        break;
      case 'version':
        outputDiv.appendChild(createOutput('IDX Terminal Operating System v1.3.5'));
        break;
      default:
        outputDiv.appendChild(createOutput('Command not recognized'));
    }
  }

  function createOutput(text) {
    const output = document.createElement('p');
    output.textContent = text;
    return output;
  }
});