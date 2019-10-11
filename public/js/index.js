function createTag(text, tag, parentId, prop, counter) {
    let drawTxt = document.createTextNode(text);
    let drawTag = document.createElement(tag);
    drawTag.id = prop + counter;
    document.getElementById(parentId).appendChild(drawTag);
    drawTag.appendChild(drawTxt);
}
axios.get('/data').then(function (response) {
    var counter = 0;
    for(let i = 0; i<response.data['education'].length; i++) {
        document.getElementById('education').innerHTML += '<h5>' + response.data['education'][i]['school'] + '</h5>';
        document.getElementById('education').innerHTML +=  '<p>' + response.data['education'][i]['programme'] + '</p>'
            + response.data['education'][i]['startdate'] + ' | ' + response.data['education'][i]['enddate'] + '</p>' + '<br>';
        //createTag(response.data['language'][i][prop], 'p', 'lang', prop, i);
    }
    /*for( let prop in response.data['education'][0] ){
        createTag(response.data['education'][0][prop], 'p','education', prop, counter);
    }*/
    counter = 0;
    for(let i = 0; i< response.data['experience'].length; i++) {
        for (let prop in response.data['experience'][i]){

            if( !Array.isArray(response.data['experience'][i][prop])){

                if(counter === 0) {
                    /*let drawTxt = document.createTextNode(response.data['practicalexperience'][i][prop]);
                     let drawP = document.createElement('h5');
                     drawP.id = prop + counter;
                     document.getElementById('experience').appendChild(drawP);
                     drawP.appendChild(drawTxt);*/
                    //console.log(response.data['practicalexperience'][i][prop]);
                    createTag( response.data['experience'][i][prop], 'h5','experience', prop, i);
                }
                else if(counter === 1) {
                    let str = response.data['experience'][i]['company'] + ' | ' + response.data['experience'][i]['location'] + ' | '
                        + response.data['experience'][i]['expstartdate'] + ' - ' + response.data['experience'][i]['expenddate'];
                    createTag(str, 'p', 'experience', prop, i);
                }
                else if(counter === 2){
                    /*let drawTxt = document.createTextNode(prop + ': ' + response.data['practicalexperience'][i][prop]);
                    let drawP = document.createElement('p');
                    drawP.id = prop + counter;
                    document.getElementById('experience').appendChild(drawP);
                    drawP.appendChild(drawTxt);*/
                    createTag(response.data['experience'][i]['role'], 'p','experience', prop, i);
                }
                counter++;

            } else {
                let tasks =  response.data['experience'][i][prop][0];
                for(let t in tasks) {
                    /*let drawTxt = document.createTextNode(tasks[t])
                    let drawLi = document.createElement('li');
                    drawLi.id = t + counter;
                    document.getElementById('experience').appendChild(drawLi);
                    drawLi.appendChild(drawTxt);*/
                    createTag(tasks[t], 'li','experience', t, i);
                }
            }
        }
        document.getElementById('experience').appendChild(document.createElement('br'));
        counter = 0;
    }
    document.getElementById('name').innerHTML = response.data['name'] + ' ' + response.data['lastname'];
    document.getElementById('profile').innerHTML = response.data['profile'];
    document.getElementById('phone').innerHTML = response.data['contact'][0]['phone'];
    document.getElementById('email').innerHTML = response.data['contact'][0]['mail'];
    document.getElementById('address').innerHTML = response.data['address'][0]['street'] +
        ', ' + response.data['address'][0]['streetnumber'] +
        ', ' + response.data['address'][0]['city'];
    document.getElementById('linkedin').innerHTML = response.data['contact'][0]['linkedin'];
    //document.getElementById('stackoverflow').innerHTML = response.data['contact'][0]['stackoverflow'];
    document.getElementById('github').innerHTML = response.data['contact'][0]['git'];

    /*for(let i = 0; i<response.data['skills'].length; i++) {
        for( let prop in response.data['skills'][i] ){
            console.log(response.data['skills'][i][prop]);
            console.log(prop);
            createTag(response.data['skills'][i][prop], 'p', 'skills', prop, i);
        }
    }*/

    //document.getElementById('cpp').innerHTML = response.data['skills'][0]['skillname'];
    document.getElementById('java').innerHTML = response.data['skills'][1]['skillname'];
    document.getElementById('ruby').innerHTML = response.data['skills'][2]['skillname'];
    document.getElementById('angular').innerHTML = response.data['skills'][3]['skillname'];
    document.getElementById('node').innerHTML = response.data['skills'][4]['skillname'];
    //document.getElementById('linux').innerHTML = response.data['skills'][5]['skillname'];

    for(let i = 0; i<response.data['language'].length; i++) {
        document.getElementById('bu').innerHTML += response.data['language'][i]['language'] + ' | ' + response.data['language'][i]['spoken'] + '</br>'
            //createTag(response.data['language'][i][prop], 'p', 'lang', prop, i);
    }


    // experience
    //console.log(response.data);
    //document.getElementById('namn').innerHTML = response.data['name'];
})
