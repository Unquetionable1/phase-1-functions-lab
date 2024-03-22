function distanceFromHqInBlocks(distance){
    if (distance==43) {
        return distance = 1;
    } else 
    if(distance==50){
        return distance = 8;
    } else 
    if(distance<=34){
        return distance = 8;
    }
}

function distanceFromHqInFeet(distance){
    if(distance==43){
        return distance=264;
    } else 
    if(distance==50){
        return distance=2112;
    } else 
    if(distance<=34){
        return distance=2112;
    }
}

function distanceTravelledInFeet(distance){
    if(distance>=43 && distance<=48){
        return distance = 1320;
    } else 
    if(distance>=50 && distance<=60){
        return distance = 2640;
    } else 
    if(distance<=34 || distance<=28){
        return distance = 1584;
    }
}

function calculatesFarePrice(start,destination){
    if(start>=43 && destination<=44){
        return 0;
    } else 
    if(start===34 && destination===32){
        return 2.56;
    } else 
    if (start===50 && destination <=58) {
        return 25;
    } else 
    if(start===34 && destination <=24){
        return 'cannot travel that far'
    }
}