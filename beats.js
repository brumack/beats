$(document).ready(function() {

    var toneArray = [
   {
     tone: 'audio/BD_uVCFRez_Valve2b.wav'
   },
   {
     tone: 'audio/SD_N2_Z3_QR2_Skis3_V1.wav'
   },
   {
     tone: 'audio/Sqr_DoepherIntell_D2.wav'
   },
   {
     tone: 'audio/Sqr_DoepherIntell_Z1.wav'
   },
   {
     tone: 'audio/Clap_Mclap_Wasp_QR_5_R1.wav'
   },
   {
     tone: 'audio/Conga_GrandPa_Apert_5_4.wav'
   },
   {
     tone: 'audio/Cym_QR2_Neuron_1st.wav'
   },
   {
     tone: 'audio/Fall_FX_Rand_OSc_TL5.wav'
   },
   {
     tone: 'audio/Rise_SpectreVsFilter2.wav'
   },
   {
     tone: 'audio/Sqr_DoepherIntell_Z1.wav'
   },
   {
     tone: 'audio/Sqr_DoepherIntell_Z1.wav'
   },
   {
     tone: 'audio/Sqr_DoepherIntell_Z1.wav'
   }
 ];

   var playtone = function(toneID) {
    var audio = document.createElement("audio");
    audio.src = toneArray[Number(toneID.split('').slice(4).join(''))-1].tone;
    audio.addEventListener("ended", function () {
        document.removeChild(this);
      }, false);
      audio.play();
   };

   $('.beatBtn').click(function() {
     playtone(this.id);
   });

});
