//what is the goal of here
//plays this video


const showClickedVideo = () => {
    let data = localStorage.getItem('clicked_video')

    let {videoId} = JSON.parse(data);
    


    //embedding a video using iframe html element


    let iframe = document.createElement('iframe');

        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

        iframe.width = '100%'
        iframe.height = '100%'

        iframe.setAttribute('allowfullscreen' , true);

        //if you want to play a video automatic then fiest of all you should mute that viedo....
        iframe.setAttribute('autoplay' , true);

        let video_div = document.getElementById('video_details');
        video_div.append(iframe);
};