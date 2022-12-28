// WA.chat.sendChatMessage('Willkommen im Sendezentrum', 'Sendezentrum');

const myLayerSubscriber =  WA.room.area.onEnter("Lichtschalter").subscribe(() => {
    WA.room.showLayer("nacht");
    WA.state.saveVariable('nacht', true).catch(e => console.error('Something went wrong while saving variable', e));
  });
  
  WA.room.area.onLeave("Lichtschalter").subscribe(() => {
    WA.state.saveVariable('nacht', false).catch(e => console.error('Something went wrong while saving variable', e));
   // myLayerSubscriber.unsubscribe();
  });


// WA.state.onVariableChange('licht').subscribe((value) => {
//    console.log('Variable "licht" changed. New value: ', value);
//});