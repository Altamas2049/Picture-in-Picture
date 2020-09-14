const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Promt to select media stream, pass to video element , then play 
 async function selectMediaStream(){
     try{
         const mediaStream= await navigator.mediaDevices.getDisplayMedia();
         videoElement.srcObject = mediaStream;
         videoElement.onloadedmetadata = () =>{
             videoElement.play();
         }
     }catch(error){
         // catch Error here 
         console.log(" Error found here",error);
     }
 }

 button.addEventListener('click', async()=>{
    // Disable Button
    button.disable=true;
    //start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset  Button 
    button.disable =false;
 });
 //On Load
  selectMediaStream();