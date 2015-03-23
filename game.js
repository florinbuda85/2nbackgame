var goj = {
    
    score : 0,
    elems_array : new Array(),
    last_position: 0,
    colors : ["red", "blue", "white", "yellow", "gray"],
    
    start_game : function() {
        score = 0;
        setInterval(this.fill_random_item, 1600);
    },
    
    get_position : function() {
        pos = Math.floor(Math.random()*$("[id=item]").size());
        if (pos !== goj.last_position) {
            goj.last_position = pos;
            return pos;
        } else {
            return goj.get_position();
        }
    },
    
    get_color : function() {
        return goj.colors[Math.floor(Math.random()*goj.colors.length)];
    },
    
    fill_random_item : function() {
        
        // all back
        $("[id=item]").css('background-color', '#000000');
        
        //create element
        var element = {pos:goj.get_position(), color:goj.get_color()};
        goj.elems_array.push(element);
        
        $("[id=item]").eq(element.pos).css('background-color', element.color);
        //console.log("p: " + position);
    },
    
    process_position_key : function() {
        var last = goj.elems_array.length-1;
        
        if (last < 2) return;
        
        console.log("[" + goj.elems_array[last].pos + "] [" + goj.elems_array[last-2].pos + "]");
        
        if (goj.elems_array[last].pos == goj.elems_array[last-2].pos) {
            goj.score++;
        } else {
            goj.score--;
        }
        $("#score").text(goj.score);
    },
    
    process_symbol_key : function() {
        var last = goj.elems_array.length-1;
        
        if (last < 2) return;
        
        console.log("[" + goj.elems_array[last].color + "] [" + goj.elems_array[last-2].color + "]");
        
        if (goj.elems_array[last].color == goj.elems_array[last-2].color) {
            goj.score++;
        } else {
            goj.score--;
        }
        $("#score").text(goj.score);
    }, 
};