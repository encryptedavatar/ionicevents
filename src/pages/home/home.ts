import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import moment from 'moment';

/* import { Http } from '@angular/http'; */
import 'rxjs/add/operator/map';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
 
export class HomePage {
 
    constructor(public navCtrl: NavController) {
    
        let data = moment().format('DD-MM-YYYY');
        let time = moment().format('HH:mm:ss');
        /**/
        console.log('today is: ', data + ' and time: ', time);
        /**/

        this.items = [{"dateTime":"7-05-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"1","image":"https://www.visitdenmark.co.uk/sites/default/files/styles/block_ratio/public/vdk_images/Attractions-Activities-interest-accommodation-people-geo/Events/Sporting-events/color-run-credit-colorrun.dk.jpg?itok=udG3wZA3","members":[{"id":1,"photo":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg"},{"id":2,"photo":"https://media.simplecast.com/episode/image/72582/thumb_1497159762-artwork.jpg"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":7,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":8,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":9,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":10,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":11,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":12,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"going","title":"Amsterdam bike tour"},{"dateTime":"03-05-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"2","image":"https://www.visitdenmark.co.uk/sites/default/files/styles/block_ratio/public/vdk_images/Attractions-Activities-interest-accommodation-people-geo/Events/Sporting-events/color-run-credit-colorrun.dk.jpg?itok=udG3wZA3","members":[{"id":1,"photo":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg"},{"id":2,"photo":"https://media.simplecast.com/episode/image/72582/thumb_1497159762-artwork.jpg"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":7,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":8,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":9,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":10,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":11,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":12,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"going","title":"Amsterdam bike tour"},{"dateTime":"03-04-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"3","image":"https://www.visitdenmark.co.uk/sites/default/files/styles/block_ratio/public/vdk_images/Attractions-Activities-interest-accommodation-people-geo/Events/Sporting-events/color-run-credit-colorrun.dk.jpg?itok=udG3wZA3","members":[{"id":1,"photo":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg"},{"id":2,"photo":"https://media.simplecast.com/episode/image/72582/thumb_1497159762-artwork.jpg"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":7,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":8,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":9,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":10,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":11,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":12,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"going","title":"Amsterdam bike tour"},{"dateTime":"05-04-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"4","image":"http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg","members":[{"id":1,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":2,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":7,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":8,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":9,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":10,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":11,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":12,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"none","title":"FoodTruck Festival"},{"dateTime":"23-06-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"5","image":"http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg","members":[{"id":1,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":2,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"none","title":"cocktail night @ the pool"},{"dateTime":"05-04-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"6","image":"http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg","members":[{"id":1,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":2,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"none","title":"pizza night @ the pool"},{"dateTime":"26-01-2019 21:22:48","description":"TSH A'dam City invited you to this party ","id":"7","image":"http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg","members":[{"id":1,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":2,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"ignore","title":"Amsterdam bike tour"}];
        
        var items = [{"dateTime":"7-05-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"1","image":"https://www.visitdenmark.co.uk/sites/default/files/styles/block_ratio/public/vdk_images/Attractions-Activities-interest-accommodation-people-geo/Events/Sporting-events/color-run-credit-colorrun.dk.jpg?itok=udG3wZA3","members":[{"id":1,"photo":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg"},{"id":2,"photo":"https://media.simplecast.com/episode/image/72582/thumb_1497159762-artwork.jpg"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":7,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":8,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":9,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":10,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":11,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":12,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"going","title":"Amsterdam bike tour"},{"dateTime":"03-05-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"2","image":"https://www.visitdenmark.co.uk/sites/default/files/styles/block_ratio/public/vdk_images/Attractions-Activities-interest-accommodation-people-geo/Events/Sporting-events/color-run-credit-colorrun.dk.jpg?itok=udG3wZA3","members":[{"id":1,"photo":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg"},{"id":2,"photo":"https://media.simplecast.com/episode/image/72582/thumb_1497159762-artwork.jpg"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":7,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":8,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":9,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":10,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":11,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":12,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"going","title":"Amsterdam bike tour"},{"dateTime":"03-04-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"3","image":"https://www.visitdenmark.co.uk/sites/default/files/styles/block_ratio/public/vdk_images/Attractions-Activities-interest-accommodation-people-geo/Events/Sporting-events/color-run-credit-colorrun.dk.jpg?itok=udG3wZA3","members":[{"id":1,"photo":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg"},{"id":2,"photo":"https://media.simplecast.com/episode/image/72582/thumb_1497159762-artwork.jpg"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":7,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":8,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":9,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":10,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":11,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":12,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"going","title":"Amsterdam bike tour"},{"dateTime":"05-04-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"4","image":"http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg","members":[{"id":1,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":2,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":7,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":8,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":9,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":10,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":11,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":12,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"none","title":"FoodTruck Festival"},{"dateTime":"23-06-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"5","image":"http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg","members":[{"id":1,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":2,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"none","title":"cocktail night @ the pool"},{"dateTime":"05-04-2018 21:22:48","description":"TSH A'dam City invited you to this party ","id":"6","image":"http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg","members":[{"id":1,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":2,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"none","title":"pizza night @ the pool"},{"dateTime":"26-01-2019 21:22:48","description":"TSH A'dam City invited you to this party ","id":"7","image":"http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg","members":[{"id":1,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":2,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":3,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":4,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":5,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"},{"id":6,"photo":"https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"}],"status":"ignore","title":"Amsterdam bike tour"}];
        
        var dataitems = items;
        
        console.log(dataitems[0].dateTime);
        
        ///////////////////////////////////////// TODAY 
        /* var formatted = moment($dateElem.text(), 'MM-DD-YYYY').format('MMMM D'); */
        
        var day = moment((dataitems[0].dateTime), "DD-MM-YYYY HH:mm:ss").format("DD-MM-YYYY");
        let checktoday = moment().format('DD-MM-YYYY');
        
        console.log("checktoday: " + checktoday);
        console.log("day: " + day);
        
        var todayitems = dataitems; 
        var todayresult = [];
         
        for(var x in todayitems) {
            var xtoday = moment((todayitems[x].dateTime), "DD-MM-YYYY HH:mm:ss").format("DD-MM-YYYY");
        
            if( xtoday == checktoday) {
                    //delete todayitems[x];
                    //todayresult[x] = todayitems[x];
                    todayresult.push(todayitems[x]);
            }
            
        }
        //collection of today items
        
        if(todayresult!=null)
        this.eventstoday = todayresult;
        //$scope.eventstoday = eventstoday;
        //console.log("eventstoday");
        //console.log(eventstoday);
        
    
        ///////////////////////////////////////// TOMORROW
                
                
        var daytoday = moment().format("DD-MM-YYYY");
        var dayplus1 = moment().add(1, 'days');
        var tomorrow = dayplus1.format("DD-MM-YYYY");
        
        // hour AM PM
        //moment().format("hA"); 
        
        var tomoitems = dataitems; 
        var tomoresult = [];
         
        for(var x in tomoitems) {
        
            var chkday = moment((tomoitems[x].dateTime), "DD-MM-YYYY HH:mm:ss").format("DD-MM-YYYY");
        
            if( tomorrow == chkday) {
                tomoresult.push(tomoitems[x]);
            }
            
        }
            
        //collection of tomorrow items
        var eventstomorrow = tomoresult;        
        
        ////////////////////////////////////////// THIS WEEK
        
        var weekitems = dataitems; 
        var weekresult = [];
        
    
        for(var x in weekitems) 
        {
            var chkweekday = moment((weekitems[x].dateTime), "DD-MM-YYYY HH:mm:ss").format("DD-MM-YYYY");
        
            var numbers = [0,1,2,3,4,5,6];
            for (var number of numbers)      
            {
                    if (moment().weekday(chkweekday) == numbers[number])
                    {
                        weekresult.push(tomoitems[x]);
                    }
            }
        }
        
            
        //collection of tomorrow items
        var eventsthisweek = tomoresult;
        
        moment.locale('ie');
        //console.log(moment.weekdays(true));
    
        var firstday = moment().weekday(0).format("DD-MM-YYYY");
        var lastday = moment().weekday(6).format("DD-MM-YYYY");
        //wednesday
        var today = moment().format("dddd");
                
        console.log(firstday);
        console.log(lastday);
        console.log(today);
        console.log(daytoday);
        console.log(tomorrow);
        }
    }   
