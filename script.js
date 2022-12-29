// WA.chat.sendChatMessage('Willkommen im Sendezentrum', 'Sendezentrum');

// const myLayerSubscriber =  WA.room.area.onEnter("Lichtschalter").subscribe(() => {
//     //WA.room.showLayer("nacht");
//     WA.state.saveVariable('varnacht', true).catch(e => console.error('Something went wrong while saving variable', e));
//     console.log('Variable "varnacht" set. New value: true');
//   });
  
//   WA.room.area.onLeave("Lichtschalter").subscribe(() => {
//     WA.state.saveVariable('varnacht', false).catch(e => console.error('Something went wrong while saving variable', e));
//    // myLayerSubscriber.unsubscribe();
//   });


WA.state.onVariableChange('varnacht').subscribe((value) => {
    console.log('Variable "varnacht" changed. New value: ', value);
    if (value) {WA.room.showLayer("nacht");} else {WA.room.hideLayer("nacht");}
});

WA.onInit().then(() => {
    let value = WA.state.varnacht;
    if (value) {WA.room.showLayer("nacht");} else {WA.room.hideLayer("nacht");}
    console.log('Current player name: ', WA.player.name);
});