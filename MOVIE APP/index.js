//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]' \


// const searchVedio = function (){

// }

//there are two ways to handling the data

//1.then .catch
//2...async await

//is async await way of amking api call
//is asynk await a way of handling a promiss




const searchVedios = async () => {
    

    try{
    const API_KEY = 'AIzaSyAFGHSMxlJFrG6p5F5x5_sJ4zJMr0BhjKU';

    let search_term = document.getElementById('search_term').value;





  let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search_term}&key=${API_KEY}`);



  let data = await response.json();


  let actual_data = data.items;
    appendVedios(actual_data);

  
 }catch(err){
  console.log('err:' , err);
 }

};

const container = document.getElementById('container');

const appendVedios = (data) => {
    container.innerHTML = null;
    data.forEach(({ snippet , id : {videoId} }) => {

        let div = document.createElement('div');
        let p_title = document.createElement('P');
        p_title.innerText = snippet.title 


        let p_channel_name = document.createElement('p');
        p_channel_name.innerText = snippet.channelTitle;

        let thumbnail = document.createElement('img');
        thumbnail.src = snippet.thumbnails.high.url;

        div.append(thumbnail, p_title, p_channel_name);

        //add event handler to this div

        //transfer data from index.html to video.html

        //data = the video that user clicked (snippet , video)


        div.onclick = () => {

            let data = {
                snippet,
                videoId,
            };




            data = JSON.stringify(data);

        localStorage.setItem('clicked_video' , data);

        window.location.href = '/video.html';


        };

        




        container.append(div);

    });
};

