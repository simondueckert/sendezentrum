WA.chat.sendChatMessage('Willkommen im Sendezentrum', 'Sendezentrum');

const menu = WA.ui.registerMenuCommand('menu test',
    {
        callback: () => {
            WA.chat.sendChatMessage('test');
        }
    })

// Some time later, if you want to remove the menu:
menu.remove();