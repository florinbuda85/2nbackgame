var goj = {
    
    score : 0,
    elems_array : new Array(),
    last_position: 0,
    
    start_game : function() {
        score = 0;
        setInterval(this.fill_random_item, 1500);
    },
    
    get_position : function() {
        pos = Math.floor(Math.random()*$("[id=item]").size());
        if (pos !== goj.last_position) {
            return pos;
        } else {
            return goj.get_position();
        }
    },
    
    fill_random_item : function() {
        
        // all back
        $("[id=item]").css('background-color', '#000000');
        
        // put new elem
        var position = goj.get_position();
        goj.last_position = position;
        
        goj.elems_array.push(position);
        
        $("[id=item]").eq(position).css('background-color', '#FF0000');
        console.log("p: " + position);
    },
    
    process_key : function() {
        var last = goj.elems_array.length-1;
        
        console.log("[" + goj.elems_array[last] + "] [" +  goj.elems_array[last-2] + "]");
        
        if (goj.elems_array[last] == goj.elems_array[last-2]) {
            goj.score++;
        } else {
            goj.score--;
        }
        $("#score").text(goj.score);
    }  
};