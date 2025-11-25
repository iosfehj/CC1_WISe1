console.log("Hallo");
            
    function handleTouch12() {

                // diese Funktion wird aufgerufen, wenn GIPO Nummer 12 berührt wurde
           console.log("Touch 12 erkannt");
            let soundzwei = new Audio('Kick.mp3').play(); }

    function handleTouch13() {

                // diese Funktion wird aufgerufen, wenn GIPO Nummer 12 berührt wurde
           console.log("Touch 13 erkannt");
            let soundzwei = new Audio('Snare.mp3').play(); }

    function handleTouch27() {

                // diese Funktion wird aufgerufen, wenn GIPO Nummer 12 berührt wurde
           console.log("Touch 27 erkannt");
            let soundzwei = new Audio('Tambourin.mp3').play(); }

    function handleTouch32() {

                // diese Funktion wird aufgerufen, wenn GIPO Nummer 12 berührt wurde
           console.log("Touch 32 erkannt");
            let soundzwei = new Audio('Glocke.mp3').play(); }
  


                


    // document.getElementById('pads').addEventListener('click', e => {
    //   const pad = e.target.closest('.pad');
    //   if (!pad) return;
    //   pad.animate([{transform:'scale(.98)'},{transform:'scale(1)'}], {duration:120});
    //   console.log('Play', pad.textContent.trim());
    //   // attach audio playback here if needed
    // });